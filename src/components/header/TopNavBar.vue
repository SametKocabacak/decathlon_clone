<template>
  <nav class="top-nav">
    <div class="top-nav-container">
      <div class="top-nav-left">
        <a href="#" class="top-nav-link" @click.prevent="handleClick('contact')">
          <img src="/assets/icons/phone.svg" alt="Telefon" class="icon-img" />
          <span>0850 532 0 532</span>
        </a>
        <a href="#" class="top-nav-link" @click.prevent="handleClick('store')">
          <img src="/assets/icons/map-pin.svg" alt="Mağaza" class="icon-img" />
          <span>Mağaza Bul</span>
        </a>
      </div>
      <ul class="top-nav-links">
        <li v-for="link in links" :key="link.id">
          <a href="#" @click.prevent="handleClick(link.id)" class="top-nav-link">
            <img
              v-if="link.icon"
              :src="`/assets/icons/${link.icon}.svg`"
              :alt="link.text"
              class="icon-img"
            />
            <span>{{ link.text }}</span>
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'TopNavBar',
  props: {
    links: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    handleClick(linkId) {
      this.$emit('link-clicked', linkId)
    },
  },
}
</script>

<style scoped>
.top-nav {
  background-color: #1a1a1a;
  color: white;
  font-size: 0.8125rem;
  line-height: 1.5;
}

.top-nav-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 1.5rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 36px;
}

.top-nav-left {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  flex: 1;
}

.top-nav-link {
  color: #ffffff;
  text-decoration: none;
  font-size: 0.8125rem;
  display: flex;
  align-items: center;
  gap: 0.375rem;
  transition: opacity 0.2s ease;
  white-space: nowrap;
}

.top-nav-link:hover {
  opacity: 0.8;
}

.top-nav-links {
  display: flex;
  list-style: none;
  gap: 1.5rem;
  padding: 0;
  margin: 0;
}

.top-nav-links li {
  display: flex;
  align-items: center;
}

.icon-img {
  width: 14px;
  height: 14px;
  opacity: 0.9;
  flex-shrink: 0;
}

@media (max-width: 768px) {
  .top-nav-container {
    padding: 0 1rem;
    height: 32px;
  }

  .top-nav-left {
    gap: 1rem;
  }

  .top-nav-left span,
  .top-nav-links li span {
    font-size: 0.75rem;
  }
}
</style>

