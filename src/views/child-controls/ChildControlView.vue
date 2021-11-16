<template>
  <Fragment>
    <Fragment v-if="validationErrors">
      <RendererControlView
        :control="control"
        :parent-id="parentId"
        :value-container="valueContainer || {}"
        :validation-errors="validationErrors"
        :control-props="controlProps"
      />
    </Fragment>
    <Fragment v-if="!validationErrors">
      <BuilderControlView
        :control="control"
        :parent-id="parentId"
        :value-container="valueContainer || {}"
        :permissions="permissions"
        :control-props="controlProps"
        :is-child-control="true"
      />
    </Fragment>
  </Fragment>
</template>
<script>
import BuilderControlView from "../builder/ControlView.vue";
import RendererControlView from "../renderer/ControlView.vue";
import { Fragment } from 'vue-fragment';
export default {
  name: "ChildControlView",
  components: { Fragment, BuilderControlView, RendererControlView },
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
      type: Object
    },
    permissions: Object,
    controlProps: Object,
  },
  mounted(){
    console.log('ChildControlView', this); //debug
  }
};
</script>
