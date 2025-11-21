<template>
  <div class="grid" :style="gridStyle">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'Grid',
  props: {
    columns: {
      type: [String, Number],
      default: 'auto-fill',
    },
    minWidth: {
      type: String,
      default: '250px',
    },
  },
  computed: {
    gridStyle() {
      if (this.columns === 'auto-fill') {
        return {
          gridTemplateColumns: `repeat(auto-fill, minmax(${this.minWidth}, 1fr))`,
        }
      }
      return {
        gridTemplateColumns: `repeat(${this.columns}, 1fr)`,
      }
    },
  },
}
</script>

<style scoped>
.grid {
  display: grid;
  gap: 1.5rem;
}
</style>

