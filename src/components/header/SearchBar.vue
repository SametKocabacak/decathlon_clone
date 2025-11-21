<template>
  <div class="search-bar">
    <input
      type="text"
      :placeholder="placeholder"
      v-model="searchQuery"
      @input="handleInput"
      @keyup.enter="handleSearch"
      class="search-input"
    />
    <button @click="handleSearch" class="search-button" aria-label="Ara">
      <img src="/assets/icons/search.svg" alt="Ara" class="search-icon" />
    </button>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'SearchBar',
  props: {
    placeholder: {
      type: String,
      default: 'Bir ürün, spor veya marka arayın...',
    },
  },
  emits: ['search'],
  setup(props, { emit }) {
    const searchQuery = ref('')

    const handleInput = () => {
      // Can emit input events if needed
    }

    const handleSearch = () => {
      if (searchQuery.value.trim()) {
        emit('search', searchQuery.value)
      }
    }

    return {
      searchQuery,
      handleInput,
      handleSearch,
    }
  },
}
</script>

<style scoped>
.search-bar {
  display: flex;
  width: 100%;
  max-width: 100%;
  position: relative;
  min-width: 0;
}

.search-input {
  flex: 1;
  padding: 0.625rem 1.25rem;
  border: 1px solid #e5e5e5;
  border-radius: 24px 0 0 24px;
  font-size: 0.9375rem;
  outline: none;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
  background-color: #f5f5f5;
  color: #1a1a1a;
  height: 44px;
  min-width: 0;
  width: 100%;
  max-width: 100%;
}

.search-input::placeholder {
  color: #999999;
}

.search-input:focus {
  border-color: #6B1D9C;
  background-color: #ffffff;
  box-shadow: 0 0 0 3px rgba(107, 29, 156, 0.1);
}

.search-button {
  padding: 0;
  width: 48px;
  height: 44px;
  background-color: #f5f5f5;
  border: 1px solid #e5e5e5;
  border-left: none;
  border-radius: 0 24px 24px 0;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.search-button:hover {
  background-color: #e8e8e8;
  border-color: #d1d1d1;
}

.search-button:active {
  background-color: #e0e0e0;
}

.search-icon {
  width: 20px;
  height: 20px;
  filter: brightness(0) saturate(100%);
  opacity: 0.6;
  display: block;
}
</style>

