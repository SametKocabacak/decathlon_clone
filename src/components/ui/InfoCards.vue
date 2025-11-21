<template>
  <section class="info-cards-section">
    <div class="info-cards-grid">
      <div
        v-for="(card, index) in cards"
        :key="index"
        class="info-card"
      >
        <div class="info-card-icon">
          <img :src="card.icon" :alt="card.title" />
        </div>
        <h3 class="info-card-title">{{ card.title }}</h3>
        <p class="info-card-description">{{ card.description }}</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'InfoCards',
  props: {
    cards: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style scoped>
.info-cards-section {
  margin: 3rem 0;
}

.info-cards-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  max-width: 1400px;
  margin: 0 auto;
}

.info-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 1.5rem;
}

.info-card-icon {
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
}

.info-card-icon img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.info-card-title {
  font-size: 1rem;
  font-weight: 700;
  color: #3643ba;
  margin: 0 0 0.5rem 0;
  line-height: 1.4;
}

.info-card-description {
  font-size: 0.875rem;
  color: #3643ba;
  margin: 0;
  line-height: 1.5;
}

@media (max-width: 1200px) {
  .info-cards-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }
}

@media (max-width: 768px) {
  .info-cards-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .info-card-icon {
    width: 70px;
    height: 70px;
  }

  .info-card-title {
    font-size: 0.9375rem;
  }

  .info-card-description {
    font-size: 0.8125rem;
  }
}
</style>

