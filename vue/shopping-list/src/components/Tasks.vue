<template>
  <div :key="task.id" v-for="task in tasks">
    <task-component :task="task" />
  </div>
</template>

<script>
import TaskComponent from "./Task.vue";

export default {
  name: "tasks-component",
  props: {
    tasks: Array,
  },
  components: {
    TaskComponent,
  },
};
</script>