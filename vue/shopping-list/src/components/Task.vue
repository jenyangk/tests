<template>
  <div class="task">
    <h3>{{ task.text }}</h3>
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
  color: red;
}
.task {
  background: grey;
  margin: 5px;
  padding: 10px 20px;
  cursor: pointer;
}
.task.reminder {
  border-left: 5px solid green;
}
.task h3 {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>