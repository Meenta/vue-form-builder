<template>
  <div class="control-label-container" :class="{ required: isRequired && control.type !== 'ageVerification' }">
    <label
      v-text="control.label"
      :for="control.uniqueId"
      :class="control.additionalLabelClass"
    >
    </label>
    <br v-if="control.subLabel" />
    <small v-if="control.subLabel" v-text="control.subLabel"> </small>
  </div>
</template>

<script>
export default {
  name: "ControlLabel",
  props: {
    control: {
      type: Object,
      required: true
    }
  },
  computed: {
    isRequired() {
      return !!this.control.validations.find(
        (element) => element.ruleType === "required"
      );
    }
  }
};
</script>

<style scoped></style>
