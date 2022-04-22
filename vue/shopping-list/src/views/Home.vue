<template>
  <transition name="expand">
    <div v-show="showAddTask">
      <add-task @add-task="addTask" />
    </div>
  </transition>
  <tasks-component
    @toggle-reminder="toggleReminder"
    @delete-task="deleteTask"
    :tasks="tasks"
  />
</template>

<script>
import TasksComponent from "../components/Tasks.vue";
import AddTask from "../components/AddTask.vue";

export default {
  name: "HomeView",
  props: {
      showAddTask: Boolean
  },
  components: {
    TasksComponent,
    AddTask,
  },
  methods: {
    addTask(task) {
      const newId = this.tasks.sort((x, y) => x.id - y.id).at(-1).id + 1;
      this.tasks = [...this.tasks, { ...task, id: newId }];
    },
    deleteTask(id) {
      if (confirm("Are you sure?")) {
        this.tasks = this.tasks.filter((task) => task.id !== id);
      }
    },
    toggleReminder(id) {
      this.tasks = this.tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      );
    },
  },
  data() {
    return {
      tasks: [],
    };
  },
  created() {
    this.tasks = [
      {
        id: 1,
        text: "Appointment",
        day: "March 1st at 2:30pm",
        reminder: true,
      },
      {
        id: 2,
        text: "Appointment",
        day: "March 2st at 2:30pm",
        reminder: true,
      },
      {
        id: 3,
        text: "Appointment",
        day: "March 3st at 2:30pm",
        reminder: true,
      },
      {
        id: 4,
        text: "Appointment",
        day: "March 4st at 2:30pm",
        reminder: true,
      },
    ];
  },
};
</script>

<style scoped>
.expand-enter-active,
.expand-leave-active {
  transition: opacity 0.2s ease;
}

.expand-enter-from,
.expand-leave-to {
  opacity: 0;
}
</style>