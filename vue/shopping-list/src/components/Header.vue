<template>
  <header>
    <h1>{{ title }}</h1>
    <button-component text="Add Task" color="#65c46f" />
  </header>
</template>

<script>
import ButtonComponent from "./Button.vue";

export default {
  name: "ContentHeader",
  props: {
    title: String,
  },
  components: {
    ButtonComponent,
  },
  setup() {},
};
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}
</style>