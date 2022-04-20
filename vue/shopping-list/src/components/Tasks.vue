<template>
  <transition-group name="list" tag="ul">
    <div :key="task.id" v-for="task in tasks">
      <task-component :task="task" />
    </div>
  </transition-group>
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

<style scoped>
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>