<template>
  <div class="row q-pa-md">
    <div class="col">
      {{ userFamily }}
      <div class="row q-gutter-md items-start">
        <div class="col">
          <q-input
            filled
            v-model="fatherName"
            label="Father Name *"
            hint="Father name"
            :error="errorMessages('father')"
            lazy-rules
          />
        </div>
        <div class="col">
          <q-input
            filled
            v-model="motherName"
            label="Mother name *"
            hint="Mother Name"
            :error="errorMessages('mother')"
            lazy-rules
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, defineProps, defineModel, toRef } from 'vue';
//import { IUser } from 'src/components/models';

const userFamily = defineModel('userFamily');

const props = defineProps({
  user: {
    type: Object,
    require: true,
  },
  errorMessages: {
    type: Function,
    require: true,
  },
});

const fatherName = computed({
  get() {
    return userFamily.value.family.father ?? null;
  },
  // setter
  set(newValue) {
    userFamily.value.family.father = newValue ?? null;
  },
});

const motherName = computed({
  get() {
    return userFamily.value?.family?.mother ?? null;
  },
  // setter
  set(newValue) {
    userFamily.value.family.mother = newValue ?? null;
  },
});
</script>
