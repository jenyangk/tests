<template>
  <div
    @dblclick="$emit('toggle-reminder', task.id)"
    :class="[task.reminder ? 'reminder' : '', 'task']"
  >
    <h3>
      {{ task.text }}
      <i @click="$emit('delete-task', task.id)" class="fas fa-times"></i>
    </h3>
    <p>{{ task.day }}</p>
  </div>
</template>

<script>
export default {
  name: "task-component",
  props: {
    task: Object,
  },
};
</script>

<style scoped>
.fas {
  color: #f46a6a;
  stroke: white;
  stroke-width: 2px;
}

.task {
  background: grey;
  margin: 5px;
  padding: 10px 20px;
  cursor: pointer;
}
.task.reminder {
  border-left: 5px solid #3dc14b;
}
.task h3 {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>