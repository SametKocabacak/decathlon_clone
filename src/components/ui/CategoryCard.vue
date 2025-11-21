<template>
  <Card>
    <div class="category-card-content">
      <div v-if="icon" class="category-icon">{{ icon }}</div>
      <slot name="icon" />
      <h3>{{ name }}</h3>
      <p v-if="count !== undefined" class="count">{{ count }} ürün</p>
      <slot />
    </div>
  </Card>
</template>

<script>
import Card from './Card.vue'

export default {
  name: 'CategoryCard',
  components: {
    Card,
  },
  props: {
    name: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      default: '',
    },
    count: {
      type: Number,
      default: undefined,
    },
  },
}
</script>

<style scoped>
.category-card-content {
  text-align: center;
}

.category-icon {
  font-size: 4rem;
  margin-bottom: 1rem;
}

.category-card-content h3 {
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
  color: #2c3e50;
}

.count {
  color: #7f8c8d;
  font-size: 0.9rem;
}
</style>

