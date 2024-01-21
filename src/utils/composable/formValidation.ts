import { ref, onMounted, onUnmounted, reactive } from 'vue';
import { useVuelidate } from '@vuelidate/core';

const useFormValidation = () => {
  // state encapsulated and managed by the composable
  const validationFormData = ref({});
  const formValidationError = reactive({});
  const validationArray = reactive();
  const form = reactive({});

  const setFormDataValue = (data: object) => {
    // if (Object.keys(data).length > 0) {
    //   for (const [key, value] of Object.entries(data)) {
    //     if (typeof value === 'object' || value == null || value == '') {
    //       delete form[key];
    //     } else {
    //       form[key] = value;
    //     }
    //   }
    // }
    // validationField.forEach( (field) => {
    //   if(data[field] != undefined) {
    //     validationFormData.value[field] = data[field]
    //   }
    // })
    // validationFormData.value = formData;
    //console.log('validationFormData', validationFormData.value)
  };

  const setFormValidation = (validationStructure: object, formData: object) => {
    const v$ = useVuelidate(validationStructure, formData);
    v$.value.$validate();
    return v$;
  };

  const setValidateErrorMsg = (validationErrors) => {
    console.log('test setValidateErrorMsg', validationErrors);

    validationErrors.forEach((item) => {
      formValidationError[item.$property] = item.$message;
    });

    console.log('test formValidationError', formValidationError);
  };

  // expose managed state as return value
  const validation = reactive({
    form,
    formValidationError,
    setFormDataValue,
    setFormValidation,
    setValidateErrorMsg,
  });
  return { validation };
};

export default useFormValidation;
