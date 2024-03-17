<template>
  <div class="flex flex-col w-full gap-1">
    <label
      :for="id"
      v-if="label"
      class="text-base text-gray-dark font-medium w-full"
      >{{ label }}</label
    >
    <div class="flex relative">
      <component
        v-show="preIcon"
        :is="preIcon"
        class="absolute top-0 bottom-0 text-base text-center flex items-center justify-center w-10 left-0 border-r border-slate-400 pl-1"></component>
      <div
        v-if="postIcon"
        class="absolute top-0 bottom-0 right-0 text-base text-center flex items-center justify-center w-10 border-l border-slate-400 pl-1">
        <Icon
          class="cursor-pointer"
          @click="postFunction"
          is="button"
          :name="postIcon"></Icon>
      </div>

      <input
        :name="name"
        :class="[
          'placeholder:text-sm  text-base font-normal text-gray-600 outline-none border-[0.15rem]  border-gray-300 border-solid  w-full hover:border-blue-500 h-[3rem] focus:border-blue-600 rounded-md placeholder:text-gray-600/55',
          preIcon ? (postIcon ? 'px-10' : 'pl-10 px-3') : 'px-3',
        ]"
        :type="type"
        :id="id"
        v-model="dataValue"
        :placeholder="placeholder" />

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
    type: [String, Object, Number, Boolean],
  },
  type: {
    required: true,
    type: [String],
  },
  placeholder: {
    type: [String, Object, Boolean],
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
    type: [String, Number, Object],
  },
  rule: {
    type: [String, Object, Boolean],
  },
});

const { value: dataValue, errorMessage } = useField(props.name, props.rule, {
  initialValue: props.modelValue,
});

const type = ref(props.type);

const value = computed(() => {
  return props.modelValue;
});

const postFunction = () => {
  type.value = type.value === "password" ? "text" : "password";
};
</script>
