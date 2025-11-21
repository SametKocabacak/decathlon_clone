<template>
  <header class="header">
    <HeaderNavbar
      :actions="navActions"
      :categories="categoryItems"
      :active-item="activeMenuItem"
      @action-clicked="handleActionClick"
      @logo-clicked="handleLogoClick"
      @search="handleSearch"
      @menu-toggle="handleMenuToggle"
      @category-clicked="handleCategoryClick"
    />
  </header>
</template>

<script>
import HeaderNavbar from './HeaderNavbar.vue'

export default {
  name: 'Header',
  components: {
    HeaderNavbar,
  },
  props: {
    navActions: {
      type: Array,
      default: () => [],
    },
    categoryItems: {
      type: Array,
      default: () => [],
    },
    activeMenuItem: {
      type: String,
      default: '',
    },
  },
  emits: ['action-clicked', 'logo-clicked', 'search', 'menu-toggle', 'category-clicked'],
  methods: {
    handleActionClick(actionId) {
      this.$emit('action-clicked', actionId)
    },
    handleLogoClick() {
      this.$emit('logo-clicked')
    },
    handleSearch(query) {
      this.$emit('search', query)
    },
    handleMenuToggle() {
      this.$emit('menu-toggle')
    },
    handleCategoryClick(categoryId) {
      this.$emit('category-clicked', categoryId)
    },
  },
}
</script>

<style scoped>
.header {
  position: relative;
}
</style>

