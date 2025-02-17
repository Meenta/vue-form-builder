<template>
  <div id="app">
    <h1 class="text-center mt-2">
      Vue-Form-Builder @ v2.1.0 - Development-Preview
    </h1>
    <p class="text-center">Presented by <strong>Seth (Sandaru) Phat</strong></p>
    <h4 class="text-center mb-3">
      What you <strong>BUILD</strong> is what you <strong>GOT</strong>.
    </h4>

    <div class="col-md-12">
      <button class="btn btn-info mr-2" @click="getData">
        Get JSON Form-Data (Console / Builder)
      </button>
      <button class="btn btn-info mr-2" @click="setData">
        Set JSON Form-Data (Basic Configuration / Builder)
      </button>
      <button class="btn btn-info mr-2" @click="createBlank">
        Create Blank Form (Builder)
      </button>

      <button class="btn btn-info mr-2" @click="viewRenderer">
        <span v-show="isRenderer">
          Back to Builder
        </span>
        <span v-show="!isRenderer">
          View Renderer Form from Basic Configuration
        </span>
      </button>
    </div>

    <hr />

    <FormBuilder v-if="!isRenderer" v-model="formData"></FormBuilder>

    <div class="row" v-if="isRenderer" style="padding: 20px; margin-right: 0">
      <div class="col-md-12 mb-4">
        <button class="btn btn-success  mr-2" @click="isShowData = !isShowData">
          <span v-show="isShowData">Hide Form Data</span>
          <span v-show="!isShowData">Show Form Data</span>
        </button>

        <button class="btn btn-info mr-2" @click="setRandomData">
          Set Random Data
        </button>
      </div>

      <FormRenderer
        :class="{ 'col-md-9': isShowData, 'col-md-12': !isShowData }"
        :form-configuration="formData"
        v-model="formInputData"
        ref="FormGui"
      />

      <div
        class="p-0"
        :class="{ 'col-md-3': isShowData, 'd-none': !isShowData }"
      >
        <h4>Form Input Data</h4>
        <pre
          class="code"
        ><code class="code" v-html="JSON.stringify(formInputData, null, 2)"></code></pre>
      </div>
    </div>
  </div>
</template>

<script>
/**
 * NOTE - This file only exists for development purpose.
 */
import FormBuilder from "@/components/FormBuilder";
import FormRenderer from "@/components/FormRenderer";
import { DEMO_FORM_DATA } from "@/demo-form-data";
import _ from "lodash";

export default {
  components: {
    FormBuilder,
    FormRenderer
  },
  data: () => ({
    formData: null,
    isShowDevNote: false,
    isRenderer: false,
    formInputData: null,
    isShowData: false,
    controls: [],
    controlIds: [],
    controlsWithConditions: [],
    controlConditions: []
  }),
  watch: {
    formInputData: {
      handler: function(val) {
        this.triggerConditionalCheck(val);
      },
      deep: true
    }
  },
  methods: {
    async triggerConditionalCheck(values) {
      Object.keys(values).forEach((value) => {
        let keyValue = values[value];
        let keyAsString = value.toString();

        if (keyValue) {
          if (this.controlsWithConditions.indexOf(keyAsString) > -1) {
            let matches = _.filter(this.controlConditions, (element) => {
              if (element.conditionalFieldName === keyAsString) {
                return element;
              }
            });
            if (matches.length) {
              let form = this.$refs.FormGui;

              let exactMatches = _.filter(matches, {
                conditionalFieldValue: keyValue
              });

              let inexactMatches = _.filter(matches, function(o) {
                return o.conditionalFieldValue !== keyValue;
              });

              if (inexactMatches.length) {
                _.each(inexactMatches, async (em) => {
                  let ref = form.formData.controls[em.controlUniqueId];
                  this.$set(ref, "conditionMet", false);
                });
              }

              if (exactMatches.length > 0) {
                _.each(exactMatches, async (em) => {
                  let ref = form.formData.controls[em.controlUniqueId];
                  this.$set(ref, "conditionMet", true);
                });
              }
            }
          }
        }
      });
    },
    getData() {
      console.log(JSON.stringify(this.formData));
    },

    createBlank() {
      this.formData = Object.assign({});
    },

    setData() {
      this.formData = Object.assign({}, DEMO_FORM_DATA);
      Object.keys(this.formData.controls).forEach((controlUniqueId) => {
        let control = this.formData.controls[controlUniqueId];
        this.controls.push(control);
        this.controlIds.push(control.uniqueId);

        if (
          control.isConditional &&
          control.conditionalFieldName &&
          control.conditionalFieldValue
        ) {
          this.controlsWithConditions.push(control.conditionalFieldName);
          this.controlConditions.push({
            controlName: control.name,
            controlUniqueId: control.uniqueId,
            conditionalFieldName: control.conditionalFieldName,
            conditionalFieldValue: control.conditionalFieldValue,
            conditionalWhenMet: control.conditionalWhenMet,
            conditionalWhenNotMet: control.conditionalWhenNotMet
          });
        }
      });
    },

    viewRenderer() {
      if (!this.isRenderer) {
        this.setData();
        this.isRenderer = true;
        return;
      }

      this.isRenderer = false;
    },

    setRandomData() {
      const faker = require("faker");

      this.$set(this, "formInputData", {
        name: faker.name.findName(),
        "brief-description": faker.company.companyName(),
        "long-description": faker.lorem.paragraphs(),
        user_email: faker.internet.email(),
        is_deletable: faker.random.number({ min: 0, max: 1 }),
        doc_props: ["" + faker.random.number({ min: 1, max: 3 })],
        doc_date: faker.date.past(),
        "doc-process-range": {
          startDate: faker.date.past(),
          endDate: faker.date.future()
        },
        total_value: faker.finance.amount()
      });
    }
  }
};
</script>

<style scoped>
pre {
  background: #333;
  white-space: pre;
  word-wrap: break-word;
  overflow: auto;
}

pre.code {
  margin: 20px 0;
  border-radius: 4px;
  border: 1px solid #292929;
  position: relative;
}

pre.code code {
  display: block;
  padding: 15px 16px 14px;
  border-left: 1px solid #555;
  overflow-x: auto;
  font-size: 13px;
  line-height: 19px;
  color: #ddd;
}
</style>
