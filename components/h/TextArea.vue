<template>
  <div class="flex flex-col w-full gap-1">
    <label
      :for="id"
      v-if="label"
      class="text-base text-gray-dark font-medium w-full"
      >{{ label }}</label
    >
    <div class="flex relative">
      <textarea
        :name="name"
        class="placeholder:text-sm text-base font-normal text-gray-600 outline-none border-[0.15rem] border-gray-300 border-solid w-full min-h-[7rem] bg-primary-5 px-2 hover:border-blue-500 focus:border-blue-600 rounded-md placeholder:text-gray-600/55"
        :id="id"
        v-model="dataValue"
        :placeholder="placeholder"></textarea>

      <span
        v-if="errorMessage"
        class="text-xs text-red-800 absolute -bottom-2 bg-white left-1"
        >{{ errorMessage }}</span
      >
    </div>
  </div>
</template>

<script setup>
import { useField } from "vee-validate";

const props = defineProps({
  label: {
    type: [String],
  },
  name: {
    required: true,
    type: [String],
  },

  placeholder: {
    type: [String],
    default: "",
  },
  id: {
    type: [String],
    required: true,
  },
  hasPreIcon: {
    type: Boolean,
    default: false,
  },
  preIcon: {
    type: [Function, String, Boolean, Object],
    default: false,
  },
  postIcon: {
    type: [Function, String, Boolean, Object],
    default: false,
  },
  modelValue: {
    type: [String],
  },
  rule: {
    type: [String],
  },
});

const { value: dataValue, errorMessage } = useField(props.name, props.rule, {
  initialValue: props.modelValue,
});

const value = computed(() => {
  return props.modelValue;
});
</script>
