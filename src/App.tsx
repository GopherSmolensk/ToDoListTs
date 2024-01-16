import React, { useState } from 'react';
import { TaskType, TodoList } from './Components/TodoList';
import './App.css';
import {v1} from 'uuid';


export type FilterValuesType = "all" | "completed" | "active"

function App() {

  let [tasks, setTasks] = useState< Array<TaskType> >([
    { id: v1(), title: "CSS", isDone: true },
    { id: v1(), title: "JS", isDone: true },
    { id: v1(), title: "React", isDone: true },
    { id: v1(), title: "Redux", isDone: false },
    { id: v1(), title: "Store", isDone: false },
    { id: v1(), title: "C++", isDone: false },
    { id: v1(), title: "C#", isDone: false },
    { id: v1(), title: "GraphQl", isDone: false },
    { id: v1(), title: "pyton", isDone: false },
    { id: v1(), title: "php", isDone: false },
  ]);

  console.log(tasks);
  
  let [filter, setFilter] = useState<FilterValuesType>("all");

  function removeTask(id: string) {
    let filteredTasks = tasks.filter(itemTask => (itemTask.id !== id));
    setTasks(filteredTasks);
  }

  function changeFilter(value: FilterValuesType) {
    setFilter(value);
  }

  let tasksForTodoList = tasks;
  if (filter === "completed") {
    tasksForTodoList = tasks.filter(t => t.isDone === true);
  }
  if (filter === "active") {
    tasksForTodoList = tasks.filter(t => t.isDone === false);
  }

  return (
    <div className="App">
      <TodoList
        title="What to learn?"
        tasks={tasksForTodoList}
        removeTask={removeTask}
        changeFilter={changeFilter}
        />
    </div>
  );
}

export default App;
