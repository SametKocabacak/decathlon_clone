<template>
  <div class="stack header-navbar navbar-mobile-navigate">
    <!-- Skip to content (accessibility) -->
    <a href="#main-content" class="skip-link">İçeriğe ulaş</a>
    
    <!-- Main Navigation Bar -->
    <nav class="main-nav">
      <div class="main-nav-container">
        <div class="left-section">
          <button class="menu-button" @click="handleMenuToggle" aria-label="Menü">
            <img src="/assets/icons/menu.svg" alt="Menü" class="menu-icon" />
            <span class="menu-text">Menü</span>
          </button>
          <a href="/" @click.prevent="handleLogoClick" class="logo-link">
            <img src="/assets/logo.svg" alt="Decathlon" class="logo-img" />
          </a>
        </div>
        
        <div class="center-section">
          <SearchBar @search="handleSearch" />
        </div>

        <div class="right-section">
          <div class="action-items">
            <a
              v-for="action in actions"
              :key="action.id"
              href="#"
              @click.prevent="handleActionClick(action.id)"
              class="action-item"
              :aria-label="action.label"
            >
              <div class="action-icon-wrapper">
                <img
                  :src="`/assets/icons/${action.icon}.svg`"
                  :alt="action.label"
                  class="action-icon-img"
                />
              </div>
              <span class="action-text">{{ action.label }}</span>
            </a>
          </div>
        </div>
      </div>
    </nav>

    <!-- Category Navigation Bar -->
    <nav class="category-nav">
      <div class="category-nav-container">
        <ul role="menubar" class="category-list">
          <li
            v-for="category in categories"
            :key="category.id"
            role="none"
            :class="['category-item', { 'category-red': category.highlight === 'red', 'category-bold': category.highlight === 'bold', 'category-purple': category.highlight === 'purple' }]"
          >
            <a 
              href="#" 
              role="menuitem"
              @click.prevent="handleCategoryClick(category.id)"
            >
              {{ category.text }}
              <span v-if="category.hasDropdown" class="dropdown-arrow">▼</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
import SearchBar from './SearchBar.vue'

export default {
  name: 'HeaderNavbar',
  components: {
    SearchBar,
  },
  props: {
    actions: {
      type: Array,
      default: () => [],
    },
    categories: {
      type: Array,
      default: () => [],
    },
    activeItem: {
      type: String,
      default: '',
    },
  },
  emits: ['action-clicked', 'logo-clicked', 'search', 'menu-toggle', 'category-clicked'],
  methods: {
    handleMenuToggle() {
      this.$emit('menu-toggle')
    },
    handleActionClick(actionId) {
      this.$emit('action-clicked', actionId)
    },
    handleLogoClick() {
      this.$emit('logo-clicked')
    },
    handleSearch(query) {
      this.$emit('search', query)
    },
    handleCategoryClick(categoryId) {
      this.$emit('category-clicked', categoryId)
    },
  },
}
</script>

<style scoped>
.stack {
  display: flex;
  flex-direction: column;
}

.header-navbar {
  position: sticky;
  top: 0;
  z-index: 1000;
  background-color: #ffffff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
}

.skip-link {
  position: absolute;
  top: -40px;
  left: 0;
  background: #000;
  color: #fff;
  padding: 8px;
  text-decoration: none;
  z-index: 100;
}

.skip-link:focus {
  top: 0;
}

/* Main Navigation */
.main-nav {
  background-color: #ffffff;
  border-bottom: 1px solid #e5e5e5;
}

.main-nav-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 1.5rem;
  display: flex;
  align-items: center;
  gap: 1.5rem;
  height: 80px;
}

.left-section {
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-shrink: 0;
  margin-right: auto;
}

.menu-button {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.125rem;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem 0.75rem;
  transition: opacity 0.2s ease;
  color: #1a1a1a;
}

.menu-button:hover {
  opacity: 0.7;
}

.menu-icon {
  width: 20px;
  height: 20px;
  display: block;
}

.menu-text {
  font-size: 0.6875rem;
  color: #1a1a1a;
  font-weight: 400;
  line-height: 1.2;
  margin-top: 2px;
}

.center-section {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 0;
  padding: 0 1rem;
}

.right-section {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-shrink: 0;
  margin-left: auto;
}

.logo-link {
  text-decoration: none;
  display: flex;
  align-items: center;
  padding: 0.5rem 0;
}

.logo-img {
  height: 40px;
  width: auto;
  display: block;
  max-width: 235px;
}

.action-items {
  display: flex;
  gap: 1rem;
  align-items: center;
}

.action-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: #1a1a1a;
  transition: all 0.2s ease;
  gap: 0.25rem;
  padding: 0.5rem;
  min-width: 60px;
  border-radius: 4px;
  position: relative;
}

.action-item:hover {
  background-color: #f5f5f5;
  color: #6B1D9C;
}

.action-item:hover .action-icon-img {
  filter: brightness(0) saturate(100%) invert(27%) sepia(89%) saturate(2000%) hue-rotate(260deg) brightness(90%) contrast(90%);
}

.action-icon-wrapper {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
}

.action-icon-img {
  width: 24px;
  height: 24px;
  display: block;
}

.action-text {
  font-size: 0.6875rem;
  color: #1a1a1a;
  font-weight: 400;
  line-height: 1.2;
  text-align: center;
  white-space: nowrap;
}

/* Category Navigation */
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
  display: flex;
  justify-content: center;
}

.category-nav-container::-webkit-scrollbar {
  display: none;
}

.category-list {
  display: flex;
  list-style: none;
  gap: 1.75rem;
  padding: 0.875rem 0;
  margin: 0 auto;
  align-items: center;
  min-width: max-content;
  justify-content: center;
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
  .main-nav-container {
    padding: 0 1rem;
    gap: 0.75rem;
  }

  .left-section {
    min-width: auto;
  }

  .menu-text {
    display: none;
  }

  .center-section {
    max-width: none;
  }

  .logo-img {
    height: 32px;
  }

  .action-items {
    gap: 1rem;
  }

  .action-text {
    font-size: 0.625rem;
  }

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

