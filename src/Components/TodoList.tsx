
import { ChangeEvent } from 'react';
import { FilterValuesType } from '../App';
import { AddItemForm } from './AddItemForm';
import { EditableSpan } from './EditableSpan';

// Библиотека Material UI
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';



// Строго пеердаёт тип данных, для всех типов содержащихся в массиве объектов.
export type TaskType = {
  id: string // число
  title: string // строка
  isDone: boolean // true/false
}
// Строго пеердаёт тип данных, для всех типов содержащихся в массиве объектов.
type PropsType = {
  id: string
  title: string
  tasks: Array<TaskType>
  removeTask: (taskId: string, todolistId: string) => void
  changeFilter: (value: FilterValuesType, todolist: string) => void
  addTask: (title: string, todolistId: string) => void
  changeTaskStatus: (taskId: string, isDone: boolean, todolistId: string) => void
  changeTaskTitle: (taskId: string, newTitle: string, todolistId: string) => void
  filter: FilterValuesType
  removeTodolist: (todolistId: string) => void
  changeTodoListTitle: (todolistId: string, newTitle: string) => void
}


export function TodoList(props: PropsType) {

  const onAllClickHandler = () => props.changeFilter("all", props.id);
  const onActiveClickHandler = () => props.changeFilter("active", props.id);
  const onCompletedClickHandler = () => props.changeFilter("completed", props.id);
  const removeTodolist = () => {
    props.removeTodolist(props.id);
  }

  const changeTodoListTitle = (newTitle: string) => {
    props.changeTodoListTitle(props.id, newTitle)
  }

  const addTask = (title: string) => {
    props.addTask(title, props.id)
  }

  return (
    <div>
      <h3>
        <EditableSpan title={props.title} onChange={changeTodoListTitle} />
        <Button aria-label="add an alarm" onClick={removeTodolist}>
          <DeleteIcon />
        </Button>
      </h3>
      <AddItemForm addItem={addTask} />
      <div>
        {
          props.tasks.map(itemTask => {
            const onRemoveHandler = () => props.removeTask(itemTask.id, props.id)
            const onChangeStatusHandler = (e: ChangeEvent<HTMLInputElement>) => {
              let newIsDoneValue = e.currentTarget.checked;
              props.changeTaskStatus(itemTask.id, newIsDoneValue, props.id);
            }
            const onChangeTitleHandler = (newValue: string) => {
              props.changeTaskTitle(itemTask.id, newValue, props.id);
            }

            return <div key={itemTask.id} className={itemTask.isDone ? "is-done" : ""}>
              <Checkbox
                onChange={onChangeStatusHandler}
                checked={itemTask.isDone} />
              <EditableSpan title={itemTask.title}
                onChange={onChangeTitleHandler} />
              <Button aria-label="add an alarm" onClick={onRemoveHandler}>
                <DeleteIcon />
              </Button>
            </div>
          })
        }
      </div>
      <div>
        <Button
          variant={props.filter === 'all' ? 'contained' : "text"}
          onClick={onAllClickHandler}>All</Button>
        <Button
          color='secondary' variant={props.filter === 'active' ? 'contained' : "text"}
          onClick={onActiveClickHandler}>Active</Button>
        <Button
          color='primary' variant={props.filter === 'completed' ? 'contained' : "text"}
          onClick={onCompletedClickHandler}>Completed</Button>
      </div>
    </div>
  )
}


