import { defineStore } from 'pinia'

export const useTaskStore = defineStore('taskStore', {
  state: () => ({
    tasks: [
      {
        id: '47f9f86a-f943-41aa-a832-9d30b03009de',
        title: 'Task 1',
        isFav: false
      },
      {
        id: '96d17492-21a5-4e1e-80f9-35c454ec65ff',
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
    addTask(task: { id: string; title: string; isFav: boolean }) {
      this.tasks.push(task)
    },
    deleteTask(id: string) {
      this.tasks = this.tasks.filter((task) => task.id !== id)
    },
    toggleFav(id: string) {
      const task = this.tasks.find((task) => task.id === id)
      if (task) {
        task.isFav = !task.isFav
      }
    }
  }
})
