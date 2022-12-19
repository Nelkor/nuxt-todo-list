<script setup lang="ts">
const router = useRouter()
const route = useRoute()
const filter = ref((route.query.filter || '').toString())

const { data } = await useFetch<unknown[]>('/api/tasks', {
  query: { filter: filter.value },
})

const items = ref(data.value || [])

watch(filter, value => {
  router.replace({ query: value ? { filter: value } : undefined })
})
</script>

<template>
  <h1>Список дел</h1>
  <NuxtLink to="/">Главная страница</NuxtLink>

  <div>
    <input v-model="filter" type="text" />
  </div>

  <div v-for="item in items" :key="item.id" class="item">{{ item.text }}</div>
</template>
