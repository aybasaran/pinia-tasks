import { defineStore } from 'pinia'

export const useTaskStore = defineStore('taskStore', {
  state: () => ({
    tasks: [
      {
        id: 1,
        title: 'Task 1',
        isFav: false
      },
      {
        id: 2,
        title: 'Task 2',
        isFav: true
      }
    ]
  }),
  getters: {
    totalCount: (state) => state.tasks.length,
    favs: (state) => state.tasks.filter((task) => task.isFav),
    favCount: (state) => state.tasks.reduce((acc, task) => (task.isFav ? acc + 1 : acc), 0)
  },
  actions: {
    addTask(task: { id: number; title: string; isFav: boolean }) {
      this.tasks.push(task)
    },
    deleteTask(id: number) {
      this.tasks = this.tasks.filter((task) => task.id !== id)
    },
    toggleFav(id: number) {
      const task = this.tasks.find((task) => task.id === id)
      if (task) {
        task.isFav = !task.isFav
      }
    }
  }
})
