<script setup lang="ts">
import { Task } from '#/tasks'
import { formatTime } from '@/general'

const props = defineProps<{
  item: Task
  isBeingEdited: boolean
}>()

const emit = defineEmits(['rm', 'edit', 'save', 'cancel'])
const innerText = ref(props.item.text)
const inputRef = ref(null as unknown as HTMLInputElement)

const edit = () => {
  emit('edit')

  Promise.resolve().then(() => inputRef.value.focus())
}

const save = () => {
  if (!innerText.value) {
    return
  }

  emit('save', innerText.value)
}

const cancel = () => {
  innerText.value = props.item.text

  emit('cancel')
}
</script>

<template>
  <div class="task-item">
    <p>{{ formatTime(item.time) }}</p>
    <button @click="() => emit('rm', item.id)">Удалить</button>

    <template v-if="isBeingEdited">
      <input ref="inputRef" v-model="innerText" type="text" />
      <button @click="save">Сохранить</button>
      <button @click="cancel">Отмена</button>
    </template>

    <template v-else>
      <p>{{ item.text }}</p>
      <button @click="edit">Редактировать</button>
    </template>
  </div>
</template>
