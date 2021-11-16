import Validation from "@/libraries/validation";
import {EVENT_CONSTANTS} from "@/configs/events";
import {ALERT_DIALOG} from "@/libraries/alert-dialog";

const VALIDATION_MIXIN = {
    data: () => ({
        validationErrors: {}
    }),

    methods: {
        /**
         * Run the validation process
         */
        async runValidation() {
            // always clear validation before run...
            this.$set(this, 'validationErrors', {})

            // run the validation
            const result = await this.$form.Validation.run();

            // field-error handling
            if (result.errors()) {
                // use set for reactive...
                this.$set(this, 'validationErrors', result.errorBuckets)

                if (this.$form.validationErrorShowAlert) {
                    ALERT_DIALOG.show(this.$form.validationErrorAlertText)
                }

                return
            }

            // ok emit to all listener if they want to know the validation is ok or not
            this.$formEvent.$emit(EVENT_CONSTANTS.RENDERER.VALIDATION_OK, true)
        }
    },

    /**
     * Dependencies Injection into the Form-Renderer.
     */
    created() {
        console.log('this.formData.controls', this.formData.controls); //debug
        // create validation instance
        // this.$form.Validation = new Validation(
        //     this.valueContainer,
        //     this.formData.controls,
        //     this.$form.validationClosures || {},
        //     this.formData.sections
        // )
        // console.log('this.$form.Validation', this.$form.Validation); //debug

        // listen to validation invoke
        this.$formEvent.$on(EVENT_CONSTANTS.RENDERER.RUN_VALIDATION, this.runValidation);
    }
}

export {VALIDATION_MIXIN}