<template>
  <div class="max-w-xl mx-auto p-6">
    <h1 class="text-2xl font-bold mb-4 text-center">🤣 Joke Explorer</h1>

    <div class="flex justify-center mb-4 gap-4">
      <button
        class="bg-purple-500 text-white px-4 py-2 rounded"
        @click="getRandomJoke"
        :disabled="loading"
      >
        Random Joke
      </button>
      <button
        class="bg-green-600 text-black px-4 py-2 rounded"
        @click="getProgrammingJoke"
        :disabled="loading"
      >
        Programming Joke
      </button>
    </div>

    <div v-if="loading" class="text-center text-gray-600">Loading joke...</div>
    <div v-else-if="error" class="text-center text-red-500">{{ error }}</div>

    <div v-if="joke" class="bg-white rounded shadow p-4 text-center">
      <p class="font-semibold text-lg">{{ joke.setup }}</p>
      <transition name="fade">
        <p v-if="showPunchline" class="mt-2 text-gray-700">{{ joke.punchline }}</p>
      </transition>

      <button @click="togglePunchline" class="mt-2 text-white bg-black p-2 rounded">
        {{ showPunchline ? 'Hide' : 'Reveal' }} Punchline
      </button>

      <div class="flex justify-between align-center mt-3">
        <button class="mt-4 block bg-green-500 text-white px-4 py-2 rounded" @click="saveJoke">
          Save Joke
        </button>
        <Rating
          :rating-value="joke?.rating || 0"
          @update:rating="
            (val) => {
              if (joke) joke.rating = val
            }
          "
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useJokes } from '@/composables/useJokes'
import Rating from '@/components/Rating.vue'

type Joke = {
  id: number
  type: string
  setup: string
  punchline: string
  rating: number
}

const { joke, jokeType, loading, error, fetchJoke } = useJokes()
const showPunchline = ref(false)
const rating = ref(0)

const togglePunchline = () => {
  showPunchline.value = !showPunchline.value
}

const getRandomJoke = () => {
  jokeType.value = 'random'
  fetchJoke()
}

const getProgrammingJoke = () => {
  jokeType.value = 'programming'
  fetchJoke()
}

const saveJoke = () => {
  if (!joke.value) return

  let saved: Joke[] = []

  try {
    const raw = localStorage.getItem('jokes')
    if (raw) {
      saved = JSON.parse(raw)
    }
  } catch (err) {
    console.error('Failed to parse saved jokes from localStorage:', err)
    saved = []
  }

  const alreadyExists = saved.some((j) => j.id === joke.value?.id)
  if (alreadyExists) {
    alert('This joke is already saved.')
    return
  }

  saved.push(joke.value)
  localStorage.setItem('jokes', JSON.stringify(saved))
  alert('Joke saved to collection!')
}

fetchJoke()
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
