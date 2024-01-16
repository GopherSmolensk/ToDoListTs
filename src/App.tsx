import React, { useState } from 'react';
import { TaskType, TodoList } from './Components/TodoList';
import './App.css';

// function useState2(data: any) {
//   return [data, () => { }]
// }

// let arr = useState2([{}, {}, {}]);

// let tasks = arr[0];
// let setTasks = arr[1];

// export function Counter() {
//   console.log('Counter rendered');

//   let arr = useState(42)
//   let data = arr[0];
//   let setData = arr[1];
//   return <div onClick={() => { setData(data + 1) }}>{data}</div>
// }

function App() {

  let initTasks: Array<TaskType> = [
    { id: 1, title: "CSS", isDone: true },
    { id: 2, title: "JS", isDone: true },
    { id: 3, title: "React", isDone: true },
    { id: 4, title: "Redux", isDone: false },
    { id: 5, title: "Store", isDone: false }
  ]

  let arr = useState(initTasks);

  let tasks = arr[0];
  let setTasks = arr[1];

  function removeTask(id: number) {
    let filteredTasks = tasks.filter(itemTask => (itemTask.id !== id));
    setTasks(filteredTasks);
  }

  return (
    <div className="App">
      <TodoList
        title="What to learn?"
        tasks={tasks}
        removeTask={removeTask} />
    </div>
  );
}

export default App;
