<template>
  <section class="brands-section">
    <div class="brands-grid">
      <div
        v-for="(brand, index) in brands"
        :key="index"
        class="brand-card"
        @click="handleBrandClick(brand)"
      >
        <img :src="brand.image" :alt="brand.name" class="brand-image" />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Brands',
  props: {
    brands: {
      type: Array,
      required: true,
    },
  },
  emits: ['brand-click'],
  methods: {
    handleBrandClick(brand) {
      this.$emit('brand-click', brand)
    },
  },
}
</script>

<style scoped>
.brands-section {
  margin: 3rem 0;
}

.brands-grid {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 1rem;
  max-width: 1400px;
  margin: 0 auto;
}

.brand-card {
  background-color: #f5f5f5;
  border: 1px solid #e5e5e5;
  border-radius: 4px;
  padding: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  min-height: 100px;
}

.brand-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.brand-image {
  max-width: 100%;
  max-height: 60px;
  object-fit: contain;
  width: auto;
  height: auto;
}

@media (max-width: 1200px) {
  .brands-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 0.75rem;
  }
}

@media (max-width: 768px) {
  .brands-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 0.75rem;
  }

  .brand-card {
    padding: 1rem;
    min-height: 80px;
  }

  .brand-image {
    max-height: 50px;
  }
}

@media (max-width: 480px) {
  .brands-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>

