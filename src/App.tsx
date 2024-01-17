import React, { useState } from 'react';
import { TaskType, TodoList } from './Components/TodoList';
import './App.css';
import { v1 } from 'uuid';


export type FilterValuesType = "all" | "active" | "completed"

function App() {

  let [tasks, setTasks] = useState<Array<TaskType>>([
    { id: v1(), title: "CSS", isDone: true },
    { id: v1(), title: "JS", isDone: true },
    { id: v1(), title: "React", isDone: true },
    { id: v1(), title: "Redux", isDone: false },
    { id: v1(), title: "CSS", isDone: true },
    { id: v1(), title: "JS", isDone: true },
    { id: v1(), title: "React", isDone: true },
    { id: v1(), title: "Redux", isDone: false },
    { id: v1(), title: "CSS", isDone: true },
    { id: v1(), title: "JS", isDone: true },
    { id: v1(), title: "React", isDone: true },
    { id: v1(), title: "Redux", isDone: false },
  ]);

  function removeTask(id: string) {
    let filteredTasks = tasks.filter(itemTask => (itemTask.id !== id));
    setTasks(filteredTasks);
  }

  function addTask(title: string) {
    let newTask = {
      id: v1(),
      title: title,
      isDone: false
    }
    let newTasks = [newTask, ...tasks]
    setTasks(newTasks)
  }

  function changeStatus(taskId: string, isDone: boolean) {
    let task = tasks.find(t => t.id === taskId);
    if (task) {
      task.isDone = isDone;
    }
    setTasks([...tasks]);
  }

  let [filter, setFilter] = useState<FilterValuesType>("all");

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
        addTask={addTask}
        changeTaskStatus={changeStatus}
        filter={filter}
      />
    </div>
  );
}

export default App;
