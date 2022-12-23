import { Task } from '#/tasks'

import { EditableTask } from '../types'
import { createTask, deleteTask } from '../api'

export const useTasks = async () => {
  const router = useRouter()
  const route = useRoute()
  const filter = ref((route.query.filter || '').toString())
  const taskName = ref('')

  const { data } = await useFetch<Task[]>('/api/tasks', {
    query: { filter: filter.value },
  })

  const items = ref(
    (data.value || []).map<EditableTask>(task => ({
      ...task,
      isBeingEdited: false,
    }))
  )

  const findTaskIndex = (id: number) =>
    items.value.findIndex(item => item.id === id)

  const cancelEditingAllItems = () => {
    items.value = items.value.map(item => ({ ...item, isBeingEdited: false }))
  }

  const addTask = async () => {
    const text = taskName.value

    if (!text) {
      return
    }

    taskName.value = ''

    const { id, time } = await createTask(text)

    items.value.push({ id, time, text, isBeingEdited: false })
  }

  const editTask = (id: number) => {
    cancelEditingAllItems()

    const index = findTaskIndex(id)

    if (index === -1) {
      return
    }

    items.value.splice(index, 1, { ...items.value[index], isBeingEdited: true })
  }

  const rmTask = (id: number) => {
    deleteTask(id)

    const index = findTaskIndex(id)

    if (index !== -1) {
      items.value.splice(index, 1)
    }
  }

  watch(filter, value => {
    router.replace({ query: value ? { filter: value } : undefined })
  })

  return {
    filter,
    taskName,
    items,
    addTask,
    cancelEditingAllItems,
    editTask,
    rmTask,
  }
}
