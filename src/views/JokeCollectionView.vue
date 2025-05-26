<template>
  <div class="max-w-xl mx-auto p-6">
    <h1 class="text-2xl font-bold mb-4 text-center">📚 My Joke Collection</h1>
    <div v-if="jokes.length === 0" class="text-center text-gray-600">No jokes saved yet.</div>
    <ul v-else class="space-y-4">
      <div class="flex justify-between">
        <Filters @update:filter="selectedRating = $event" />
        <SortBy @update:sort="sortBy = $event" />
      </div>
      <div v-if="finalJokes.length === 0" class="text-center text-gray-800 mt-4">
        No jokes found with that rating.
      </div>
      <li
        v-for="joke in finalJokes"
        :key="joke.id"
        :class="[
          'rounded shadow p-4 text-black',
          joke.type === 'programming' ? 'bg-green-300' : 'bg-purple-300',
        ]"
      >
        <p class="font-semibold">{{ joke.setup }}</p>
        <p class="text-gray-700 mt-1">{{ joke.punchline }}</p>
        <div class="flex justify-between align-center mt-3">
          <button
            class="mt-2 bg-red-600 text-white hover:bg-red-300 rounded p-2"
            @click="removeJoke(joke.id)"
          >
            Remove
          </button>
          <Rating :rating-value="joke.rating" :readonly="true" />
        </div>
      </li>
    </ul>
    <CollectionStats :jokes="finalJokes" />
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import Rating from '@/components/Rating.vue'
import Filters from '@/components/collection/Filters.vue'
import SortBy from '@/components/collection/SortBy.vue'
import CollectionStats from '@/components/collection/CollectionStats.vue'

type Joke = {
  id: number
  type: string
  setup: string
  punchline: string
  rating: number
}

const jokes = ref<Joke[]>([])
const selectedRating = ref<number | null>(null)
const sortBy = ref<'alphabetical' | 'rating'>('alphabetical')

const loadJokes = () => {
  try {
    const raw = localStorage.getItem('jokes')
    jokes.value = raw ? JSON.parse(raw) : []
  } catch (err) {
    console.error('Failed to load jokes:', err)
    jokes.value = []
  }
}

const removeJoke = (id: number) => {
  jokes.value = jokes.value.filter((joke) => joke.id !== id)
  localStorage.setItem('jokes', JSON.stringify(jokes.value))
}

const finalJokes = computed(() => {
  let filtered =
    selectedRating.value === null
      ? [...jokes.value]
      : jokes.value.filter((joke) => joke.rating === selectedRating.value)

  if (sortBy.value === 'alphabetical') {
    filtered.sort((a, b) => a.setup.localeCompare(b.setup))
  } else if (sortBy.value === 'rating') {
    filtered.sort((a, b) => b.rating - a.rating)
  }

  return filtered
})

onMounted(loadJokes)
</script>
