import ValidationResult from "@/libraries/classes/validation-result.class";
import requiredRule from "@/libraries/validations/required";
import minRule from "@/libraries/validations/min";
import maxRule from "@/libraries/validations/max";
import isEmailRule from "@/libraries/validations/is-email";
import sameAsRule from "@/libraries/validations/same-as";
import customClosureRule from "@/libraries/validations/custom-closure";
import isRegexPassed from "@/libraries/validations/regex";

export default class Validation {
  rules = null;
  valueContainer = null;
  customClosures = {};
  controls = null;

  /**
   * Validation Result. Always create a new instance every time the validation is run
   * @type {ValidationResult}
   */
  validationResult = null;

  /**
   * Create a new Validation handler
   * @param {Object} valueContainer
   * @param {Object} controls
   * @param {Object} definedClosures
   */
  constructor(valueContainer, controls, definedClosures = {}) {
    this.valueContainer = valueContainer;
    this.validationClosures = definedClosures;
    this.setRules(controls);

    this.controls = controls;
  }

  /**
   * Set validation rules from the controls
   * @param {{validations: ValidationRule[]}} controls
   */
  setRules(controls) {
    const rules = {};

    // traversal all control and pick the validations info
    Object.entries(controls).forEach((controlInfo) => {
      let [controlId, controlItem] = controlInfo;
      let controlName = controlItem.name || controlId;

      // no name => this field didn't have value
      if (!this.valueContainer.hasOwnProperty(controlName)) {
        return;
      }

      rules[controlName] = controlItem.validations;
      // rules[controlName] contains an array
      // however, we're slapping on a property
      // this might be a bad idea
      if (controlId) {
        rules[controlName].uniqueId = controlId;
      }
    });

    this.rules = rules;
  }

  /**
   * Start a validation check
   * @return {ValidationResult}
   */
  run() {
    this.validationResult = new ValidationResult();
    const controlKeys = Object.keys(this.rules);

    console.log('validation run this: ', this);
    for (const key of controlKeys) {
      // pickup basic data
      const controlValue = this.valueContainer[key];
      const controlRules = this.rules[key] || [];

      const control = this.controls[controlRules.uniqueId];
      const controlConditional = control.isConditional || false;
      const controlConditionalMet = control.conditionMet || false;

      // no rule no run
      if (!controlRules.length) {
        continue;
      }
      // is this input conditional and has the condition for it not been meet?
      // it's either invisible or disabled
      // as such, we can't apply ANY of our validation rules to it.
      if (controlConditional && controlConditionalMet !== true) {
        continue;
      }
      /**
       * start the validation process by each rules added for the control
       */
      for (const validationRule of controlRules) {
        const status = this._singleRuleRun(validationRule, controlValue);
        if (!status) {
          this.validationResult.addError(key, validationRule);
        }
      }
    }

    return this.validationResult;
  }

  /**
   * Run single rule to check
   * @param {ValidationRule} validationRule
   * @param {any} fieldValue
   * @private
   */
  _singleRuleRun(validationRule, fieldValue) {
    switch (validationRule.ruleType) {
      case "required":
        return requiredRule(fieldValue);

      case "min":
        return minRule(fieldValue, validationRule.additionalValue);

      case "max":
        return maxRule(fieldValue, validationRule.additionalValue);

      case "isEmail":
        return isEmailRule(fieldValue);

      case "sameAs":
        return sameAsRule(
          fieldValue,
          validationRule.additionalValue,
          this.valueContainer
        );

      case "customClosure":
        return customClosureRule(
          fieldValue,
          validationRule.additionalValue,
          this.valueContainer,
          this.customClosures
        );

      case "regex":
        return isRegexPassed(fieldValue, validationRule.additionalValue);

      default:
        throw new TypeError(
          `This validation type ${validationRule.ruleType} is not supported.`
        );
    }
  }
}
