<template>
  <div class="hero">
    <slot name="title">
      <h1 v-if="title">{{ title }}</h1>
    </slot>
    <slot name="content">
      <p v-if="text" class="hero-text">{{ text }}</p>
    </slot>
    <slot />
  </div>
</template>

<script>
export default {
  name: 'Hero',
  props: {
    title: {
      type: String,
      default: '',
    },
    text: {
      type: String,
      default: '',
    },
  },
}
</script>

<style scoped>
.hero {
  text-align: center;
  padding: 3rem 0;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-radius: 8px;
  margin-bottom: 2rem;
}

.hero h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.hero-text {
  font-size: 1.5rem;
  opacity: 0.9;
}
</style>

