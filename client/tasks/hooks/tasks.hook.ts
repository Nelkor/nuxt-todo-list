import { Task, CreateTaskResult } from '#/tasks'
import { post } from '@/net'

export const useTasks = async () => {
  const router = useRouter()
  const route = useRoute()
  const filter = ref((route.query.filter || '').toString())

  const { data } = await useFetch<Task[]>('/api/tasks', {
    query: { filter: filter.value },
  })

  const items = ref(data.value || [])

  const createTask = async () => {
    const text = 'Новое дело'

    const { id, time } = await post<CreateTaskResult>('tasks', { text })

    items.value.push({ id, time, text })
  }

  watch(filter, value => {
    router.replace({ query: value ? { filter: value } : undefined })
  })

  return { filter, items, createTask }
}
