<template>
  <div class="home">
    <Carousel 
      :images="carouselImages" 
      button-text="Keşfet!"
      @discover-click="handleDiscover"
    />
    
    <DiscountCategories 
      :categories="discountCategories"
      @category-click="handleDiscountCategoryClick"
      @nav-click="handleNavClick"
    />
    
    <section class="featured-products">
      <h2>Öne Çıkan Ürünler</h2>
      <Grid>
        <ProductCard
          v-for="product in featuredProducts"
          :key="product.id"
          :name="product.name"
          :price="product.price"
          :image="product.image"
        />
      </Grid>
    </section>
  </div>
</template>

<script>
import Grid from './ui/Grid.vue'
import ProductCard from './ui/ProductCard.vue'
import Carousel from './ui/Carousel.vue'
import DiscountCategories from './ui/DiscountCategories.vue'

export default {
  name: 'Home',
  components: {
    Grid,
    ProductCard,
    Carousel,
    DiscountCategories,
  },
  props: {
    title: {
      type: String,
      default: '',
    },
    heroText: {
      type: String,
      default: '',
    },
    featuredProducts: {
      type: Array,
      default: () => [],
    },
  },
  setup() {
    const carouselImages = [
      '/assets/carousel/a1.png',
      '/assets/carousel/a2.png',
      '/assets/carousel/a3.png',
      '/assets/carousel/a4.png',
      '/assets/carousel/a5.png',
      '/assets/carousel/a6.png',
    ]

    const discountCategories = [
      {
        id: 1,
        text: 'Giyim indirimleri',
        image: '/assets/categorylink/b1.jpg',
      },
      {
        id: 2,
        text: '%50 ve üzeri indirimler',
        image: '/assets/categorylink/b2.jpg',
      },
      {
        id: 3,
        text: 'Ayakkabı indirimleri',
        image: '/assets/categorylink/b3.jpg',
      },
      {
        id: 4,
        text: 'Ekipman indirimleri',
        image: '/assets/categorylink/b4.jpg',
      },
      {
        id: 5,
        text: '₺250 ve altı indirimler',
        image: '/assets/categorylink/b5.jpg',
      },
      {
        id: 6,
        text: '₺5.000 ve üzeri indirimler',
        image: '/assets/categorylink/b6.jpg',
      },
    ]

    const handleDiscover = (slideIndex) => {
      console.log('Discover clicked on slide:', slideIndex)
      // Handle discover button click
    }

    const handleDiscountCategoryClick = (category) => {
      console.log('Discount category clicked:', category)
      // Handle discount category click
    }

    const handleNavClick = (navItem) => {
      console.log('Navigation item clicked:', navItem)
      // Handle navigation item click
    }

    return {
      carouselImages,
      discountCategories,
      handleDiscover,
      handleDiscountCategoryClick,
      handleNavClick,
    }
  },
}
</script>

<style scoped>
.home {
  max-width: 1200px;
  margin: 0 auto;
}

.featured-products {
  margin-top: 2rem;
}

.featured-products h2 {
  font-size: 2rem;
  margin-bottom: 1.5rem;
  color: #2c3e50;
}
</style>

