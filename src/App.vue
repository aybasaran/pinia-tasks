<template>
  <main>
    <header class="flex items-center justify-center bg-stone-200 pt-5 text-center">
      <PiniLogo :size="50" class="-rotate-12" />
      <h1 class="ml-4 rotate-2 pt-5 text-[2em] font-semibold">Pinia Tasks</h1>
    </header>

    <div class="bg-[#e7e7e7] py-5">
      <TaskForm />
    </div>

    <nav class="mx-auto my-10 w-[640px] text-right">
      <button @click="filter = 'all'">All Tasks</button>
      <button @click="filter = 'favs'">Favorite Tasks</button>
    </nav>

    <div class="mx-auto my-5 max-w-screen-sm" v-if="filter === 'all'">
      <p>You have {{ taskStore.totalCount }} tasks left to do</p>
      <div v-for="task in taskStore.tasks" :key="task.id">
        <TaskDetails :task="task" />
      </div>
    </div>

    <div class="mx-auto my-5 max-w-screen-sm" v-if="filter === 'favs'">
      <p>You have {{ taskStore.favCount }} favs left to do</p>
      <div v-for="task in taskStore.favs" :key="task.id">
        <TaskDetails :task="task" />
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import TaskForm from '@/components/TaskForm.vue'
import TaskDetails from '@/components/TaskDetails.vue'
import PiniLogo from '@/components/icons/PiniaLogo.vue'
import { useTaskStore } from '@/stores/TaskStore'
import { ref } from 'vue'

const taskStore = useTaskStore()
const filter = ref('all')
</script>

<style scoped>
button {
  @apply ml-2.5 cursor-pointer rounded border-2 border-stone-400 bg-white px-2 py-1 text-sm text-stone-400;
}
</style>
