import { Task } from '#/tasks'

import { createTask, deleteTask } from '../api'

export const useTasks = async () => {
  const router = useRouter()
  const route = useRoute()
  const filter = ref((route.query.filter || '').toString())
  const taskName = ref('')

  const { data } = await useFetch<Task[]>('/api/tasks', {
    query: { filter: filter.value },
  })

  const items = ref(data.value || [])

  const addTask = async () => {
    const text = taskName.value

    if (!text) {
      return
    }

    taskName.value = ''

    const { id, time } = await createTask(text)

    items.value.push({ id, time, text })
  }

  const rmTask = (id: number) => {
    deleteTask(id)

    const index = items.value.findIndex(item => item.id === id)

    if (index !== -1) {
      items.value.splice(index, 1)
    }
  }

  watch(filter, value => {
    router.replace({ query: value ? { filter: value } : undefined })
  })

  return { filter, taskName, items, addTask, rmTask }
}
