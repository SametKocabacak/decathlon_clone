<template>
  <section class="opportunity-products">
    <h2 class="section-title">{{ title }}</h2>
    <div class="products-grid">
      <div
        v-for="(product, index) in products"
        :key="index"
        class="opportunity-product-card"
        @click="handleProductClick(product)"
      >
        <div class="product-image-container">
          <span class="discount-badge">İNDİRİM</span>
          <img :src="product.image" :alt="product.name" class="product-image" />
        </div>
        <div class="product-info">
          <div class="price-section">
            <span class="discounted-price">{{ product.discountedPrice }}</span>
            <span class="original-price">{{ product.originalPrice }}</span>
            <span class="discount-percentage-badge">{{ product.discountPercentage }}</span>
          </div>
          <p class="date-range">{{ product.dateRange }}</p>
          <p class="brand-name">{{ product.brand }}</p>
          <p class="product-description">{{ product.description }}</p>
          <div class="rating-section">
            <div class="stars">
              <span
                v-for="star in 5"
                :key="star"
                :class="['star', { 
                  filled: star <= Math.floor(product.rating),
                  half: star === Math.ceil(product.rating) && product.rating % 1 !== 0
                }]"
              >
                ★
              </span>
            </div>
            <span class="review-count">({{ product.reviewCount }})</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'OpportunityProducts',
  props: {
    title: {
      type: String,
      default: 'FIRSAT ÜRÜNLERİ',
    },
    products: {
      type: Array,
      required: true,
    },
  },
  emits: ['product-click'],
  methods: {
    handleProductClick(product) {
      this.$emit('product-click', product)
    },
  },
}
</script>

<style scoped>
.opportunity-products {
  margin: 3rem 0;
}

.section-title {
  font-size: 1.2rem;
  font-weight: 700;
  color: #1a1a1a;
  text-align: left;
  text-transform: uppercase;
  margin-bottom: 2.5rem;
  letter-spacing: 0.05em;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  max-width: 1400px;
  margin: 0 auto;
}

.opportunity-product-card {
  background-color: white;
  border: 1px solid #e5e5e5;
  border-radius: 0;
  overflow: hidden;
  cursor: pointer;
  transition: box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
}

.opportunity-product-card:hover {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
}

.product-image-container {
  position: relative;
  width: 100%;
  height: 260px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.discount-badge {
  position: absolute;
  top: 10px;
  left: 10px;
  background-color: #e60012;
  color: white;
  padding: 0.375rem 0.625rem;
  font-size: 0.75rem;
  font-weight: 700;
  border-radius: 4px;
  z-index: 2;
  text-transform: uppercase;
  letter-spacing: 0.02em;
  line-height: 1;
}

.product-image {
  width: 100%;
  height: 100%;
  object-fit: contain;
  padding: 1.25rem;
}

.product-info {
  padding: 0.875rem 1rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  text-align: left;
}

.price-section {
  display: flex;
  align-items: baseline;
  gap: 0.375rem;
  margin-bottom: 0.375rem;
  flex-wrap: nowrap;
}

.discounted-price {
  font-size: 1.5rem;
  font-weight: 700;
  background-color: #e60012;
  color: white;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  line-height: 1.2;
  white-space: nowrap;
  display: inline-block;
}

.original-price {
  font-size: 0.875rem;
  color: #7f8c8d;
  text-decoration: line-through;
  white-space: nowrap;
}

.discount-percentage-badge {
  background-color: #e60012;
  color: white;
  padding: 0.2rem 0.4rem;
  font-size: 0.75rem;
  font-weight: 700;
  border-radius: 4px;
  white-space: nowrap;
  line-height: 1.2;
}

.date-range {
  font-size: 0.8125rem;
  color: #7f8c8d;
  margin-bottom: 0.625rem;
  line-height: 1.4;
  margin-top: 0;
}

.brand-name {
  font-size: 0.8125rem;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 0.375rem;
  margin-top: 0;
  text-transform: uppercase;
  letter-spacing: 0.02em;
}

.product-description {
  font-size: 0.8125rem;
  color: #2c3e50;
  line-height: 1.4;
  margin-bottom: 0.625rem;
  margin-top: 0;
  flex: 1;
}

.rating-section {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.stars {
  display: flex;
  gap: 1px;
}

.star {
  font-size: 0.875rem;
  color: #d0d0d0;
  line-height: 1;
}

.star.filled {
  color: #ffc107;
}

.star.half {
  background: linear-gradient(90deg, #ffc107 50%, #d0d0d0 50%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.review-count {
  font-size: 0.8125rem;
  color: #7f8c8d;
}

@media (max-width: 1200px) {
  .products-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }
}

@media (max-width: 768px) {
  .section-title {
    font-size: 1.75rem;
    margin-bottom: 2rem;
  }

  .products-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 0.75rem;
  }

  .product-image-container {
    height: 240px;
  }

  .discounted-price {
    font-size: 1.5rem;
  }
}

@media (max-width: 480px) {
  .products-grid {
    grid-template-columns: 1fr;
  }
}
</style>

