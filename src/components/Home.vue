<template>
  <div class="home">
    <section id="carousel" class="home-section">
      <Carousel 
        :images="carouselImages" 
        button-text="Keşfet!"
        @discover-click="handleDiscover"
      />
    </section>
    
    <section id="discount-categories" class="home-section">
      <DiscountCategories 
        :categories="discountCategories"
        @category-click="handleDiscountCategoryClick"
        @nav-click="handleNavClick"
      />
    </section>
    
    <section id="opportunity-products" class="home-section">
      <OpportunityProducts 
        :products="opportunityProducts"
        @product-click="handleOpportunityProductClick"
      />
    </section>
    
    <section id="popular-categories" class="home-section">
      <PopularCategories 
        :categories="popularCategories"
        @category-click="handlePopularCategoryClick"
      />
    </section>
    
    <section id="promotional-banner-1" class="home-section">
      <div class="promotional-banner">
        <img src="/assets/e1.png" alt="Garmin ürünlerini keşfet!" class="banner-image" />
      </div>
    </section>
    
    <section id="product-grid-1" class="home-section">
      <ProductGridWithBanner
        :banner-image="gridBannerImage"
        banner-title="Tekerlekli sporlar"
        banner-button-text="Incele!"
        :products="gridProducts"
        @banner-click="handleGridBannerClick"
        @product-click="handleGridProductClick"
      />
    </section>
    
    <section id="product-grid-2" class="home-section">
      <ProductGridWithBannerRight
        :banner-image="grid2BannerImage"
        banner-title="Tekerlekli sporlar"
        banner-button-text="Incele!"
        :products="grid2Products"
        @banner-click="handleGrid2BannerClick"
        @product-click="handleGrid2ProductClick"
      />
    </section>
    
    <section id="product-grid-3" class="home-section">
      <ProductGridWithBanner
        :banner-image="grid3BannerImage"
        banner-title="Tekerlekli sporlar"
        banner-button-text="Incele!"
        :products="grid3Products"
        @banner-click="handleGrid3BannerClick"
        @product-click="handleGrid3ProductClick"
      />
    </section>
    
    <section id="promotional-banner-2" class="home-section">
      <div class="promotional-banner">
        <img src="/j1.png" alt="Maximum Kart Kampanyası" class="banner-image" />
      </div>
    </section>
    
    <section id="brands" class="home-section">
      <Brands 
        :brands="brands"
        @brand-click="handleBrandClick"
      />
    </section>
    
    <section id="info-cards" class="home-section">
      <InfoCards 
        :cards="infoCards"
      />
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
import ProductGridWithBannerRight from './ui/ProductGridWithBannerRight.vue'
import Brands from './ui/Brands.vue'
import InfoCards from './ui/InfoCards.vue'

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
    ProductGridWithBannerRight,
    Brands,
    InfoCards,
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

    const grid2BannerImage = '/assets/gridview2/big2.jpg'

    const grid2Products = [
      {
        id: 1,
        image: '/assets/gridview2/g1.png',
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
        id: 2,
        image: '/assets/gridview2/g2.png',
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
        id: 3,
        image: '/assets/gridview2/g3.png',
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
        id: 4,
        image: '/assets/gridview2/g4.png',
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
        id: 5,
        image: '/assets/gridview2/g5.png',
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
      {
        id: 6,
        image: '/assets/gridview2/g6.png',
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
    ]

    const handleGrid2BannerClick = () => {
      console.log('Grid 2 banner clicked')
      // Handle grid 2 banner click
    }

    const handleGrid2ProductClick = (product) => {
      console.log('Grid 2 product clicked:', product)
      // Handle grid 2 product click
    }

    const grid3BannerImage = '/assets/gridview3/big3.jpg'

    const grid3Products = [
      {
        id: 1,
        image: '/assets/gridview3/h1.png',
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
        id: 2,
        image: '/assets/gridview3/h2.png',
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
        id: 3,
        image: '/assets/gridview3/h3.png',
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
        id: 4,
        image: '/assets/gridview3/h4.png',
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
        id: 5,
        image: '/assets/gridview3/h5.png',
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
      {
        id: 6,
        image: '/assets/gridview3/h6.png',
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
    ]

    const handleGrid3BannerClick = () => {
      console.log('Grid 3 banner clicked')
      // Handle grid 3 banner click
    }

    const handleGrid3ProductClick = (product) => {
      console.log('Grid 3 product clicked:', product)
      // Handle grid 3 product click
    }

    const brands = [
      {
        id: 1,
        name: 'QUECHUA',
        image: '/assets/brands/k1.png',
      },
      {
        id: 2,
        name: 'DOMYOS',
        image: '/assets/brands/k2.png',
      },
      {
        id: 3,
        name: 'SOLOGNAC',
        image: '/assets/brands/k3.png',
      },
      {
        id: 4,
        name: 'KALENJI',
        image: '/assets/brands/k4.png',
      },
      {
        id: 5,
        name: 'ARTENGO',
        image: '/assets/brands/k5.png',
      },
      {
        id: 6,
        name: 'KIPSTA',
        image: '/assets/brands/k6.png',
      },
    ]

    const handleBrandClick = (brand) => {
      console.log('Brand clicked:', brand)
      // Handle brand click
    }

    const infoCards = [
      {
        icon: '/assets/infocards/o1.png',
        title: '6500 ₺ Üzeri Kargo Bedava',
        description: '6500 TL üzeri siparişlerinizde kargo bedava',
      },
      {
        icon: '/assets/infocards/o2.png',
        title: 'Kredi Kartı İle Ödeme',
        description: 'Taksitli ödeme kolaylığıyla alışveriş yapabilirsiniz',
      },
      {
        icon: '/assets/infocards/o3.png',
        title: 'Mağazadan Ücretsiz Teslimat',
        description: 'Siparişlerinizi seçtiğiniz mağazadan teslim alabilirsiniz!',
      },
      {
        icon: '/assets/infocards/o4.png',
        title: 'Mağazadan Aynı Gün Teslimat',
        description: 'Mağazadan teslim alacağınız siparişlerinizi aynı gün teslim alabilirsiniz',
      },
    ]

    return {
      carouselImages,
      discountCategories,
      opportunityProducts,
      popularCategories,
      gridBannerImage,
      gridProducts,
      grid2BannerImage,
      grid2Products,
      grid3BannerImage,
      grid3Products,
      brands,
      infoCards,
      handleDiscover,
      handleDiscountCategoryClick,
      handleNavClick,
      handleOpportunityProductClick,
      handlePopularCategoryClick,
      handleGridBannerClick,
      handleGridProductClick,
      handleGrid2BannerClick,
      handleGrid2ProductClick,
      handleGrid3BannerClick,
      handleGrid3ProductClick,
      handleBrandClick,
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

