<template>
  <header>
    <h1>{{ title }}</h1>
    <button-component
      :text="showAddTask ? 'Close' : 'Add Task'"
      :color="showAddTask ? '#f46a6a' : '#65c46f'"
      @btn-click="$emit('toggle-add-task')"
    />
  </header>
</template>

<script>
import ButtonComponent from "./Button.vue";

export default {
  name: "ContentHeader",
  props: {
    title: String,
    showAddTask: Boolean,
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