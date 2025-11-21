<template>
  <nav class="category-nav">
    <div class="category-nav-container">
      <ul class="category-list">
        <li
          v-for="category in categories"
          :key="category.id"
          :class="['category-item', { 'category-red': category.highlight === 'red', 'category-bold': category.highlight === 'bold', 'category-purple': category.highlight === 'purple' }]"
        >
          <a href="#" @click.prevent="handleClick(category.id)">
            {{ category.text }}
            <span v-if="category.hasDropdown" class="dropdown-arrow">▼</span>
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'CategoryNav',
  props: {
    categories: {
      type: Array,
      default: () => [],
    },
  },
  emits: ['category-clicked'],
  methods: {
    handleClick(categoryId) {
      this.$emit('category-clicked', categoryId)
    },
  },
}
</script>

<style scoped>
.category-nav {
  background-color: #ffffff;
  border-bottom: 1px solid #e5e5e5;
}

.category-nav-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 1.5rem;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
}

.category-nav-container::-webkit-scrollbar {
  display: none;
}

.category-list {
  display: flex;
  list-style: none;
  gap: 2rem;
  padding: 1rem 0;
  margin: 0;
  align-items: center;
  min-width: max-content;
}

.category-item {
  position: relative;
  white-space: nowrap;
}

.category-item a {
  color: #1a1a1a;
  text-decoration: none;
  font-size: 0.9375rem;
  font-weight: 400;
  display: inline-flex;
  align-items: center;
  gap: 0.375rem;
  transition: color 0.2s ease;
  line-height: 1.5;
  padding: 0.5rem 0;
  position: relative;
}

.category-item a:hover {
  color: #6B1D9C;
}

.category-item a::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background-color: #6B1D9C;
  transition: width 0.3s ease;
}

.category-item a:hover::after {
  width: 100%;
}

.category-red a {
  color: #e60012;
  font-weight: 400;
}

.category-red a:hover {
  color: #cc0010;
}

.category-red a::after {
  background-color: #e60012;
}

.category-bold a {
  font-weight: 700;
  color: #1a1a1a;
}

.category-bold a:hover {
  color: #6B1D9C;
}

.category-purple a {
  color: #6B1D9C;
  font-weight: 400;
}

.category-purple a:hover {
  color: #5a1880;
}

.category-purple a::after {
  background-color: #6B1D9C;
}

.dropdown-arrow {
  font-size: 0.625rem;
  margin-left: 0.125rem;
  opacity: 0.6;
  display: inline-block;
  transform: translateY(-1px);
}

@media (max-width: 768px) {
  .category-nav-container {
    padding: 0 1rem;
  }

  .category-list {
    gap: 1.25rem;
    padding: 0.75rem 0;
  }

  .category-item a {
    font-size: 0.875rem;
  }
}
</style>

