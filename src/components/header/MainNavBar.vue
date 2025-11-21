<template>
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
</template>

<script>
import SearchBar from './SearchBar.vue'

export default {
  name: 'MainNavBar',
  components: {
    SearchBar,
  },
  props: {
    menuItems: {
      type: Array,
      default: () => [],
    },
    actions: {
      type: Array,
      default: () => [],
    },
    activeItem: {
      type: String,
      default: '',
    },
  },
  emits: ['menu-clicked', 'action-clicked', 'logo-clicked', 'search', 'menu-toggle'],
  methods: {
    handleMenuToggle() {
      this.$emit('menu-toggle')
    },
    handleMenuClick(itemId) {
      this.$emit('menu-clicked', itemId)
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
  },
}
</script>

<style scoped>
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
  gap: 1.25rem;
  height: 80px;
}

.left-section {
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-shrink: 0;
  min-width: 200px;
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
  max-width: 600px;
  margin: 0 auto;
}

.right-section {
  display: flex;
  align-items: center;
  gap: 0;
  flex-shrink: 0;
  min-width: auto;
  justify-content: flex-end;
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
  gap: 1.5rem;
  align-items: flex-start;
}

.action-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  color: #1a1a1a;
  transition: opacity 0.2s ease;
  gap: 0.25rem;
  padding: 0.25rem 0.5rem;
  min-width: 60px;
}

.action-item:hover {
  opacity: 0.7;
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
}
</style>

