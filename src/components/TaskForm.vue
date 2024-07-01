<template>
  <form
    @submit.prevent="handleSubmit"
    class="mx-auto grid max-w-[400px] grid-cols-[3fr_1fr] gap-2.5"
  >
    <input
      type="text"
      v-model="newTask"
      placeholder="I need to..."
      class="cursor-pointer rounded-md p-2.5 text-[1em] text-[#555] focus:outline-none"
    />
    <button type="submit" class="rounded-md border-0 bg-yellow-400">Add</button>
  </form>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { v4 as uuid } from 'uuid'
import { useTaskStore } from '@/stores/TaskStore'
const taskStore = useTaskStore()

const newTask = ref('')

const handleSubmit = () => {
  if (newTask.value.trim() === '') return
  taskStore.addTask({
    id: uuid(),
    title: newTask.value,
    isFav: false
  })
  newTask.value = ''
}
</script>

<style scoped></style>
