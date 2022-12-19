import { Task } from '#/tasks'

export const useTasks = async () => {
  const router = useRouter()
  const route = useRoute()
  const filter = ref((route.query.filter || '').toString())

  const { data } = await useFetch<Task[]>('/api/tasks', {
    query: { filter: filter.value },
  })

  const items = ref(data.value || [])

  watch(filter, value => {
    router.replace({ query: value ? { filter: value } : undefined })
  })

  return { filter, items }
}
