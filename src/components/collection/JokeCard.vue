<template>
  <div class="p-4 border rounded-xl bg-white shadow-md">
    <p class="font-bold">{{ joke.setup }}</p>
    <transition name="fade">
      <p v-if="showPunchline" class="mt-2 text-gray-700">{{ joke.punchline }}</p>
    </transition>
    <button @click="showPunchline = !showPunchline" class="mt-2 text-blue-600">
      {{ showPunchline ? 'Hide' : 'Reveal' }} Punchline
    </button>
    <button @click="$emit('save', joke)" class="mt-2 block text-green-600">Save Joke</button>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps<{ joke: any }>();
const emit = defineEmits(['save']);
const showPunchline = ref(false);
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
