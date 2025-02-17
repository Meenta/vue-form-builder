// this demo contains normal form
const DEMO_FORM_DATA = {
  formConfig: {
    headline: "Create new Document",
    subHeadline:
      "Before processing your document, you need to create a new one first",
    isShowHeadline: true,
    renderFormTag: true,
    formActionURL: "",
    formMethod: "POST"
  },
  sections: {
    "section-8f514060-8f13-401a-a9c0-17125f6936d3": {
      uniqueId: "section-8f514060-8f13-401a-a9c0-17125f6936d3",
      headline: "Basic Information",
      headlineAdditionalClass: "",
      subHeadline: "Most basic info about a document",
      subHeadlineAdditionalClass: "",
      isShowHeadline: true,
      sortOrder: 1,
      type: "normal",
      rows: [],
      controls: [
        "control-c9d4df03-85de-4369-a9c6-86f49ae2e657",
        "control-2b5aeee2-4978-4d7f-ac10-805db59c962c",
        "control-51f745e6-60a8-417b-9f0f-042e7932b809",
        "control-8281d661-ed00-4d0e-94d9-6130c35389e8"
      ]
    },
    "section-9927d7ee-d40a-4ee1-94cf-a764d85ec9a2": {
      uniqueId: "section-9927d7ee-d40a-4ee1-94cf-a764d85ec9a2",
      headline: "Processing Detail",
      headlineAdditionalClass: "",
      subHeadline: "How your document gonna be processed?",
      subHeadlineAdditionalClass: "",
      isShowHeadline: true,
      sortOrder: 2,
      type: "normal",
      rows: [],
      controls: [
        "control-a0a23ed2-b22f-4ba1-9f62-bd09ddf16bae",
        "control-4557e539-8c79-4822-b36c-5cf06463844f",
        "control-b7d049d5-8896-4f83-b39e-743c6d9d8b11",
        "control-11c6ffc8-4c5a-4701-9b01-7e616f8038b4",
        "control-10a8f4ab-08ed-4a61-abb0-aaec08782f80"
      ]
    },
    "section-6f5bc178-5848-421f-94f2-349e02c83aa0": {
      uniqueId: "section-6f5bc178-5848-421f-94f2-349e02c83aa0",
      headline: "Optional Detail",
      headlineAdditionalClass: "",
      subHeadline: "Optional detail about your Document",
      subHeadlineAdditionalClass: "",
      isShowHeadline: true,
      sortOrder: 3,
      type: "toggleable",
      rows: [],
      controls: [
        "control-5661c457-234e-47cb-ac25-f33d605cbbc3",
        "control-4bcfe7f4-e744-4097-a28b-b13a806f2525",
        "control-983748e1-eb1f-477d-8f67-b32131315f5d",
        "control-b578d6aa-6ae3-4edf-a42f-3b5b1c0d8f05"
      ]
    },
    "section-9fe9a461-f3df-4765-abe2-4a74745b810e": {
      uniqueId: "section-9fe9a461-f3df-4765-abe2-4a74745b810e",
      headline: "Submit",
      headlineAdditionalClass: "",
      subHeadline: "",
      subHeadlineAdditionalClass: "",
      isShowHeadline: false,
      sortOrder: 4,
      type: "normal",
      rows: [],
      controls: [
        "control-ba5eb847-0129-45e7-933f-7d76a2e73bce",
        "control-0bc822d7-a9f1-403b-842e-fa7a80127ad7"
      ]
    }
  },
  rows: {},
  controls: {
    "control-c9d4df03-85de-4369-a9c6-86f49ae2e657": {
      uniqueId: "control-c9d4df03-85de-4369-a9c6-86f49ae2e657",
      type: "input",
      name: "name",
      label: "Title",
      subLabel: "",
      isShowLabel: true,
      placeholderText: "",
      containerClass: "col-md-6",
      additionalContainerClass: "",
      additionalFieldClass: "",
      additionalLabelClass: "",
      defaultValue: "Seth Phat",
      validations: []
    },
    "control-2b5aeee2-4978-4d7f-ac10-805db59c962c": {
      uniqueId: "control-2b5aeee2-4978-4d7f-ac10-805db59c962c",
      type: "input",
      name: "brief-description",
      label: "Brief Description",
      subLabel: "",
      isShowLabel: true,
      placeholderText: "What is this document?",
      containerClass: "col-md-6",
      additionalContainerClass: "",
      additionalFieldClass: "",
      additionalLabelClass: "",
      defaultValue: "",
      validations: [
        {
          ruleType: "required",
          errorMessage: "This field is required",
          additionalValue: ""
        }
      ]
    },
    "control-51f745e6-60a8-417b-9f0f-042e7932b809": {
      uniqueId: "control-51f745e6-60a8-417b-9f0f-042e7932b809",
      type: "text",
      name: "long-description",
      label: "Long Description",
      subLabel: "",
      isShowLabel: true,
      placeholderText: "More detail about this document.",
      containerClass: "col-md-12",
      additionalContainerClass: "",
      additionalFieldClass: "",
      additionalLabelClass: "",
      defaultValue: "",
      validations: [],
      rows: 6
    },
    "control-a0a23ed2-b22f-4ba1-9f62-bd09ddf16bae": {
      uniqueId: "control-a0a23ed2-b22f-4ba1-9f62-bd09ddf16bae",
      type: "checkbox",
      name: "doc_props",
      label: "Document's Properties",
      subLabel: "",
      isShowLabel: true,
      placeholderText: "",
      containerClass: "col-md-4",
      additionalContainerClass: "",
      additionalFieldClass: "",
      additionalLabelClass: "",
      defaultValue: "",
      validations: [
        {
          ruleType: "required",
          errorMessage: "This field is required",
          additionalValue: ""
        },
        {
          ruleType: "min",
          errorMessage: "Minimum value for this field is :min",
          additionalValue: "1"
        }
      ],
      displayMode: "bothSide",
      position: "left",
      items: [
        { value: "1", text: "Read" },
        { value: "2", text: "Write" },
        { value: "3", text: "Delete" }
      ]
    },
    "control-4557e539-8c79-4822-b36c-5cf06463844f": {
      uniqueId: "control-4557e539-8c79-4822-b36c-5cf06463844f",
      type: "radio",
      name: "is_deletable",
      label: "Deletable?",
      subLabel: "",
      isShowLabel: true,
      placeholderText: "",
      containerClass: "col-md-4",
      additionalContainerClass: "",
      additionalFieldClass: "",
      additionalLabelClass: "",
      defaultValue: "",
      validations: [],
      displayMode: "bothSide",
      position: "left",
      items: [
        { value: "1", text: "Yes" },
        { value: "0", text: "No" }
      ]
    },
    "control-b7d049d5-8896-4f83-b39e-743c6d9d8b11": {
      uniqueId: "control-b7d049d5-8896-4f83-b39e-743c6d9d8b11",
      type: "emptyBlock",
      name: "",
      label: "Empty Block",
      subLabel: "",
      isShowLabel: false,
      placeholderText: "",
      containerClass: "col-md-4",
      additionalContainerClass: "",
      additionalFieldClass: "",
      additionalLabelClass: "",
      defaultValue: "",
      validations: []
    },
    "control-11c6ffc8-4c5a-4701-9b01-7e616f8038b4": {
      uniqueId: "control-11c6ffc8-4c5a-4701-9b01-7e616f8038b4",
      type: "date",
      name: "doc_date",
      label: "Document Arrival Date",
      subLabel: "",
      isShowLabel: true,
      placeholderText: "",
      containerClass: "col-md-6",
      additionalContainerClass: "",
      additionalFieldClass: "",
      additionalLabelClass: "",
      defaultValue: "",
      validations: [],
      format: "DD/MM/YYYY",
      firstDay: 1,
      numberOfMonths: 1,
      numberOfColumns: 1,
      minDate: null,
      maxDate: null,
      singleMode: true,
      minDays: 0,
      maxDays: 0,
      returnType: "format"
    },
    "control-10a8f4ab-08ed-4a61-abb0-aaec08782f80": {
      uniqueId: "control-10a8f4ab-08ed-4a61-abb0-aaec08782f80",
      type: "date",
      name: "doc-process-range",
      label: "Document Available to Process In",
      subLabel: "",
      isShowLabel: true,
      placeholderText: "",
      containerClass: "col-md-6",
      additionalContainerClass: "",
      additionalFieldClass: "",
      additionalLabelClass: "",
      defaultValue: "",
      validations: [],
      format: "YYYY-MM-DD",
      firstDay: 1,
      numberOfMonths: 2,
      numberOfColumns: 2,
      minDate: null,
      maxDate: null,
      singleMode: false,
      minDays: 0,
      maxDays: 7,
      returnType: "format"
    },
    "control-5661c457-234e-47cb-ac25-f33d605cbbc3": {
      uniqueId: "control-5661c457-234e-47cb-ac25-f33d605cbbc3",
      type: "dropDown",
      name: "doc_processor",
      label: "Document Processor",
      subLabel: "",
      isShowLabel: true,
      placeholderText: "Choose a processor",
      containerClass: "col-md-6",
      additionalContainerClass: "",
      additionalFieldClass: "",
      additionalLabelClass: "",
      defaultValue: "",
      validations: [],
      dataMode: "list",
      multiple: false,
      items: [
        { value: "ap", text: "Account Payable" },
        { value: "po", text: "Purchase Order" },
        { value: "inv", text: "Invoice" }
      ],
      apiURL: "",
      apiTextKey: "text",
      apiValueKey: "value"
    },
    "control-4bcfe7f4-e744-4097-a28b-b13a806f2525": {
      uniqueId: "control-4bcfe7f4-e744-4097-a28b-b13a806f2525",
      type: "number",
      name: "total_value",
      label: "Total Value",
      subLabel: "",
      isShowLabel: true,
      placeholderText: "",
      containerClass: "col-md-6",
      additionalContainerClass: "",
      additionalFieldClass: "",
      additionalLabelClass: "",
      defaultValue: "",
      validations: [
        {
          ruleType: "required",
          errorMessage: "This field is required",
          additionalValue: ""
        },
        {
          ruleType: "max",
          errorMessage: "Total cost must below :max (dollar)",
          additionalValue: "50000"
        }
      ],
      isReal: true,
      decimalPlace: 2
    },
    "control-983748e1-eb1f-477d-8f67-b32131315f5d": {
      uniqueId: "control-983748e1-eb1f-477d-8f67-b32131315f5d",
      type: "label",
      name: "",
      label: "Permissions",
      subLabel: "",
      isShowLabel: false,
      placeholderText: "",
      containerClass: "col-md-6",
      additionalContainerClass: "text-right",
      additionalFieldClass: "",
      additionalLabelClass: "",
      defaultValue: "",
      validations: [],
      forAttribute: null
    },
    "control-b578d6aa-6ae3-4edf-a42f-3b5b1c0d8f05": {
      uniqueId: "control-b578d6aa-6ae3-4edf-a42f-3b5b1c0d8f05",
      type: "checkbox",
      name: "permissions",
      label: "",
      subLabel: "",
      isShowLabel: false,
      placeholderText: "",
      containerClass: "col-md-6",
      additionalContainerClass: "",
      additionalFieldClass: "",
      additionalLabelClass: "",
      defaultValue: "xx",
      validations: [],
      displayMode: "next",
      position: "left",
      items: [
        { value: "xa", text: "A.I Processing" },
        { value: "xx", text: "Human Processing" },
        { value: "xb", text: "No-body Processing" },
        { value: "xc", text: "Leave it there and somehow its processed" }
      ]
    },
    "control-ba5eb847-0129-45e7-933f-7d76a2e73bce": {
      uniqueId: "control-ba5eb847-0129-45e7-933f-7d76a2e73bce",
      type: "textBlock",
      name: "",
      label: "Simple text block note",
      subLabel: "",
      isShowLabel: true,
      placeholderText: "",
      containerClass: "col-md-12",
      additionalContainerClass: "",
      additionalFieldClass: "",
      additionalLabelClass: "",
      defaultValue: "",
      validations: [],
      text:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    "control-0bc822d7-a9f1-403b-842e-fa7a80127ad7": {
      uniqueId: "control-0bc822d7-a9f1-403b-842e-fa7a80127ad7",
      type: "button",
      name: "",
      label: "Create new Document",
      subLabel: "",
      isShowLabel: false,
      placeholderText: "",
      containerClass: "col-md-12",
      additionalContainerClass: "text-right",
      additionalFieldClass: "text-right",
      additionalLabelClass: "text-right",
      defaultValue: "",
      validations: [],
      buttonClass: "btn btn-success",
      buttonType: "submit",
      emitEventCode: "bruuh",
      emitEventData: "xnise",
      isRunValidation: true
    },
    "control-8281d661-ed00-4d0e-94d9-6130c35389e8": {
      uniqueId: "control-8281d661-ed00-4d0e-94d9-6130c35389e8",
      type: "input",
      name: "user_email",
      label: "Final Process User",
      subLabel: "",
      isShowLabel: true,
      placeholderText: "Email of Final Processor",
      containerClass: "col-md-6",
      additionalContainerClass: "",
      additionalFieldClass: "",
      additionalLabelClass: "",
      defaultValue: "",
      validations: [
        {
          ruleType: "required",
          errorMessage: "This field is required",
          additionalValue: ""
        },
        {
          ruleType: "isEmail",
          errorMessage: "Wrong email address format",
          additionalValue: ""
        }
      ]
    }
  }
};

// this demo contains tab section
//const DEMO_FORM_DATA = {"formConfig":{"headline":"","subHeadline":"","isShowHeadline":false,"renderFormTag":false,"formActionURL":"","formMethod":"POST"},"sections":{"section-1c49c507-55dd-4074-9c7f-32527aaa30c7":{"uniqueId":"section-1c49c507-55dd-4074-9c7f-32527aaa30c7","headline":"New Section","headlineAdditionalClass":"","subHeadline":"This is the sub-headline of the new section","subHeadlineAdditionalClass":"","isShowHeadline":true,"sortOrder":1,"type":"tab","rows":["row-0bbc4210-a3dc-4739-8259-830117c23c08","row-b64a4749-5eb4-4433-af07-1b197fae4ce8"],"controls":[]}},"rows":{"row-0bbc4210-a3dc-4739-8259-830117c23c08":{"uniqueId":"row-0bbc4210-a3dc-4739-8259-830117c23c08","additionalClass":"","type":"tabRow","sortOrder":0,"controls":["control-de4d9538-e1b1-4f99-b035-01122c1759bf","control-c624fc97-0769-4a41-a30c-cffcc8871acb"],"extendData":{"tabName":"Basic","defaultChecked":true}},"row-b64a4749-5eb4-4433-af07-1b197fae4ce8":{"uniqueId":"row-b64a4749-5eb4-4433-af07-1b197fae4ce8","additionalClass":"","type":"tabRow","sortOrder":0,"controls":["control-80c05507-3f97-457d-aa0a-e5e3e6b6dca2","control-80fc15f8-7d10-4b7a-be18-43b8aaa319da"],"extendData":{"tabName":"Advanced","defaultChecked":false}}},"controls":{"control-de4d9538-e1b1-4f99-b035-01122c1759bf":{"uniqueId":"control-de4d9538-e1b1-4f99-b035-01122c1759bf","type":"input","name":"","label":"Input Field","subLabel":"","isShowLabel":true,"placeholderText":"","containerClass":"col-md-4 md-layout-item md-size-33","additionalContainerClass":"","additionalFieldClass":"","additionalLabelClass":"","defaultValue":"","validations":[]},"control-c624fc97-0769-4a41-a30c-cffcc8871acb":{"uniqueId":"control-c624fc97-0769-4a41-a30c-cffcc8871acb","type":"number","name":"","label":"Number Input Field","subLabel":"","isShowLabel":true,"placeholderText":"","containerClass":"col-md-4 md-layout-item md-size-33","additionalContainerClass":"","additionalFieldClass":"","additionalLabelClass":"","defaultValue":"","validations":[],"isReal":false,"decimalPlace":1},"control-80c05507-3f97-457d-aa0a-e5e3e6b6dca2":{"uniqueId":"control-80c05507-3f97-457d-aa0a-e5e3e6b6dca2","type":"date","name":"","label":"Date Picker","subLabel":"","isShowLabel":true,"placeholderText":"","containerClass":"col-md-4 md-layout-item md-size-33","additionalContainerClass":"","additionalFieldClass":"","additionalLabelClass":"","defaultValue":"","validations":[],"format":"DD/MM/YYYY","firstDay":1,"numberOfMonths":1,"numberOfColumns":1,"minDate":null,"maxDate":null,"singleMode":true,"minDays":0,"maxDays":0,"returnType":"format"},"control-80fc15f8-7d10-4b7a-be18-43b8aaa319da":{"uniqueId":"control-80fc15f8-7d10-4b7a-be18-43b8aaa319da","type":"checkbox","name":"","label":"Checkbox List","subLabel":"","isShowLabel":true,"placeholderText":"","containerClass":"col-md-4 md-layout-item md-size-33","additionalContainerClass":"","additionalFieldClass":"","additionalLabelClass":"","defaultValue":"","validations":[],"displayMode":"line","position":"left","items":[{"value":"1","text":"dsfafdsf"},{"value":"12","text":"dsafasdf"}]}}}

// this demo contains a field with regex validation
//const DEMO_FORM_DATA = {"formConfig":{"headline":"","subHeadline":"","isShowHeadline":false,"renderFormTag":false,"formActionURL":"","formMethod":"POST"},"sections":{"section-11faa0c9-564f-49cf-94e3-f4a4978b3fb6":{"uniqueId":"section-11faa0c9-564f-49cf-94e3-f4a4978b3fb6","headline":"New Section","headlineAdditionalClass":"","subHeadline":"This is the sub-headline of the new section","subHeadlineAdditionalClass":"","isShowHeadline":true,"sortOrder":1,"type":"normal","rows":[],"controls":["control-47dea3ac-b79e-4ab5-bdf2-51e2ad39916c","control-820b1477-7533-4f8c-a6d6-1fc35b6ae0e9"]}},"rows":{},"controls":{"control-820b1477-7533-4f8c-a6d6-1fc35b6ae0e9":{"uniqueId":"control-820b1477-7533-4f8c-a6d6-1fc35b6ae0e9","type":"button","name":"","label":"Validation now","subLabel":"","isShowLabel":false,"placeholderText":"","containerClass":"col-md-12 md-layout-item md-size-100","additionalContainerClass":"","additionalFieldClass":"","additionalLabelClass":"","defaultValue":"","validations":[],"buttonClass":"btn btn-primary md-button md-raised md-primary md-theme-default","buttonType":"button","emitEventCode":"","emitEventData":"","isRunValidation":true},"control-47dea3ac-b79e-4ab5-bdf2-51e2ad39916c":{"uniqueId":"control-47dea3ac-b79e-4ab5-bdf2-51e2ad39916c","type":"input","name":"number","label":"Number but using Text Field","subLabel":"","isShowLabel":true,"placeholderText":"","containerClass":"col-md-4 md-layout-item md-size-33","additionalContainerClass":"","additionalFieldClass":"","additionalLabelClass":"","defaultValue":"","validations":[{"ruleType":"required","errorMessage":"This field is required","additionalValue":""},{"ruleType":"regex","errorMessage":"Must be number only","additionalValue":"^[0-9]+$|g"}]}}}

export { DEMO_FORM_DATA };
