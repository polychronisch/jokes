import { ref } from 'vue'

export function useJokes() {
  const joke = ref<{
    id: number
    type: string
    setup: string
    punchline: string
    rating: number
  } | null>(null)
  const loading = ref(false)
  const error = ref('')
  const jokeType = ref<'random' | 'programming'>('random')

  const fetchJoke = async () => {
    loading.value = true
    error.value = ''
    try {
      const endpoint =
        jokeType.value === 'random'
          ? 'https://official-joke-api.appspot.com/jokes/random'
          : 'https://official-joke-api.appspot.com/jokes/programming/random'

      const res = await fetch(endpoint)
      const data = await res.json()
      joke.value = {
        ...(Array.isArray(data) ? data[0] : data),
        rating: 0, //set the rating 0, we create the structure for handling this value too
      }
    } catch (err) {
      error.value = 'Could not fetch joke. Please try again.'
    } finally {
      loading.value = false
    }
  }

  return {
    joke,
    jokeType,
    loading,
    error,
    fetchJoke,
  }
}
