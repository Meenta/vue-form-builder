<template>
    <!-- <div class="normal-section"> -->
    <div class="normal-section" v-if="checkVisibility()">
        <div class="headline-block" v-show="section.isShowHeadline">
            <h2 :class="section.headlineAdditionalClass" v-text="section.headline"></h2>
            <p :class="section.subHeadlineAdditionalClass" v-text="section.subHeadline"></p>
        </div>

        <div :class="containerClasses">
            <ControlView v-for="controlId in section.controls"
                         :key="controlId"
                         :control="controls[controlId]"
                         :parent-id="section.uniqueId"
                         :value-container="valueContainer"
                         :validation-errors="validationErrors"
            />
        </div>
    </div>
</template>

<script>
    import {RENDERER_SECTION_VIEW_MIXIN} from "@/mixins/renderer-section-view-mixin";
    import moment from "moment";

    /**
     * @property {Object} section
     * @property {Object} rows RowId - RowData
     * @property {Object} controls ControlId - ControlData
     * @property {Array} section.rows
     * @property {Array} section.controls
     */
    export default {
        name: "NormalSectionView",
        mixins: [RENDERER_SECTION_VIEW_MIXIN],
        data: () => ({
        }),
        methods: {
            checkVisibility() {
                let shouldHide = this.section.shouldHide.hide;
                if (shouldHide) {
                    if (this.section.shouldHide.conditionType === 'age' && this.valueContainer[section.shouldHide.fieldName]) {
                        if (this.section.shouldHide.ageValidatorControl) {
                            if (!this.valueContainer[this.section.shouldHide.ageValidatorControlName]) {
                                return true;
                            }
                        }

                        let selectedDate = moment(this.valueContainer[section.shouldHide.fieldName], "MM-DD-YYYY");
                        if (!selectedDate.isValid()) {
                            return true;
                        }
                        
                        const currentDate = new Date();
                        const currentYear = currentDate.getFullYear();
                        const currentMonth = currentDate.getMonth() + 1;
                        const currentDay = currentDate.getDate();
                        let yearsAgo = currentYear - selectedDate.year();
                        if (currentMonth > selectedDate.month() || (currentMonth === selectedDate.month() && currentDay > selectedDate.date())) {
                            yearsAgo = yearsAgo - 1 < 0 ? 0 : yearsAgo - 1;
                        }
                        switch(this.section.shouldHide.ageConditionEvaluation) {
                            case 'higher':
                                shouldHide = yearsAgo > parseInt(this.section.shouldHide.age);
                                break;
                            case 'lower':
                                shouldHide = yearsAgo < parseInt(this.section.shouldHide.age);
                                break;
                            case 'equal':
                                shouldHide = yearsAgo === parseInt(this.section.shouldHide.age);
                                break;
                            default:
                                break;
                        }
                    }
                }

                return shouldHide;
            }
        },
        mounted() {
            console.log('aqui: ', this);
        }

    }
</script>
