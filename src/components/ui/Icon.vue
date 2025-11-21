<template>
  <span class="icon-wrapper" :class="{ 'icon-clickable': clickable }" @click="handleClick">
    <img v-if="src" :src="src" :alt="alt" class="icon-img" />
    <svg
      v-else-if="name"
      :class="['icon-svg', `icon-${name}`]"
      :width="size"
      :height="size"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <component :is="iconComponent" />
    </svg>
    <slot v-else />
  </span>
</template>

<script>
import { computed } from 'vue'

export default {
  name: 'Icon',
  props: {
    name: {
      type: String,
      default: '',
    },
    src: {
      type: String,
      default: '',
    },
    alt: {
      type: String,
      default: '',
    },
    size: {
      type: [String, Number],
      default: 24,
    },
    clickable: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['click'],
  setup(props, { emit }) {
    const iconComponent = computed(() => {
      // Return SVG path based on icon name
      const icons = {
        search: () => (
          <>
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.35-4.35" />
          </>
        ),
        cart: () => (
          <>
            <circle cx="9" cy="21" r="1" />
            <circle cx="20" cy="21" r="1" />
            <path d="m1 1 4 4 4 13 10 0 4-13" />
          </>
        ),
        user: () => (
          <>
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </>
        ),
        heart: () => (
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
        ),
        phone: () => (
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        ),
        'map-pin': () => (
          <>
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
            <circle cx="12" cy="10" r="3" />
          </>
        ),
      }
      return icons[props.name] || (() => null)
    })

    const handleClick = () => {
      if (props.clickable) {
        emit('click')
      }
    }

    return {
      iconComponent,
      handleClick,
    }
  },
}
</script>

<style scoped>
.icon-wrapper {
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.icon-clickable {
  cursor: pointer;
}

.icon-img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.icon-svg {
  display: block;
}
</style>

