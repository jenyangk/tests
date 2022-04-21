<template>
  <transition-group name="list" tag="div">
    <div :key="task.id" v-for="task in tasks">
      <task-component
        @toggle-reminder="$emit('toggle-reminder', task.id)"
        @delete-task="$emit('delete-task', task.id)"
        :task="task"
      />
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
  emits: ["delete-task", "toggle-reminder"],
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