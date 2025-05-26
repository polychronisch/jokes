<template>
  <div class="m-2 flex justify-between">
    <p>Total Jokes: {{ jokes.length }}</p>
    <p v-if="averageRating > 0">Average Rating: {{ averageRating.toFixed(1) }}</p>
    <p v-else>No rating provided</p>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  jokes: any[]
}>()

const averageRating = computed(() => {
  const ratedJokes = props.jokes.filter((joke) => joke.rating > 0)
  if (ratedJokes.length === 0) return 0
  const total = ratedJokes.reduce((sum, joke) => sum + joke.rating, 0)
  return total / ratedJokes.length
})
</script>
