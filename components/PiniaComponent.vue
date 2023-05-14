<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useStore } from '@/store'
const store = useStore()
const items = store.items
const observer = ref(null)

onMounted(() => {
  const options = {
    root: null,
    rootMargin: '-100px',
    threshold: 1,
  }
  observer.value = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      entry.target.style.opacity = entry.isIntersecting ? '1' : '0'
    })
  }, options)

  const elements = document.querySelectorAll('.item')
  elements.forEach((element) => {
    observer.value.observe(element)
  })
})

onUnmounted(() => {
  observer.value.disconnect()
})
</script>

<template>
  <div class="">
    <ul class="list-none">
      <div v-for="(item, index) in items" :key="index" class="relative h-screen flex justify-center items-center">
        <li class="text-lg md:text-4xl py-4 item">
          {{ item.name }}
        </li>
      </div>
    </ul>
  </div>
</template>

<style scoped>


.item {
  opacity: 0;
  transition: opacity 0.5s;
}
</style>

