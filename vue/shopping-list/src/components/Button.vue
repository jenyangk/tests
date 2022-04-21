<template>
  <button
    :style="{ background: color }"
    class="btn"
    :title="text"
    @click="$emit('btn-click')"
  >
    {{ text }}
  </button>
</template>

<script>
export default {
  name: "button-component",
  props: {
    text: String,
    color: String,
  },
};
</script>