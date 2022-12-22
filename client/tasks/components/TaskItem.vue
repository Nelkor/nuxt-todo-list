<script setup lang="ts">
import { Task } from '#/tasks'

defineProps<{ item: Task }>()
defineEmits(['rm'])
</script>

<template>
  <p>{{ item.text }}</p>
  <p>{{ item.time }}</p>
  <button @click="() => $emit('rm', item.id)">Удалить</button>
</template>
