/**
 * Base Setup for any `controls` of Control in Vue-Form-Builder
 * @example InputControl - use the mixin. I'll keep our code extendable as possible
 */
import {STYLE_INJECTION_MIXIN} from "@/mixins/style-injection-mixin";
import {EVENT_CONSTANTS} from "@/configs/events";
import DefaultPermission from "../configs/roles";

const EMIT_EVENT = "change";

const CONTROL_FIELD_EXTEND_MIXIN = {
    mixins: [STYLE_INJECTION_MIXIN],

    props: {
        // control configuration
        control: {
            type: Object,
            required: true
        },

        // v-model value
        value: null, // any types
    },

    // global data-field - available to override
    data: () =>({
        stopDefaultValueAssign: false
    }),

    /**
     * For V-Model Purpose
     * Basically, we will emit the 'change' to the parent to keep the update...
     */
    model: {
        event: EMIT_EVENT,
        props: "value"
    },

    watch: {
        /**
         * Watch if there is new data being assigned
         * @param val
         */
        value(val) {
            this.setValue(val)
        }
    },

    methods: {
        /**
         * Run this to emit the value to the parent
         * @param val
         */
        updateValue(val) {
            this.$emit(EMIT_EVENT, val)
        },
        // gets props for manual control component instances
        getChildComponentProps(controlType, permissionOverride={}, containerId) {
          if (this.control.childControls) {
            //need to go all the way up to the form data to make sure we keep
            //controls in sync
            //if no controls are available at 2 levels it means we are viewing the control in the form builder
            //so we need to add a 3rd level
            const formData = this.$parent.$parent.controls ? this.$parent.$parent : this.$parent.$parent.$parent;
            if (formData.controls) {
              //check in the child controls for the controlId
              //if it matches it will be returned
              for (const ctrlId in formData.controls) {
                const chldCtrl = formData.controls[ctrlId];
                if (chldCtrl.type === controlType) {
                  return {
                    control: chldCtrl,
                    parentId: containerId || chldCtrl.parentControlId,
                    permissions: {...DefaultPermission, ...permissionOverride},
                  };
                }
              }
            }
          }
        },
        // scope is assigned by events, causing issues propagating info (a store would be very useful)
        // we need to listen for an event to know we need to update the references for child components
        onChildComponentListener(listenerFn){
          this.$formEvent.$on(EVENT_CONSTANTS.BUILDER.CONTROL.UPDATE_CHILDREN, listenerFn);
        },
        /**
         * Need-To-Override Method - Set Value.
         * Set value from parent to the current field/control
         */
        setValue(val) {return val} // NEED TO OVERRIDE
    },

    computed: {
        /**
         * Class for Field (input)
         * @returns {(string)[]}
         */
        controlFieldClass() {
            return [
                this.styles.FORM.FORM_CONTROL,
                this.control.additionalFieldClass
            ]
        },

        /**
         * Control Name
         * @returns {*|string|string}
         */
        controlName() {
            return this.control.name || this.control.uniqueId
        }
    },

    /**
     * Global post-mounted processing
     */
    mounted() {
        // default set value
        if (
            this.stopDefaultValueAssign === false &&
            !this.value &&
            this.control.defaultValue
        ) {
            this.updateValue(this.control.defaultValue)
        }
    },
}

export {
    CONTROL_FIELD_EXTEND_MIXIN
}