<template>
  <div class="carousel-container">
    <div class="carousel-wrapper" @mouseenter="pauseAutoPlay" @mouseleave="resumeAutoPlay">
      <div 
        class="carousel-slides" 
        :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
      >
        <div 
          v-for="(image, index) in images" 
          :key="index"
          class="carousel-slide"
        >
          <img :src="image" :alt="`Slide ${index + 1}`" />
        </div>
      </div>
      
      <!-- Keşfet Button - Bottom Left -->
      <div class="carousel-content">
        <div v-if="title" class="carousel-title">{{ title }}</div>
        <button class="carousel-button" @click="handleDiscover">
          {{ buttonText }}
        </button>
      </div>
      
      <!-- Navigation Controls - Bottom Right -->
      <div class="carousel-navigation">
        <button 
          class="carousel-nav-button prev" 
          @click="previousSlide"
          aria-label="Previous slide"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 18L9 12L15 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
        
        <div class="carousel-dots">
          <button
            v-for="(image, index) in images"
            :key="index"
            :class="['carousel-dot', { active: currentIndex === index }]"
            @click="goToSlide(index)"
            :aria-label="`Go to slide ${index + 1}`"
          />
        </div>
        
        <button 
          class="carousel-nav-button next" 
          @click="nextSlide"
          aria-label="Next slide"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 18L15 12L9 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue'

export default {
  name: 'Carousel',
  props: {
    images: {
      type: Array,
      required: true,
    },
    buttonText: {
      type: String,
      default: 'Keşfet!',
    },
    autoPlay: {
      type: Boolean,
      default: true,
    },
    autoPlayInterval: {
      type: Number,
      default: 5000,
    },
  },
  emits: ['discover-click'],
  setup(props, { emit }) {
    const currentIndex = ref(0)
    let autoPlayTimer = null

    const nextSlide = () => {
      currentIndex.value = (currentIndex.value + 1) % props.images.length
    }

    const previousSlide = () => {
      currentIndex.value = currentIndex.value === 0 
        ? props.images.length - 1 
        : currentIndex.value - 1
    }

    const goToSlide = (index) => {
      currentIndex.value = index
    }

    const startAutoPlay = () => {
      if (props.autoPlay && props.images.length > 1) {
        autoPlayTimer = setInterval(() => {
          nextSlide()
        }, props.autoPlayInterval)
      }
    }

    const pauseAutoPlay = () => {
      if (autoPlayTimer) {
        clearInterval(autoPlayTimer)
        autoPlayTimer = null
      }
    }

    const resumeAutoPlay = () => {
      if (props.autoPlay) {
        startAutoPlay()
      }
    }

    const handleDiscover = () => {
      emit('discover-click', currentIndex.value)
    }

    onMounted(() => {
      startAutoPlay()
    })

    onUnmounted(() => {
      pauseAutoPlay()
    })

    return {
      currentIndex,
      nextSlide,
      previousSlide,
      goToSlide,
      pauseAutoPlay,
      resumeAutoPlay,
      handleDiscover,
    }
  },
}
</script>

<style scoped>
.carousel-container {
  width: 100%;
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 2rem;
}

.carousel-wrapper {
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
  overflow: hidden;
}

.carousel-slides {
  display: flex;
  transition: transform 0.5s ease-in-out;
  height: 100%;
}

.carousel-slide {
  min-width: 100%;
  height: 100%;
  position: relative;
}

.carousel-slide img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.carousel-content {
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 2rem;
  z-index: 2;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.carousel-title {
  font-size: 2rem;
  font-weight: 600;
  color: white;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  margin: 0;
}

.carousel-button {
  background-color: #3498db;
  color: white;
  border: none;
  padding: 0.75rem 2rem;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  align-self: flex-start;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
}

.carousel-button:hover {
  background-color: #2980b9;
}

.carousel-button:active {
  transform: scale(0.98);
}

.carousel-navigation {
  position: absolute;
  bottom: 0;
  right: 0;
  padding: 2rem;
  z-index: 2;
  display: flex;
  align-items: center;
  gap: 1rem;
}

.carousel-nav-button {
  background-color: rgba(255, 255, 255, 0.9);
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  color: #2c3e50;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
}

.carousel-nav-button:hover {
  background-color: white;
  transform: scale(1.1);
}

.carousel-nav-button:active {
  transform: scale(0.95);
}

.carousel-dots {
  display: flex;
  gap: 0.5rem;
  align-items: center;
}

.carousel-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  border: 2px solid white;
  background-color: transparent;
  cursor: pointer;
  transition: all 0.3s ease;
  padding: 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.carousel-dot:hover {
  transform: scale(1.2);
}

.carousel-dot.active {
  background-color: white;
  width: 12px;
  height: 12px;
}

@media (max-width: 768px) {
  .carousel-content {
    padding: 1.5rem;
  }

  .carousel-title {
    font-size: 1.5rem;
  }

  .carousel-button {
    padding: 0.625rem 1.5rem;
    font-size: 0.9rem;
  }

  .carousel-navigation {
    padding: 1.5rem;
    gap: 0.75rem;
  }

  .carousel-nav-button {
    width: 36px;
    height: 36px;
  }
}
</style>

