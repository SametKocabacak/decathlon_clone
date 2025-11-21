<template>
  <section class="product-grid-banner">
    <div class="banner-section">
      <div class="banner-image-container">
        <img :src="bannerImage" :alt="bannerTitle" class="banner-image" />
        <div class="banner-overlay">
          <h2 class="banner-title">{{ bannerTitle }}</h2>
          <button class="banner-button" @click="handleBannerClick">
            {{ bannerButtonText }}
          </button>
        </div>
      </div>
    </div>
    <div class="products-section">
      <div class="products-grid">
        <div
          v-for="(product, index) in products"
          :key="index"
          class="product-card"
          @click="handleProductClick(product)"
        >
          <div class="product-image-container">
            <span v-if="product.hasDiscount" class="discount-badge">İNDİRİM</span>
            <img :src="product.image" :alt="product.name" class="product-image" />
          </div>
          <div class="product-info">
            <div class="price-section">
              <span :class="['discounted-price', { 'no-discount': !product.hasDiscount }]">{{ product.discountedPrice }}</span>
              <span v-if="product.originalPrice" class="original-price">{{ product.originalPrice }}</span>
              <span v-if="product.discountPercentage" class="discount-percentage-badge">{{ product.discountPercentage }}</span>
            </div>
            <p v-if="product.dateRange" class="date-range">{{ product.dateRange }}</p>
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
            <p v-if="product.delivery" class="delivery-info">{{ product.delivery }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ProductGridWithBanner',
  props: {
    bannerImage: {
      type: String,
      required: true,
    },
    bannerTitle: {
      type: String,
      default: 'Tekerlekli sporlar',
    },
    bannerButtonText: {
      type: String,
      default: 'Incele!',
    },
    products: {
      type: Array,
      required: true,
    },
  },
  emits: ['banner-click', 'product-click'],
  methods: {
    handleBannerClick() {
      this.$emit('banner-click')
    },
    handleProductClick(product) {
      this.$emit('product-click', product)
    },
  },
}
</script>

<style scoped>
.product-grid-banner {
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 1rem;
  margin: 3rem 0;
  max-width: 1400px;
  margin-left: auto;
  margin-right: auto;
}

.banner-section {
  position: relative;
}

.banner-image-container {
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 800px;
  overflow: hidden;
  border-radius: 4px;
}

.banner-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.banner-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2rem;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.1));
}

.banner-title {
  font-size: 2rem;
  font-weight: 700;
  color: white;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  margin: 0;
  text-transform: uppercase;
}

.banner-button {
  background-color: #3498db;
  color: white;
  border: none;
  padding: 0.75rem 2rem;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 4px;
  cursor: pointer;
  align-self: flex-start;
  transition: background-color 0.3s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
}

.banner-button:hover {
  background-color: #2980b9;
}

.products-section {
  width: 100%;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  height: 100%;
}

.product-card {
  background-color: white;
  border: 1px solid #e5e5e5;
  border-radius: 0;
  overflow: hidden;
  cursor: pointer;
  transition: box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
}

.product-card:hover {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
}

.product-image-container {
  position: relative;
  width: 100%;
  height: 150px;
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
  padding: 1rem;
}

.product-info {
  padding: 0.625rem 0.75rem;
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
  font-size: 1.25rem;
  font-weight: 700;
  background-color: #e60012;
  color: white;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  line-height: 1.2;
  white-space: nowrap;
  display: inline-block;
}

.discounted-price.no-discount {
  background-color: #ffc107;
  color: #1a1a1a;
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
  font-size: 0.75rem;
  color: #7f8c8d;
  margin-bottom: 0.5rem;
  line-height: 1.4;
  margin-top: 0;
}

.brand-name {
  font-size: 0.75rem;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 0.25rem;
  margin-top: 0;
  text-transform: uppercase;
  letter-spacing: 0.02em;
}

.product-description {
  font-size: 0.75rem;
  color: #2c3e50;
  line-height: 1.3;
  margin-bottom: 0.5rem;
  margin-top: 0;
  flex: 1;
}

.rating-section {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.375rem;
}

.stars {
  display: flex;
  gap: 1px;
}

.star {
  font-size: 0.75rem;
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
  font-size: 0.75rem;
  color: #7f8c8d;
}

.delivery-info {
  font-size: 0.75rem;
  color: #3498db;
  margin: 0;
  margin-top: 0.25rem;
}

@media (max-width: 1200px) {
  .product-grid-banner {
    grid-template-columns: 1fr;
  }

  .banner-image-container {
    min-height: 400px;
  }

  .products-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .products-grid {
    grid-template-columns: 1fr;
  }

  .banner-title {
    font-size: 1.5rem;
  }

  .banner-button {
    padding: 0.625rem 1.5rem;
    font-size: 0.9rem;
  }
}
</style>

