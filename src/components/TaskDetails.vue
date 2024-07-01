<template>
  <div class="mt-5 flex items-center justify-between rounded bg-white px-1.5 py-5 shadow">
    <h3 class="inline-block">{{ task.title }}</h3>
    <div class="flex text-right">
      <Trash2
        @click="taskStore.deleteTask(task.id)"
        class="ml-1.5 size-[1.4em] cursor-pointer fill-stone-400 text-stone-400"
      />
      <Heart
        @click="taskStore.toggleFav(task.id)"
        :class="{ 'fill-red-600 text-red-600': task.isFav }"
        class="ml-1.5 size-[1.4em] cursor-pointer fill-stone-400 text-stone-400"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useTaskStore } from '@/stores/TaskStore'
import { Trash2, Heart } from 'lucide-vue-next'

const taskStore = useTaskStore()

defineProps({
  task: {
    type: Object,
    required: true
  }
})
</script>
