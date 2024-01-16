
import React from 'react';
import { FilterValuesType } from '../App';


// Строго пеердаёт тип данных, для всех типов содержащихся в массиве объектов.
export type TaskType = {
  id: string // число
  title: string // строка
  isDone: boolean // true/false
}
// Строго пеердаёт тип данных, для всех типов содержащихся в массиве объектов.
type PropsType = {
  title: string
  tasks: Array<TaskType>
  removeTask: (taskId: string) => void
  changeFilter: (value: FilterValuesType) => void
}


export function TodoList(props: PropsType) {
  return (
    <div>
      <h3>{props.title}</h3>
      <div>
        <input />
        <button>+</button>
      </div>
      <ul>
        {
          props.tasks.map((itemTask) => {
            return <li>
              <input type='checkbox' checked={itemTask.isDone} />
              <span>{itemTask.title}</span>
              <button onClick={ () => {props.removeTask(itemTask.id)} }>x</button>
            </li>
          })
        }
      </ul>
      <div>
        <button onClick={ () => { props.changeFilter("all")}}>All</button>
        <button onClick={ () => { props.changeFilter("active")}}>Active</button>
        <button onClick={ () => { props.changeFilter("completed")}}>Completed</button>
        {/* <button>Active</button>
        <button>Completed</button> */}
      </div>
    </div>
  )
}