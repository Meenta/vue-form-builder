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
  sections = null;

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
   * @param {Object} sections
   */
  constructor(valueContainer, controls, definedClosures = {}, sections) {
    this.valueContainer = valueContainer;
    this.sections = sections;
    this.validationClosures = definedClosures;
    // this.setRules(controls);

    this.controls = controls;
  }

  /**
   * Set validation rules from the controls
   * @param {{validations: ValidationRule[]}} controls
   */
  setRules(controls) {
    console.log('setRules controls', controls)//debug
    const rules = {};
    // traversal all control and pick the validations info
    Object.entries(controls).forEach((controlInfo) => {
      console.log('controlInfo', controlInfo)//debug
      let [controlId, controlItem] = controlInfo;
      let controlName = controlItem.name || controlId;
      console.log('valueContainer', this.valueContainer)//debug
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
    console.log('rules', rules)//debug
    this.rules = rules;
  }

  /**
   * Start a validation check
   * @return {ValidationResult}
   */
  async run () {
    try{
      console.log('try to run validation')//debug
      this.validationResult = new ValidationResult();
      console.log('validationResult', this.validationResult)//debug
      console.log('controlKeys', controlKeys)//debug
      const controlKeys = Object.keys(this.rules);
      
      for (const key of controlKeys) {
        // pickup basic data
        const controlValue = this.valueContainer[key];
        const controlRules = this.rules[key] || [];
        console.log('controlRules', controlRules); //debug
        const control = this.controls[controlRules.uniqueId];
        console.log('control', control); //debug
        const controlConditional = control.isConditional || false;
        const controlConditionalMet = control.conditionMet || false;

        // no rule no run
        if (!controlRules.length) {
          continue;
        }
        // is this input conditional and has the condition for it not been meet?
        // it's either invisible or disabled
        // as such, we can't apply ANY of our validation rules to it.
        console.log('controlConditional', controlConditional); //debug
        console.log('controlConditionalMet', controlConditionalMet); //debug
        if (controlConditional && controlConditionalMet !== true) {
          continue;
        }
        /**
         * start the validation process by each rules added for the control
         */
        for (const validationRule of controlRules) {
          console.log('validationRule', validationRule); //debug
          const status = await this._singleRuleRun(validationRule, controlValue);
          console.log('status', status); //debug
          if (!status) {
            this.validationResult.addError(key, validationRule);
          }
        }
      }

      // If a section is hidden, then we remove the validation in that section's controllers
      if (Object.keys(this.validationResult.errorBuckets).length > 0) {
        for (const sectionId in this.sections) {
          if (
            this.sections[sectionId] &&
            this.sections[sectionId].shouldHide &&
            this.sections[sectionId].shouldHide.hide &&
            this.sections[sectionId].shouldHide.hidden
            ) {
              // First check if the controls of this section have unique names, make an array with
              // unique names or id if there is no unique name
              const controlsNames = [];
              for (const sectionControlId of this.sections[sectionId].controls) {
                if (this.controls[sectionControlId]) {
                  controlsNames.push(this.controls[sectionControlId].name ? this.controls[sectionControlId].name : sectionControlId);
                }
              }

              for (const controlId of controlsNames) {
                if (this.validationResult.errorBuckets[controlId]) {
                  this.validationResult.removeError(controlId);
                }
              }
          }
        }
      }
      return this.validationResult;
    }
    catch(err) {
      console.error('VUE FORM ERROR: ', err);
    }
    
  }

  /**
   * Run single rule to check
   * @param {ValidationRule} validationRule
   * @param {any} fieldValue
   * @private
   */
  async _singleRuleRun(validationRule, fieldValue) {
    console.log('validationRule', validationRule, fieldValue); //debug
    console.log('validationRule.ruleType', validationRule.ruleType); //debug
    console.log('validationRule.rule', validationRule.rule); //debug
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
        // Adding flexibility to validations by checking the return type before rejecting the rule
        // this will allow validations to be added easier at the control registration level in boba
        const ruleResult = await validationRule.rule(fieldValue);
        if (typeof ruleResult !== 'boolean') {
          throw new TypeError(
            `This validation type ${validationRule.ruleType} is not supported.`
          );
        }
        return ruleResult;
    }
  }
}
