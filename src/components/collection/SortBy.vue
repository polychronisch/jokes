<template>
  <div class="flex items-center">
    <p class="mb-0">Sort by:</p>
    <select class="rounded ml-3" @change="onSortChange">
      <option value="alphabetical" selected>Alphabetically</option>
      <option value="rating">Rating</option>
    </select>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits<{
  (e: 'update:sort', value: 'alphabetical' | 'rating'): void
}>()

const onSortChange = (e: Event) => {
  const value = (e.target as HTMLSelectElement).value
  emit('update:sort', value === 'rating' ? 'rating' : 'alphabetical')
}
</script>

<style scoped>
select {
  border: thin solid #1e1e1e;
}
</style>
