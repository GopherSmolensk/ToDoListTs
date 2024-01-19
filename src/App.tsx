import { useState } from 'react';
import { TodoList, TaskType } from './Components/TodoList';
import { AddItemForm } from './Components/AddItemForm';
import './App.css';
import { v1 } from 'uuid';


export type FilterValuesType = "all" | "active" | "completed";

type TodolistType = {
  id: string
  title: string
  filter: FilterValuesType
}

type TasksStateType = {
  [key: string]: Array<TaskType>
}

function App() {


  function removeTask(id: string, todolistId: string) {
    let tasks = tasksObj[todolistId];

    let filteredTasks = tasks.filter(itemTask => (itemTask.id !== id));
    tasksObj[todolistId] = filteredTasks;

    setTasks({ ...tasksObj });
  }

  function addTask(title: string, todolistId: string) {
    let newTask = { id: v1(), title: title, isDone: false };
    let tasks = tasksObj[todolistId];
    let newTasks = [newTask, ...tasks]
    tasksObj[todolistId] = newTasks;
    setTasks({ ...tasksObj })
  }

  function changeStatus(taskId: string, isDone: boolean, todolistId: string) {
    let tasks = tasksObj[todolistId];
    let task = tasks.find(t => t.id === taskId);
    if (task) {
      task.isDone = isDone;
      setTasks({ ...tasksObj });
    }
  }
  function changeTaskTitle(taskId: string, newTitle: string, todolistId: string) {
    let tasks = tasksObj[todolistId];
    let task = tasks.find(t => t.id === taskId);
    if (task) {
      task.title = newTitle;
      setTasks({ ...tasksObj });
    }
  }

  
  function changeFilter(value: FilterValuesType, todolistId: string) {
    let todolist = todolists.find(tl => tl.id === todolistId);
    if (todolist) {
      todolist.filter = value;
      setTodolists([...todolists])
    }
  }


  let todolistId1 = v1();
  let todolistId2 = v1();

  let [todolists, setTodolists] = useState<Array<TodolistType>>([
    { id: todolistId1, title: "What to learn", filter: "all" },
    { id: todolistId2, title: "What to bue", filter: "all" },
  ])

  let removeTodolist = (todolistId: string) => {
    let filteredTodolist = todolists.filter(tl => tl.id !== todolistId)
    setTodolists(filteredTodolist);
    delete tasksObj[todolistId];
    setTasks({ ...tasksObj })
  }

  function changeTodoListTitle(id: string, newTitle: string) {
    const todolist = todolists.find(tl => tl.id === id);
    if(todolist) {
      todolist.title = newTitle;
      setTodolists([...todolists])
    }
  }


  let [tasksObj, setTasks] = useState<TasksStateType>({
    [todolistId1]: [
      { id: v1(), title: "CSS", isDone: true },
      { id: v1(), title: "JS", isDone: true },
      { id: v1(), title: "React", isDone: true },
      { id: v1(), title: "Redux", isDone: false },
      { id: v1(), title: "CSS", isDone: true },
      { id: v1(), title: "JS", isDone: true },
    ],
    [todolistId2]: [
      { id: v1(), title: "toyota", isDone: false },
      { id: v1(), title: "House", isDone: true },
    ],
  });

  function addTodolist(title: string) {
    let todolist: TodolistType = {
      id: v1(),
      filter: 'all',
      title: title,
    }

    setTodolists([todolist, ...todolists]);
    setTasks({
      ...tasksObj,
      [todolist.id]: []
    })
  }

  return (
    <div className="App">

      <AddItemForm addItem={addTodolist} />

      {
        todolists.map((tl) => {
          let tasksForTodoList = tasksObj[tl.id];

          if (tl.filter === "completed") {
            tasksForTodoList = tasksForTodoList.filter(t => t.isDone === true);
          }
          if (tl.filter === "active") {
            tasksForTodoList = tasksForTodoList.filter(t => t.isDone === false);
          }

          return <TodoList
            key={tl.id}
            id={tl.id}
            title={tl.title}
            tasks={tasksForTodoList}
            removeTask={removeTask}
            changeFilter={changeFilter}
            addTask={addTask}
            changeTaskStatus={changeStatus}
            changeTaskTitle={changeTaskTitle}
            filter={tl.filter}
            removeTodolist={removeTodolist}
            changeTodoListTitle={changeTodoListTitle}
          />
        })

      }
    </div>
  );
}

export default App;
