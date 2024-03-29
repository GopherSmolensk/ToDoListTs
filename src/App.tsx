// import { useState } from 'react';
// import { TodoList, TaskType } from './Components/TodoList';
// import { AddItemForm } from './Components/AddItemForm';
// import './App.css';
// import { v1 } from 'uuid';
export {};
// // Библиотека Material UI
// import { AppBar, Button, Container, Grid, IconButton, Paper, Toolbar, Typography } from '@mui/material';
// import { Menu } from '@mui/icons-material';

// export type FilterValuesType = "all" | "active" | "completed";

// export type TodolistType = {
//   id: string
//   title: string
//   filter: FilterValuesType
// }

// export type TasksStateType = {
//   [key: string]: Array<TaskType>
// }

// function App() {

//   let todolistId1 = v1();
//   let todolistId2 = v1();

//   let [todolists, setTodolists] = useState<Array<TodolistType>>([
//     { id: todolistId1, title: "What to learn", filter: "all" },
//     { id: todolistId2, title: "What to bue", filter: "all" },
//   ])

//   let [tasksObj, setTasks] = useState<TasksStateType>({
//     [todolistId1]: [
//       { id: v1(), title: "CSS", isDone: true },
//       { id: v1(), title: "JS", isDone: true },
//       { id: v1(), title: "React", isDone: false },
//     ],
//     [todolistId2]: [
//       { id: v1(), title: "toyota", isDone: false },
//       { id: v1(), title: "House", isDone: true },
//       { id: v1(), title: "Bike", isDone: false },
//     ],
//   });


//   function removeTask(id: string, todolistId: string) {
//     let tasks = tasksObj[todolistId];

//     let filteredTasks = tasks.filter(itemTask => (itemTask.id !== id));
//     tasksObj[todolistId] = filteredTasks;

//     setTasks({ ...tasksObj });
//   }

//   function addTask(title: string, todolistId: string) {
//     let newTask = { id: v1(), title: title, isDone: false };
//     let tasks = tasksObj[todolistId];
//     let newTasks = [newTask, ...tasks]
//     tasksObj[todolistId] = newTasks;
//     setTasks({ ...tasksObj })
//   }

//   function changeStatus(taskId: string, isDone: boolean, todolistId: string) {
//     let tasks = tasksObj[todolistId];
//     let task = tasks.find(t => t.id === taskId);
//     if (task) {
//       task.isDone = isDone;
//       setTasks({ ...tasksObj });
//     }
//   }

//   function changeTaskTitle(taskId: string, newTitle: string, todolistId: string) {
//     let tasks = tasksObj[todolistId];
//     let task = tasks.find(t => t.id === taskId);
//     if (task) {
//       task.title = newTitle;
//       setTasks({ ...tasksObj });
//     }
//   }


//   // let [filter, setFilter] = useState<FilterValuesType>("all");

//   function changeFilter(value: FilterValuesType, todolistId: string) {
//     let todolist = todolists.find(tl => tl.id === todolistId);
//     if (todolist) {
//       todolist.filter = value;
//       setTodolists([...todolists])
//     }
//   }

//   let removeTodolist = (todolistId: string) => {
//     let filteredTodolist = todolists.filter(tl => tl.id !== todolistId)
//     setTodolists(filteredTodolist);
//     delete tasksObj[todolistId];
//     setTasks({ ...tasksObj })
//   }

//   function changeTodoListTitle(id: string, newTitle: string) {
//     const todolist = todolists.find(tl => tl.id === id);
//     if (todolist) {
//       todolist.title = newTitle;
//       setTodolists([...todolists])
//     }
//   }

//   function addTodolist(title: string) {
//     let todolist: TodolistType = {
//       id: v1(),
//       filter: 'all',
//       title: title,
//     }

//     setTodolists([todolist, ...todolists]);
//     setTasks({
//       ...tasksObj,
//       [todolist.id]: []
//     })
//   }




//   return (
//     <div className="App">

//       <AppBar position="static">
//         <Toolbar>
//           <IconButton edge="start" color="inherit" aria-label="menu">
//             <Menu />
//           </IconButton>
//           <Typography variant="h6">
//             News
//           </Typography>
//           <Button color="inherit">Login</Button>
//         </Toolbar>
//       </AppBar>


//       <Container fixed>

//         <Grid container style={{ padding: "10px" }}>
//           <AddItemForm addItem={addTodolist} />
//         </Grid>
//         <Grid container spacing={5}>
//           {
//             todolists.map((tl) => {
//               let tasksForTodoList = tasksObj[tl.id];

//               if (tl.filter === "completed") {
//                 tasksForTodoList = tasksForTodoList.filter(t => t.isDone === true);
//               }
//               if (tl.filter === "active") {
//                 tasksForTodoList = tasksForTodoList.filter(t => t.isDone === false);
//               }


//               return <Grid item>
//                 <Paper style={{ padding: "10px" }}>
//                   <TodoList
//                     key={tl.id}
//                     id={tl.id}
//                     title={tl.title}
//                     tasks={tasksForTodoList}
//                     removeTask={removeTask}
//                     changeFilter={changeFilter}
//                     addTask={addTask}
//                     changeTaskStatus={changeStatus}
//                     changeTaskTitle={changeTaskTitle}
//                     filter={tl.filter}
//                     removeTodolist={removeTodolist}
//                     changeTodoListTitle={changeTodoListTitle}
//                   />
//                 </Paper>
//               </Grid>
//             })
//           }
//         </Grid>
//       </Container>
//     </div>
//   );
// }

// export default App;
