<template>
  <footer class="footer">
    <div class="footer-background">
      <img src="/assets/footer/bgbottomleft.svg" alt="" class="footer-bg-decoration" />
    </div>
    <div class="footer-container">
      <div class="footer-content">
        <!-- Left Column -->
        <div class="footer-column">
          <div class="footer-section">
            <div class="section-header">
              <h3 class="section-title">60 Gün İade</h3>
              <div class="carousel-controls">
                <button class="carousel-arrow" @click="previousSlide" aria-label="Previous">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 18L9 12L15 6" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </button>
                <button class="carousel-arrow" @click="nextSlide" aria-label="Next">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 18L15 12L9 6" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>
            <p class="section-description">
              Decathlon hesabınızla yaptığınız nakit ödemelerde fiş olmadan kolayca iade veya değişim yapabilirsiniz.
            </p>
          </div>

          <div class="footer-section">
            <div class="section-header">
              <h3 class="section-title">Mobil Uygulamamız</h3>
              <button class="expand-icon" aria-label="Expand">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 18L15 12L9 6" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </button>
            </div>
          </div>

          <div class="footer-section">
            <h3 class="section-title">Bizi Takip Edin</h3>
            <div class="social-icons">
              <a href="#" class="social-icon" aria-label="Instagram">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="2" y="2" width="20" height="20" rx="5" stroke="white" stroke-width="2"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" stroke="white" stroke-width="2"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" stroke="white" stroke-width="2" stroke-linecap="round"/>
                </svg>
              </a>
              <a href="#" class="social-icon" aria-label="LinkedIn">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <rect x="2" y="9" width="4" height="12" stroke="white" stroke-width="2"/>
                  <circle cx="4" cy="4" r="2" stroke="white" stroke-width="2"/>
                </svg>
              </a>
              <a href="#" class="social-icon" aria-label="Facebook">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </a>
              <a href="#" class="social-icon" aria-label="TikTok">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </a>
              <a href="#" class="social-icon" aria-label="YouTube">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </a>
            </div>
          </div>

          <div class="footer-logo">
            <img src="/assets/logo.svg" alt="Decathlon" class="logo-img" />
          </div>
        </div>

        <!-- Middle Column -->
        <div class="footer-column">
          <div class="footer-section">
            <div class="section-header">
              <h3 class="section-title">Hakkımızda</h3>
              <button class="collapse-icon" @click="toggleSection('about')" aria-label="Collapse">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <line x1="5" y1="12" x2="19" y2="12" stroke="white" stroke-width="2" stroke-linecap="round"/>
                </svg>
              </button>
            </div>
            <ul v-if="expandedSections.about" class="footer-links">
              <li><a href="#">Biz Kimiz?</a></li>
              <li><a href="#">Mağazalarımız</a></li>
              <li><a href="#">Bize Ulaşın</a></li>
              <li><a href="#">Üyelik Sözleşmesi</a></li>
              <li><a href="#">Bilgi Toplumu Hizmetleri</a></li>
              <li><a href="#">İnsan Kaynakları</a></li>
              <li><a href="#">Sürdürülebilirlik</a></li>
              <li><a href="#">Değerlerimiz</a></li>
              <li><a href="#">Kalite Politikamız</a></li>
              <li><a href="#">Bilgi Güvenliği Politikamız</a></li>
            </ul>
          </div>

          <div class="footer-section">
            <div class="section-header">
              <h3 class="section-title">Hizmetlerimiz</h3>
              <button class="expand-icon" @click="toggleSection('services')" aria-label="Expand">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <line x1="12" y1="5" x2="12" y2="19" stroke="white" stroke-width="2" stroke-linecap="round"/>
                  <line x1="5" y1="12" x2="19" y2="12" stroke="white" stroke-width="2" stroke-linecap="round"/>
                </svg>
              </button>
            </div>
            <ul v-if="expandedSections.services" class="footer-links">
              <li><a href="#">Kargo ve Teslimat</a></li>
              <li><a href="#">İade ve Değişim</a></li>
              <li><a href="#">Ödeme Seçenekleri</a></li>
            </ul>
          </div>

          <div class="footer-section">
            <div class="section-header">
              <h3 class="section-title">Sipariş</h3>
              <button class="expand-icon" @click="toggleSection('order')" aria-label="Expand">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <line x1="12" y1="5" x2="12" y2="19" stroke="white" stroke-width="2" stroke-linecap="round"/>
                  <line x1="5" y1="12" x2="19" y2="12" stroke="white" stroke-width="2" stroke-linecap="round"/>
                </svg>
              </button>
            </div>
            <ul v-if="expandedSections.order" class="footer-links">
              <li><a href="#">Sipariş Takibi</a></li>
              <li><a href="#">Sipariş Geçmişi</a></li>
            </ul>
          </div>
        </div>

        <!-- Right Column -->
        <div class="footer-column">
          <div class="footer-section">
            <div class="section-header">
              <h3 class="section-title">Popüler Kategoriler</h3>
              <button class="collapse-icon" @click="toggleSection('categories')" aria-label="Collapse">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <line x1="5" y1="12" x2="19" y2="12" stroke="white" stroke-width="2" stroke-linecap="round"/>
                </svg>
              </button>
            </div>
            <ul v-if="expandedSections.categories" class="footer-links">
              <li><a href="#">Kasım İndirimleri</a></li>
              <li><a href="#">Tüm Decathlon İndirimleri</a></li>
              <li><a href="#">Yağmurluklar</a></li>
              <li><a href="#">Yağmur Çizmeleri</a></li>
              <li><a href="#">Montlar</a></li>
              <li><a href="#">Evde Spor Aletleri</a></li>
              <li><a href="#">Balıkçılık Malzemeleri</a></li>
              <li><a href="#">Koşu Ayakkabıları</a></li>
              <li><a href="#">Tenis Raketleri</a></li>
              <li><a href="#">Bisiklet, Scooter ve Patenler</a></li>
            </ul>
          </div>

          <div class="footer-section">
            <div class="section-header">
              <h3 class="section-title">Popüler Markalar</h3>
              <button class="expand-icon" @click="toggleSection('brands')" aria-label="Expand">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <line x1="12" y1="5" x2="12" y2="19" stroke="white" stroke-width="2" stroke-linecap="round"/>
                  <line x1="5" y1="12" x2="19" y2="12" stroke="white" stroke-width="2" stroke-linecap="round"/>
                </svg>
              </button>
            </div>
            <ul v-if="expandedSections.brands" class="footer-links">
              <li><a href="#">QUECHUA</a></li>
              <li><a href="#">DOMYOS</a></li>
              <li><a href="#">KALENJI</a></li>
            </ul>
          </div>

          <div class="footer-section">
            <div class="section-header">
              <h3 class="section-title">Özel Kategoriler</h3>
              <button class="expand-icon" @click="toggleSection('special')" aria-label="Expand">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <line x1="12" y1="5" x2="12" y2="19" stroke="white" stroke-width="2" stroke-linecap="round"/>
                  <line x1="5" y1="12" x2="19" y2="12" stroke="white" stroke-width="2" stroke-linecap="round"/>
                </svg>
              </button>
            </div>
            <ul v-if="expandedSections.special" class="footer-links">
              <li><a href="#">Yeni Ürünler</a></li>
              <li><a href="#">Kampanyalar</a></li>
            </ul>
          </div>

          <div class="footer-qr">
            <img src="/assets/footer/qr.png" alt="ETBIS QR Code" class="qr-image" />
            <p class="qr-text">ETBIS'e Kayıtlıdır.</p>
          </div>
        </div>
      </div>

      <!-- Bottom Row -->
      <div class="footer-bottom">
        <div class="footer-bottom-left">
          <p class="payment-provider">
            <img src="/assets/footer/iyzico.svg" alt="iyzico" class="iyzico-logo" />
            <span>iyzico Ödeme Sağlayıcısı www.iyzico.com</span>
          </p>
          <div class="legal-links">
            <a href="#">Üyelik Sözleşmesi</a>
            <a href="#">Kişisel Verilerin Korunması</a>
            <a href="#">Yasal Bildirimler</a>
            <a href="#">Çerez Politikası</a>
            <a href="#">Gizlilik ve Güvenlik</a>
            <a href="#">Bilgi Toplumu Hizmetleri</a>
            <a href="#">Çerez Tercihleri</a>
          </div>
          <p class="copyright">
            © Decathlon - Turksport Spor Ürünleri San. ve Tic. Ltd. Şti. Tüm Hakları Saklıdır.
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'Footer',
  setup() {
    const expandedSections = ref({
      about: true,
      services: false,
      order: false,
      categories: true,
      brands: false,
      special: false,
    })

    const toggleSection = (section) => {
      expandedSections.value[section] = !expandedSections.value[section]
    }

    const nextSlide = () => {
      // Handle carousel next
    }

    const previousSlide = () => {
      // Handle carousel previous
    }

    return {
      expandedSections,
      toggleSection,
      nextSlide,
      previousSlide,
    }
  },
}
</script>

