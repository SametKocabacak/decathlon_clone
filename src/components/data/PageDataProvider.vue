<template>
  <AppContent />
</template>

<script>
import { provide, reactive } from 'vue'

export default {
  name: 'PageDataProvider',
  setup() {
    const pageData = reactive({
      header: {
        categoryItems: [
          { id: 'sports', text: 'Sporlar', hasDropdown: true },
          { id: 'women', text: 'Kadın', hasDropdown: true },
          { id: 'men', text: 'Erkek', hasDropdown: true },
          { id: 'kids', text: 'Çocuk', hasDropdown: true },
          { id: 'equipment', text: 'Ekipmanlar', hasDropdown: true },
          { id: 'all-products', text: 'Tüm Ürünler', hasDropdown: true },
          { id: 'health', text: 'Sağlık ve Beslenme', hasDropdown: true },
          { id: 'discounts', text: 'İndirimler', hasDropdown: false, highlight: 'red' },
          { id: 'maintenance', text: 'Bakım ve Onarım', hasDropdown: false, highlight: 'bold' },
          { id: 'member', text: 'Decathlon Member', hasDropdown: false, highlight: 'purple' },
        ],
        navActions: [
          { id: 'contact', icon: 'question', label: 'Bize Ulaşın' },
          { id: 'store', icon: 'store', label: 'Mağaza bul' },
          { id: 'account', icon: 'user', label: 'Hesabım' },
          { id: 'cart', icon: 'cart', label: 'Sepetim' },
        ],
      },
      menuItems: [
        { id: 'home', name: 'Ana Sayfa', component: 'Home' },
      ],
      pages: {
        home: {
          title: 'Decathlon Türkiye',
          heroText: 'Sporunuzu Keşfedin',
          featuredProducts: [
            { id: 1, name: 'Koşu Ayakkabısı', price: '₺299', image: '🏃' },
            { id: 2, name: 'Bisiklet', price: '₺1.499', image: '🚴' },
            { id: 3, name: 'Yoga Matı', price: '₺149', image: '🧘' },
          ],
        },
      },
    })

    provide('pageData', pageData)

    return {}
  },
}
</script>

