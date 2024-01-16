
import React from 'react';


// Строго пеердаёт тип данных, для всех типов содержащихся в массиве объектов.
export type TaskType = {
  id: number // число
  title: string // строка
  isDone: boolean // true/false
}
// Строго пеердаёт тип данных, для всех типов содержащихся в массиве объектов.
type PropsType = {
  title: string
  tasks: Array<TaskType>
  removeTask: Function
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
        <button>All</button>
        <button>Active</button>
        <button>Completed</button>
      </div>
    </div>
  )
}