<style scoped>
.footer {
  position: relative;
  background-color: #2d4cae;
  color: white;
  padding: 3rem 0 2rem;
  margin-top: 4rem;
  overflow: hidden;
}

.footer-background {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 0;
}

.footer-bg-decoration {
  position: absolute;
  bottom: 0;
  left: 0;
  width: auto;
  height: 100%;
  opacity: 0.3;
}

.footer-container {
  position: relative;
  z-index: 1;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
}

.footer-content {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 3rem;
  margin-bottom: 3rem;
}

.footer-column {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.footer-section {
  display: flex;
  flex-direction: column;
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.section-title {
  font-size: 1.1rem;
  font-weight: 700;
  color: white;
  margin: 0;
}

.section-description {
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
  margin: 0;
}

.carousel-controls {
  display: flex;
  gap: 0.5rem;
}

.carousel-arrow {
  width: 32px;
  height: 32px;
  border: 1px solid white;
  border-radius: 50%;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.carousel-arrow:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

.expand-icon,
.collapse-icon {
  width: 24px;
  height: 24px;
  border: 1px solid white;
  border-radius: 50%;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.3s ease;
  padding: 0;
}

.expand-icon:hover,
.collapse-icon:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

.footer-links {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.footer-links li {
  margin: 0;
}

.footer-links a {
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  font-size: 0.875rem;
  transition: color 0.3s ease;
}

.footer-links a:hover {
  color: white;
}

.social-icons {
  display: flex;
  gap: 0.75rem;
  margin-top: 0.5rem;
}

.social-icon {
  width: 40px;
  height: 40px;
  border: 1px solid white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s ease;
}

.social-icon:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

.footer-logo {
  margin-top: 1rem;
}

.logo-img {
  height: 40px;
  width: auto;
}

.footer-qr {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  margin-top: 1rem;
}

.qr-image {
  width: 100px;
  height: 100px;
  background: white;
  padding: 0.5rem;
  border-radius: 4px;
}

.qr-text {
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.8);
  margin: 0;
}

.footer-bottom {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.footer-bottom-left {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.payment-provider {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.8);
  margin: 0;
}

.iyzico-logo {
  height: 20px;
  width: auto;
}

.legal-links {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.legal-links a {
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  font-size: 0.875rem;
  transition: color 0.3s ease;
}

.legal-links a:hover {
  color: white;
}

.copyright {
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.8);
  margin: 0;
}

@media (max-width: 1200px) {
  .footer-content {
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }
}

@media (max-width: 768px) {
  .footer-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .footer-bottom {
    flex-direction: column;
    gap: 1.5rem;
  }
}
</style>

