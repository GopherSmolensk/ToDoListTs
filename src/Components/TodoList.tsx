
import React, { ChangeEvent, useState, KeyboardEvent } from 'react';
import { FilterValuesType } from '../App';





// Строго пеердаёт тип данных, для всех типов содержащихся в массиве объектов.
export type TaskType = {
  id: string // число
  title: string // строка
  isDone: boolean // true/false
}
// Строго пеердаёт тип данных, для всех типов содержащихся в массиве объектов.
// Строго пеердаёт тип данных, для всех типов содержащихся в массиве объектов.
// Строго пеердаёт тип данных, для всех типов содержащихся в массиве объектов.
// Строго пеердаёт тип данных, для всех типов содержащихся в массиве объектов.
type PropsType = {
  title: string
  tasks: Array<TaskType>
  removeTask: (taskId: string) => void
  changeFilter: (value: FilterValuesType) => void
  addTask: (title: string) => void
  changeTaskStatus: (taskId: string, isDone: boolean) => void
  filter: FilterValuesType
}


export function TodoList(props: PropsType) {

  const [newTaskTitle, setNewTaskTitle] = useState("")
  const [error, setError] = useState<string | null>(null)

  const onNewTitleChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTaskTitle(e.currentTarget.value)
  }

  const onKeyDownHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    setError(null);
    if (e.key === 'Enter') {
      props.addTask(newTaskTitle);
      setNewTaskTitle("");
    }
  }


  const addTask = () => {
    if (newTaskTitle.trim() !== "") {
      props.addTask(newTaskTitle.trim());
      setNewTaskTitle("");
    } else {
      setError("Title id required")
    }

  }

  const onAllClickHandler = () => props.changeFilter("all");
  const onActiveClickHandler = () => props.changeFilter("active");
  const onCompletedClickHandler = () => props.changeFilter("completed");


  return (
    <div>
      <h3>{props.title}</h3>
      <div>
        <input value={newTaskTitle}
          onChange={onNewTitleChangeHandler}
          onKeyDown={onKeyDownHandler}
          className={error ? "error" : ""}
        />
        <button onClick={addTask}>+</button>
        {error && <div className='error-message'>{error}</div>}
      </div>
      <ul>
        {
          props.tasks.map(itemTask => {
            const onRemoveHandler = () => props.removeTask(itemTask.id)
            const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
              props.changeTaskStatus(itemTask.id, e.currentTarget.checked);

            }

            return <li key={itemTask.id} className={itemTask.isDone ? "is-done" : ""}>
              <input type='checkbox'
                onChange={onChangeHandler}
                checked={itemTask.isDone} />
              <span>{itemTask.title}</span>
              <button onClick={onRemoveHandler}>x</button>
            </li>
          })
        }
      </ul>
      <div>
        <button
          className={props.filter === 'all' ? 'active-filter' : ""}
          onClick={onAllClickHandler}>All</button>
        <button className={props.filter === 'active' ? 'active-filter' : ""}
         onClick={onActiveClickHandler}>Active</button>
        <button className={props.filter === 'completed' ? 'active-filter' : ""}
         onClick={onCompletedClickHandler}>Completed</button>
      </div>
    </div>
  )
}