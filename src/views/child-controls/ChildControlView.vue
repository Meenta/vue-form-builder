<template>
  <div>
    <template v-if="validationErrors">
      <RendererControlView
        :control="control"
        :parent-id="parentId"
        :value-container="valueContainer"
        :validation-errors="validationErrors"
        v-bind="controlProps"
      />
    </template>
    <template v-if="permissions">
      <BuilderControlView
        :control="control"
        :parent-id="parentId"
        :value-container="valueContainer"
        :permissions="permissions"
        v-bind="controlProps"
      />
    </template>
  </div>
</template>
<script>
import BuilderControlView from "../builder/ControlView.vue";
import RendererControlView from "../renderer/ControlView.vue";
export default {
  name: "ChildControlView",
  components: { BuilderControlView, RendererControlView },
  props: {
    control: {
      type: Object,
      required: true,
    },
    parentId: {
      type: String
    },
    valueContainer: {
      type: Object
    },
    validationErrors: {
      type: Object,
      default: () => ({}), // empty object
    },
    permissions: Object,
    controlProps: Object,
  },
};
</script>
