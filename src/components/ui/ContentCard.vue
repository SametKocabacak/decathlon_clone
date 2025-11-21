<template>
  <Card>
    <div class="content-card">
      <slot />
    </div>
  </Card>
</template>

<script>
import Card from './Card.vue'

export default {
  name: 'ContentCard',
  components: {
    Card,
  },
}
</script>

<style scoped>
.content-card {
  padding: 2rem;
}
</style>

