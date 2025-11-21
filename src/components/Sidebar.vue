<template>
  <aside class="sidebar">
    <div class="sidebar-header">
      <h2>Decathlon</h2>
    </div>
    <nav class="sidebar-nav">
      <ul>
        <li
          v-for="item in menuItems"
          :key="item.id"
          :class="{ active: activePage === item.id }"
          @click="selectPage(item.id)"
        >
          {{ item.name }}
        </li>
      </ul>
    </nav>
  </aside>
</template>

<script>
export default {
  name: 'Sidebar',
  props: {
    menuItems: {
      type: Array,
      required: true,
    },
    activePage: {
      type: String,
      required: true,
    },
  },
  methods: {
    selectPage(pageId) {
      this.$emit('page-selected', pageId)
    },
  },
}
</script>

<style scoped>
.sidebar {
  width: 180px;
  background-color: #2c3e50;
  color: white;
  display: flex;
  flex-direction: column;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
}

.sidebar-header {
  padding: 1rem;
  background-color: #1a252f;
  border-bottom: 1px solid #34495e;
}

.sidebar-header h2 {
  font-size: 1.2rem;
  font-weight: 600;
  color: #3498db;
}

.sidebar-nav {
  flex: 1;
  padding: 0.75rem 0;
}

.sidebar-nav ul {
  list-style: none;
}

.sidebar-nav li {
  padding: 0.75rem 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  border-left: 3px solid transparent;
  font-size: 0.9rem;
}

.sidebar-nav li:hover {
  background-color: #34495e;
  border-left-color: #3498db;
}

.sidebar-nav li.active {
  background-color: #3498db;
  border-left-color: #2980b9;
  font-weight: 600;
}
</style>

