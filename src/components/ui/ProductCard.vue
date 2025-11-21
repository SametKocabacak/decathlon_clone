<template>
  <Card>
    <div class="product-card-content">
      <div v-if="image" class="product-image">{{ image }}</div>
      <slot name="image" />
      <h3>{{ name }}</h3>
      <p v-if="category" class="category">{{ category }}</p>
      <p v-if="price" class="price">{{ price }}</p>
      <slot />
    </div>
  </Card>
</template>

<script>
import Card from './Card.vue'

export default {
  name: 'ProductCard',
  components: {
    Card,
  },
  props: {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      default: '',
    },
    category: {
      type: String,
      default: '',
    },
    image: {
      type: String,
      default: '',
    },
  },
}
</script>

<style scoped>
.product-card-content {
  text-align: center;
}

.product-image {
  font-size: 4rem;
  margin-bottom: 1rem;
}

.product-card-content h3 {
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
  color: #2c3e50;
}

.category {
  color: #7f8c8d;
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
}

.price {
  font-size: 1.5rem;
  font-weight: 600;
  color: #3498db;
  margin-top: 0.5rem;
}
</style>

