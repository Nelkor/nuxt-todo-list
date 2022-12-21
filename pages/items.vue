<script setup lang="ts">
import { useTasks } from '@/tasks'

const { filter, items, createTask } = await useTasks()
</script>

<template>
  <h1>Список дел</h1>
  <NuxtLink to="/">Главная страница</NuxtLink>

  <div>
    <input v-model="filter" type="text" />
  </div>

  <div v-for="item in items" :key="item.id" class="item">{{ item.text }}</div>
  <button @click="createTask">Добавить новое дело</button>
</template>
