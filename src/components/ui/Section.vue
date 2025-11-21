<template>
  <section :class="['section', { 'section-bordered': bordered }]">
    <slot />
  </section>
</template>

<script>
export default {
  name: 'Section',
  props: {
    bordered: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style scoped>
.section {
  margin-bottom: 2rem;
}

.section-bordered {
  padding-top: 2rem;
  border-top: 1px solid #ecf0f1;
}
</style>

