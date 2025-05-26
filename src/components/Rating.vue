<template>
  <div class="flex items-center space-x-1">
    <button
      v-for="star in 5"
      :key="star"
      @click="setRating(star)"
      class="text-2xl transition hover:scale-110"
      :class="{
        'text-yellow-400': star <= ratingSetValue,
        'text-gray-300': star > ratingSetValue,
      }"
    >
      ★
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, defineEmits } from 'vue'

const props = defineProps<{ ratingValue?: number }>()

const emit = defineEmits<{
  (e: 'update:rating', value: number): void
}>()

const ratingSetValue = ref(props.ratingValue || 0)

const setRating = (value: number) => {
  ratingSetValue.value = value
  emit('update:rating', value)
}

watch(
  () => props.ratingValue,
  (newVal) => {
    ratingSetValue.value = newVal || 0
  },
)
</script>
