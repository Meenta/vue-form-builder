/**
 * Base Setup for any `controls` of Control in Vue-Form-Builder
 * @example InputControl - use the mixin. I'll keep our code extendable as possible
 */
import {STYLE_INJECTION_MIXIN} from "@/mixins/style-injection-mixin";
import ControlView from "../views/builder/ControlView.vue";
import DefaultPermission from "../configs/roles";
import Vue from "vue";

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
         /**
         * controls within childControls
         */
        renderChildControl(controlType, containerId) {
          if (this.control.childControls) {
            //check in the child controls for the control type
            //if it matches it will rendered in the DOM element
            //with the id passed (containerId)
            for (const ctrl of this.control.childControls) {
              if (ctrl.type === controlType) {
                //component creator based on ControlView class
                const Control = Vue.extend(ControlView);
                //component instance
                new Control({
                  propsData: {
                    control: ctrl,
                    parentId: containerId,
                    permissions: DefaultPermission
                  }
                }).$mount(`#${containerId}`);
              }
            }
          }
        },
        // gets props for manual control component instances
        getChildComponentProps(controlType, containerId='') {
          if (this.control.childControls) {
            //check in the child controls for the control type
            //if it matches it will be returned
            for(let i = 0; i < this.control.childControls.length; i++){
              if (this.control.childControls[i].type === controlType) {
                return {
                  control: this.control.childControls[i],
                  parentId: containerId,
                  permissions: DefaultPermission
                };
              }
            }
          }
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