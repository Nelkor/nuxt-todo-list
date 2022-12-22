<script setup lang="ts">
import { useTasks, TaskItem } from '@/tasks'

const { filter, taskName, items, addTask, rmTask } = await useTasks()
</script>

<template>
  <h1>Список дел</h1>
  <NuxtLink to="/">Главная страница</NuxtLink>

  <div>
    <input v-model="filter" type="text" />
  </div>

  <TaskItem v-for="item in items" :key="item.id" :item="item" @rm="rmTask" />

  <input v-model="taskName" type="text" />
  <button @click="addTask">Добавить новое дело</button>
</template>
