<script lang="ts" setup>
import { useStore } from '@/store'
const store = useStore()
const items = store.items
</script>

<template>
  <div>
    <ul class="list-none">
      <div v-for="(item, index) in items" :key="index" class="h-screen flex justify-center items-center">
        <li class="text-lg md:text-4xl py-4">
          {{ item.name }}
        </li>
      </div>
    </ul>
  </div>
</template>

<style scoped></style>
