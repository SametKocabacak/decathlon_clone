<template>
  <section class="discount-section">
    <!-- Top Navigation Bar -->
    <nav class="category-nav-bar">
      <button
        v-for="(navItem, index) in navigationItems"
        :key="index"
        :class="['nav-button', { active: activeNavItem === navItem.id }]"
        @click="handleNavClick(navItem)"
      >
        {{ navItem.text }}
      </button>
    </nav>

    <!-- Discount Section -->
    <div class="discount-categories">
      <h2 class="discount-title">{{ title }}</h2>
      <div class="discount-buttons">
        <button
          v-for="(category, index) in categories"
          :key="index"
          class="discount-button"
          :style="{ backgroundImage: `url(${category.image})` }"
          @click="handleCategoryClick(category)"
        >
          <span class="discount-text">{{ category.text }}</span>
        </button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'DiscountCategories',
  props: {
    title: {
      type: String,
      default: 'KASIM İNDİRİMLERİ',
    },
    categories: {
      type: Array,
      required: true,
    },
    navigationItems: {
      type: Array,
      default: () => [
        { id: 'sports', text: 'SPORLAR' },
        { id: 'women', text: 'KADIN' },
        { id: 'men', text: 'ERKEK' },
        { id: 'kids', text: 'ÇOCUK' },
        { id: 'accessories', text: 'AKSESUAR' },
        { id: 'discounts', text: 'İNDİRİMLER' },
      ],
    },
  },
  emits: ['category-click', 'nav-click'],
  data() {
    return {
      activeNavItem: 'discounts',
    }
  },
  methods: {
    handleCategoryClick(category) {
      this.$emit('category-click', category)
    },
    handleNavClick(navItem) {
      this.activeNavItem = navItem.id
      this.$emit('nav-click', navItem)
    },
  },
}
</script>

<style scoped>
.discount-section {
  margin: 3rem 0;
}

/* Top Navigation Bar */
.category-nav-bar {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0;
  margin-bottom: 2rem;
  background-color: #f5f5f5;
  border-radius: 4px;
  padding: 0.5rem;
  flex-wrap: wrap;
}

.nav-button {
  flex: 1;
  min-width: 120px;
  padding: 1rem 1.5rem;
  background-color: #e8e8e8;
  border: none;
  color: #1a1a1a;
  font-size: 0.9375rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  border-radius: 4px;
  margin: 0 0.25rem;
  text-transform: uppercase;
}

.nav-button:hover {
  background-color: #d0d0d0;
}

.nav-button.active {
  background-color: #ffffff;
  color: #e60012;
  font-weight: 600;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

/* Discount Categories */
.discount-categories {
  text-align: center;
}

.discount-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 2.5rem;
  text-align: center;
}

.discount-buttons {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  flex-wrap: wrap;
}

.discount-button {
  width: 180px;
  height: 180px;
  border-radius: 50%;
  border: none;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.discount-button::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(220, 20, 60, 0.85);
  border-radius: 50%;
  z-index: 1;
}

.discount-button:hover {
  transform: scale(1.05);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.25);
}

.discount-button:active {
  transform: scale(0.98);
}

.discount-text {
  position: relative;
  z-index: 2;
  color: white;
  font-size: 1rem;
  font-weight: 600;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 1rem;
  line-height: 1.4;
}

@media (max-width: 1200px) {
  .discount-buttons {
    gap: 1.25rem;
  }

  .discount-button {
    width: 160px;
    height: 160px;
  }

  .discount-text {
    font-size: 0.9rem;
  }
}

@media (max-width: 768px) {
  .discount-title {
    font-size: 2rem;
    margin-bottom: 2rem;
  }

  .discount-buttons {
    gap: 1rem;
  }

  .discount-button {
    width: 140px;
    height: 140px;
  }

  .discount-text {
    font-size: 0.85rem;
    padding: 0.75rem;
  }
}

@media (max-width: 480px) {
  .discount-buttons {
    gap: 0.75rem;
  }

  .discount-button {
    width: 120px;
    height: 120px;
  }

  .discount-text {
    font-size: 0.75rem;
  }
}
</style>

