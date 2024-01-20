<template>
  <div class="q-pa-md example-row-equal-width">
    <div class="row">
      <div class="col">
        <h4>Student Profile Form</h4>
        {{ user }}
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
import ExampleComponent from 'components/ExampleComponent.vue';
import { ref, computed } from 'vue';
import FamilyDetails from './../components/studentProfile/familyDetails/FamilyDetails.vue';
import { useVuelidate } from '@vuelidate/core';
import { required, email } from '@vuelidate/validators';
// import Vuelidate from 'vuelidate';
// import {
//   email,
//   maxValue,
//   minValue,
//   numeric,
//   required,
// } from 'vuelidate/lib/validators';

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

const rules = computed(() => {
  return {
    name: { required },
    lname: { required },
    age: { required },
    accept: { required },
  };
});
// const rules = {
//   name: { required },
//   lname: { required },
//   age: { required },
//   accept: { required },
// };

const v$ = useVuelidate(rules, user.value);

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
  v$.value.$validate();
  console.log('v$.value', v$.value);
  console.log('v$.value.$error', v$.value.$error);
  // if success
  if (!v$.value.$error) {
    alert('Form Successfully Submitted!');
  }
  // validation.setFormDataValue(user.value);
  // validation.setFormDataValue(familyObj.value);
  // setFormDataValue(user.value.fam, validationFamilyField)
  // if(typeof user.value.fam == 'object') {
  //   console.log('yes')
  // } else{
  //   console.log('no')
  // }
};

const errorMessages = (field: string) => {
  // if (Object.keys(validation.form).length > 0) {
  //   if (validation.form[field] == undefined) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }
  return false;
};
</script>
