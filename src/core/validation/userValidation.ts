import { useVuelidate } from '@vuelidate/core';
import { required, email } from '@vuelidate/validators';
import { ref, computed } from 'vue';

export const validationStructure = computed(() => {
  return {
    name: { required },
    lname: { required },
    age: { required },
    accept: { required },
    family: {
      father: { required },
      mother: { required },
    },
  };
});
