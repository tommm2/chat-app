<template>
  <div class="form-group">
    <label :for="name"><i :class="icon"></i>{{ name }}</label>
    <Field
      :id="name"
      :type="type"
      :name="name"
      :placeholder="placeholder"
      :rules="rules"
      :value="inputValue"
      :autocomplete="autocomplete"
      @input="$emit('update:inputValue', $event.target.value)"
    />
    <ErrorMessage class="error-msg" :name="name" />
  </div>
</template>
<script setup>
import { Field, ErrorMessage } from "vee-validate";
import { defineProps, defineEmits, toRefs } from "vue";

defineEmits(["update:inputValue"]);
const props = defineProps({
  icon: {
    type: String,
    default: () => "",
  },
  name: {
    type: String,
    default: () => "",
  },
  placeholder: {
    type: String,
    default: () => "",
  },
  type: {
    type: String,
    default: () => "",
  },
  inputValue: {
    type: String,
    default: () => "",
  },
  autocomplete: {
    type: String,
    default: () => "",
  },
  rules: {
    type: String,
    default: () => "",
  },
});

const { icon, name, placeholder, type, rules } = toRefs(props);
</script>
<style lang="scss" scoped>
.form-group {
  width: 100%;
  margin: 4px 0;
  input {
    width: inherit;
    border: 0;
    margin: 10px 0;
    padding: 0.8rem 0.5rem;
    background-color: $secondary-color;
    color: $text-white;
    box-shadow: 2px 2px 8px $secondary-color;
    border-radius: 0.5rem;
    &:focus {
      outline: 0;
    }
  }
  .error-msg {
    color: $error-color;
    font-weight: 500;
    font-size: $small-size;
  }
  i {
    margin-right: 10px;
  }
}
</style>
