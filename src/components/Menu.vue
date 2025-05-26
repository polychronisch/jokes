<template>
  <div class="flex justify-between align-center w-full">
    <RouterLink to="/"> <h1>Joke Application</h1> </RouterLink>
    <nav class="flex gap-4 pr-3">
      <RouterLink to="/" class="text-blue-600 hover" active-class="font-bold">
        Joke Discovery
      </RouterLink>
      <RouterLink to="/collection" class="text-blue-600 hover" active-class="font-bold">
        Joke Collection
      </RouterLink>
    </nav>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>
