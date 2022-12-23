import { Task } from '#/tasks'

export interface EditableTask extends Task {
  isBeingEdited: boolean
}
