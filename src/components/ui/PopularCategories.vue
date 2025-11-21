<template>
  <section class="popular-categories">
    <h2 class="section-title">{{ title }}</h2>
    <div class="categories-grid">
      <div
        v-for="(category, index) in categories"
        :key="index"
        class="category-card"
        @click="handleCategoryClick(category)"
      >
        <div class="category-image-container">
          <img :src="category.image" :alt="category.name" class="category-image" />
        </div>
        <p class="category-name">{{ category.name }}</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'PopularCategories',
  props: {
    title: {
      type: String,
      default: 'POPÜLER KATEGORİLER',
    },
    categories: {
      type: Array,
      required: true,
    },
  },
  emits: ['category-click'],
  methods: {
    handleCategoryClick(category) {
      this.$emit('category-click', category)
    },
  },
}
</script>

<style scoped>
.popular-categories {
  margin: 3rem 0;
}

.section-title {
  font-size: 1.2rem;
  font-weight: 700;
  color: #1a1a1a;
  text-align: left;
  text-transform: uppercase;
  margin-bottom: 2rem;
  letter-spacing: 0.05em;
}

.categories-grid {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 1rem;
  max-width: 1400px;
  margin: 0 auto;
}

.category-card {
  background-color: white;
  cursor: pointer;
  transition: transform 0.3s ease;
  display: flex;
  flex-direction: column;
}

.category-card:hover {
  transform: translateY(-2px);
}

.category-image-container {
  width: 100%;
  height: 200px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  margin-bottom: 0.75rem;
}

.category-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.category-name {
  font-size: 0.9rem;
  font-weight: 700;
  color: #1a1a1a;
  text-align: center;
  text-transform: uppercase;
  margin: 0;
  letter-spacing: 0.02em;
}

@media (max-width: 1200px) {
  .categories-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 0.75rem;
  }
}

@media (max-width: 768px) {
  .section-title {
    font-size: 1.1rem;
    margin-bottom: 1.5rem;
  }

  .categories-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 0.75rem;
  }

  .category-image-container {
    height: 180px;
  }
}

@media (max-width: 480px) {
  .categories-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .category-image-container {
    height: 200px;
  }
}
</style>

