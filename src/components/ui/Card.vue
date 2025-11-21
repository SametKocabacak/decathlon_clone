<template>
  <div :class="['card', { 'card-hover': hover }]" @click="$emit('click')">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    hover: {
      type: Boolean,
      default: true,
    },
  },
  emits: ['click'],
}
</script>

<style scoped>
.card {
  background: white;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card-hover:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
}
</style>

