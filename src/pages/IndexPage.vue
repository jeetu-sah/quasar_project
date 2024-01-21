<template>
  <div class="q-pa-md example-row-equal-width">
    <div class="row">
      <div class="col">
        <h4>Student Profile Form</h4>
        {{ user }}
        {{ validation.formValidationError }}
      </div>
    </div>

    <div class="row q-pa-md">
      <div class="col">
        <q-form class="q-gutter-md">
          <div class="row q-gutter-md items-start">
            <div class="col">
              <q-input
                filled
                v-model="user.name"
                label="First name *"
                hint="First name"
                :error="errorMessages('name')"
                lazy-rules
              />
            </div>
            <div class="col">
              <q-input
                filled
                v-model="user.lname"
                label="Last name *"
                hint="Last Name"
                lazy-rules
                :error="errorMessages('lname')"
              />
            </div>
          </div>

          <FamilyDetails
            v-model:userFamily="user"
            :errorMessages="errorMessages"
          />

          <div>
            <q-btn
              label="Submit"
              type="button"
              color="primary"
              @click="submitRequest()"
            />
            <q-btn
              label="Reset"
              type="reset"
              color="primary"
              flat
              class="q-ml-sm"
            />
            <q-btn
              label="Validate"
              @click="checkValidate()"
              type="button"
              color="primary"
              class="q-ml-sm"
            />
          </div>
        </q-form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Meta } from 'components/models';
import { ref, onMounted, reactive } from 'vue';
import FamilyDetails from './../components/studentProfile/familyDetails/FamilyDetails.vue';
import { validationStructure } from '../core/validation/userValidation';
import useFormValidation from './../utils/composable/formValidation';
import { useVuelidate } from '@vuelidate/core';

const { validation } = useFormValidation();

const user = ref({
  name: null,
  lname: 'Sahu',
  age: 27,
  accept: 'yes',
  family: {
    father: 'Father Name test',
    mother: 'mother name test',
  },
});

const validationErrors = reactive({});
// const rules = computed(() => {
//   return {
//     name: { required },
//     lname: { required },
//     age: { required },
//     accept: { required },
//   };
// });
// const rules = {
//   name: { required },
//   lname: { required },
//   age: { required },
//   accept: { required },
// };

//const v$ = useVuelidate(validationStructure, user.value);

const v$ = validation.setFormValidation(validationStructure, user.value);

// const rules = ref({
//   name: { required }, // Matches state.firstName
//   lname: { required }, // Matches state.lastName
//   age: { required },
//   accept: { required },
//   family: {
//     father: { required }, // Matches state.contact.email
//     mother: { required }, // Matches state.contact.email
//   },
// });

const checkValidate = async () => {
  // vuelidate validation
  if (!v$.value.$error) {
    alert('Form Successfully Submitted!');
  } else {
    validation.setValidateErrorMsg(v$.value.$errors);
  }
};
// lifecycle hooks
onMounted(() => {
  //v$.value.$validate();
  //validation.setFormValidation(validationStructure, user.value);
});

const errorMessages = (field: string) => {
  if (field != null) {
    if (Object.keys(validation.formValidationError)) {
      if (validation.formValidationError[field]) {
        return true;
      }
    }
  }
  return false;
};
</script>
