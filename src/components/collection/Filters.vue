<template>
  <div class="flex align-center">
    <p class="mb-0">Filters:</p>
    <select class="rounded ml-3" @change="onChange">
      <option value="all" default>All</option>
      <option value="0">No rating</option>
      <option value="1">★</option>
      <option value="2">★★</option>
      <option value="3">★★★</option>
      <option value="4">★★★★</option>
      <option value="5">★★★★★</option>
    </select>
  </div>
</template>

<script setup lang="ts">
import { defineEmits } from 'vue'

const emit = defineEmits<{
  (e: 'update:filter', value: number | null): void
}>()

const onChange = (e: Event) => {
  const value = (e.target as HTMLSelectElement).value
  emit('update:filter', value === 'all' ? null : parseInt(value))
}
</script>

<style scoped>
select {
  border: thin solid #1e1e1e;
}
</style>
