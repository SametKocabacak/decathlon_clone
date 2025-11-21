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
    
    <OpportunityProducts 
      :products="opportunityProducts"
      @product-click="handleOpportunityProductClick"
    />
    
    <PopularCategories 
      :categories="popularCategories"
      @category-click="handlePopularCategoryClick"
    />
    
    <div class="promotional-banner">
      <img src="/assets/e1.png" alt="Garmin ürünlerini keşfet!" class="banner-image" />
    </div>
    
    <ProductGridWithBanner
      :banner-image="gridBannerImage"
      banner-title="Tekerlekli sporlar"
      banner-button-text="Incele!"
      :products="gridProducts"
      @banner-click="handleGridBannerClick"
      @product-click="handleGridProductClick"
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
import OpportunityProducts from './ui/OpportunityProducts.vue'
import PopularCategories from './ui/PopularCategories.vue'
import ProductGridWithBanner from './ui/ProductGridWithBanner.vue'

export default {
  name: 'Home',
  components: {
    Grid,
    ProductCard,
    Carousel,
    DiscountCategories,
    OpportunityProducts,
    PopularCategories,
    ProductGridWithBanner,
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

    const opportunityProducts = [
      {
        id: 1,
        image: '/assets/productimg/c1.png',
        discountedPrice: '₺850',
        originalPrice: '₺950',
        discountPercentage: '-10%',
        dateRange: '*03.11.2025 - 01.12.2025 arası',
        brand: 'QUECHUA',
        description: 'Katlanır Kamp Sandalyesi',
        rating: 4,
        reviewCount: 12978,
      },
      {
        id: 2,
        image: '/assets/productimg/c2.png',
        discountedPrice: '₺1.040',
        originalPrice: '₺1.490',
        discountPercentage: '-30%',
        dateRange: '*03.11.2025 - 01.12.2025 arası',
        brand: 'QUECHUA',
        description: 'Çocuk Outdoor Ayakkabı - Gri - NH500',
        rating: 5,
        reviewCount: 306,
      },
      {
        id: 3,
        image: '/assets/productimg/c3.png',
        discountedPrice: '₺1.990',
        originalPrice: '₺2.990',
        discountPercentage: '-33%',
        dateRange: '*03.11.2025 - 01.12.2025 arası',
        brand: 'QUECHUA',
        description: 'Katlanabilir Soğutucu - 25 Litre - 15 Saat Serin Tutma - 500 Fresh',
        rating: 5,
        reviewCount: 1039,
      },
      {
        id: 4,
        image: '/assets/productimg/c4.png',
        discountedPrice: '₺3.790',
        originalPrice: '₺4.990',
        discountPercentage: '-24%',
        dateRange: '*03.11.2025 - 01.12.2025 arası',
        brand: 'ASICS',
        description: 'Erkek Tenis Ayakkabısı - Mavi - Asics Gel Challenger 14 1041A470-400',
        rating: 4.5,
        reviewCount: 54,
      },
    ]

    const handleOpportunityProductClick = (product) => {
      console.log('Opportunity product clicked:', product)
      // Handle opportunity product click
    }

    const popularCategories = [
      {
        id: 1,
        name: 'MONTLAR',
        image: '/assets/popularcategories/d1.jpg',
      },
      {
        id: 2,
        name: 'PANTOLONLAR',
        image: '/assets/popularcategories/d2.jpg',
      },
      {
        id: 3,
        name: 'POLARLAR',
        image: '/assets/popularcategories/d3.jpg',
      },
      {
        id: 4,
        name: 'YAĞMUR ÜRÜNLERİ',
        image: '/assets/popularcategories/d4.jpg',
      },
      {
        id: 5,
        name: 'TOPLAR',
        image: '/assets/popularcategories/d5.jpg',
      },
      {
        id: 6,
        name: 'TERMOSLAR & MATARALAR',
        image: '/assets/popularcategories/d6.jpg',
      },
    ]

    const handlePopularCategoryClick = (category) => {
      console.log('Popular category clicked:', category)
      // Handle popular category click
    }

    const gridBannerImage = '/assets/gridview1/big1.jpg'

    const gridProducts = [
      {
        id: 1,
        image: '/assets/gridview1/f1.png',
        hasDiscount: true,
        discountedPrice: '₺36.990',
        originalPrice: '₺49.990',
        discountPercentage: '-26%',
        dateRange: '*03.11.2025 - 01.12.2025 arası',
        brand: 'ROCKRIDER',
        description: 'EXPL 540 29 İNÇ JANT H.DİSK FREN SİYAH DAĞ BİSİKLETİ',
        rating: 4.5,
        reviewCount: 419,
      },
      {
        id: 2,
        image: '/assets/gridview1/f2.png',
        hasDiscount: false,
        discountedPrice: '₺2.190',
        originalPrice: null,
        discountPercentage: null,
        dateRange: null,
        brand: 'OXELO',
        description: 'ÇOCUK PATEN - YEŞİL - PLAY 5',
        rating: 5,
        reviewCount: 2256,
        delivery: 'Mağazadan Ücretsiz Teslimat',
      },
      {
        id: 3,
        image: '/assets/gridview1/f3.png',
        hasDiscount: true,
        discountedPrice: '₺18.990',
        originalPrice: '₺24.990',
        discountPercentage: '-24%',
        dateRange: '*03.11.2025 - 01.12.2025 arası',
        brand: 'ROCKRIDER',
        description: 'ST 120 27,5 İNÇ JANT M.DİSK FREN DAĞ BİSİKLETİ GRİ/TURUNCU',
        rating: 5,
        reviewCount: 3486,
        delivery: 'Mağazadan Ücretsiz Teslimat',
      },
      {
        id: 4,
        image: '/assets/gridview1/f4.png',
        hasDiscount: false,
        discountedPrice: '₺3.790',
        originalPrice: null,
        discountPercentage: null,
        dateRange: null,
        brand: 'OXELO',
        description: 'ÇOCUK SCOOTER - SÜSPANSİYON VE GİDONDA FREN - MOR - MID5',
        rating: 5,
        reviewCount: 2841,
        delivery: 'Mağazadan Ücretsiz Teslimat',
      },
      {
        id: 5,
        image: '/assets/gridview1/f5.png',
        hasDiscount: true,
        discountedPrice: '₺9.990',
        originalPrice: '₺11.990',
        discountPercentage: '-16%',
        dateRange: '*03.11.2025 - 01.12.2025 arası',
        brand: 'BTWIN',
        description: 'DISCOVER 500 14 İNÇ JANT 3-5 YAŞ SARI 2\'Sİ 1 ARADA ÇOCUK (DENGE)BİSİKLETİ',
        rating: 5,
        reviewCount: 998,
        delivery: 'Mağazadan Ücretsiz Teslimat',
      },
      {
        id: 6,
        image: '/assets/gridview1/f6.png',
        hasDiscount: false,
        discountedPrice: '₺2.690',
        originalPrice: null,
        discountPercentage: null,
        dateRange: null,
        brand: 'OXELO',
        description: 'ÇOCUK PATEN - SİYAH / GRİ - FIT3',
        rating: 5,
        reviewCount: 7360,
        delivery: 'Mağazadan Ücretsiz Teslimat',
      },
    ]

    const handleGridBannerClick = () => {
      console.log('Grid banner clicked')
      // Handle grid banner click
    }

    const handleGridProductClick = (product) => {
      console.log('Grid product clicked:', product)
      // Handle grid product click
    }

    return {
      carouselImages,
      discountCategories,
      opportunityProducts,
      popularCategories,
      gridBannerImage,
      gridProducts,
      handleDiscover,
      handleDiscountCategoryClick,
      handleNavClick,
      handleOpportunityProductClick,
      handlePopularCategoryClick,
      handleGridBannerClick,
      handleGridProductClick,
    }
  },
}
</script>

<style scoped>
.home {
  max-width: 1200px;
  margin: 0 auto;
}

.promotional-banner {
  margin: 3rem 0;
  width: 100%;
  overflow: hidden;
}

.banner-image {
  width: 100%;
  height: auto;
  display: block;
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

