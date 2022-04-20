<template>
  <button
    :style="{ background: color }"
    class="btn"
    :title="text"
    @click="onClick()"
  >
    {{ text.slice(0, -5) }}
  </button>
</template>

<script>
export default {
  name: "button-component",
  props: {
    text: String,
    color: String,
  },
  methods: {
    onClick() {
      console.log("click");
    },
  },
};
</script>