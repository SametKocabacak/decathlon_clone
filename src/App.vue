<template>
  <div class="app-wrapper">
    <Header
      :nav-actions="headerData.navActions"
      :category-items="headerData.categoryItems"
      :active-menu-item="activeHeaderMenuItem"
      @action-clicked="handleActionClick"
      @logo-clicked="handleLogoClick"
      @search="handleSearch"
      @menu-toggle="handleMenuToggle"
      @category-clicked="handleCategoryClick"
    />
    <div class="app-container">
      <Sidebar 
        :menu-items="menuItems" 
        :active-page="currentPage"
        @page-selected="setCurrentPage" 
      />
      <div class="content-area">
        <div 
          v-for="item in menuItems" 
          :key="item.id"
          :id="item.id"
          class="page-section"
        >
          <component 
            :is="item.component" 
            v-bind="pagesData[item.id] || {}"
          />
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import { defineComponent, inject, ref, computed } from 'vue'
import Header from './components/header/Header.vue'
import Sidebar from './components/Sidebar.vue'
import Home from './components/Home.vue'
import Footer from './components/Footer.vue'

export default defineComponent({
  name: 'App',
  components: {
    Header,
    Sidebar,
    Home,
    Footer,
  },
  setup() {
    const pageData = inject('pageData')
    if (!pageData) {
      console.error('pageData not found')
      return {}
    }
    const currentPage = ref('home')
    const activeHeaderMenuItem = ref('')

    const headerData = computed(() => pageData?.header || {})
    const menuItems = computed(() => pageData?.menuItems || [])
    const pagesData = computed(() => pageData?.pages || {})

    const setCurrentPage = (pageId) => {
      currentPage.value = pageId
      // Scroll to the section instead of switching pages
      const element = document.getElementById(pageId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }

    const handleActionClick = (actionId) => {
      console.log('Action clicked:', actionId)
    }

    const handleLogoClick = () => {
      currentPage.value = 'home'
      activeHeaderMenuItem.value = ''
      const element = document.getElementById('home')
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }

    const handleSearch = (query) => {
      console.log('Search:', query)
    }

    const handleMenuToggle = () => {
      console.log('Menu toggle clicked')
    }

    const handleCategoryClick = (categoryId) => {
      activeHeaderMenuItem.value = categoryId
      console.log('Category clicked:', categoryId)
    }

    return {
      headerData,
      menuItems,
      currentPage,
      pagesData,
      activeHeaderMenuItem,
      setCurrentPage,
      handleActionClick,
      handleLogoClick,
      handleSearch,
      handleMenuToggle,
      handleCategoryClick,
    }
  },
})
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
}

.app-wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.app-container {
  display: flex;
  flex: 1;
  min-height: 0;
}

.content-area {
  flex: 1;
  overflow-y: auto;
  background-color: #f5f5f5;
  padding: 2rem;
  min-width: 0;
}

.page-section {
  margin-bottom: 4rem;
  scroll-margin-top: 2rem;
}

.page-section:last-child {
  margin-bottom: 0;
}
</style>

