import { useReducer} from 'react';
import { TodoList, TaskType } from './Components/TodoList';
import { AddItemForm } from './Components/AddItemForm';
import './App.css';
import { v1 } from 'uuid';

// Библиотека Material UI
import { AppBar, Button, Container, Grid, IconButton, Paper, Toolbar, Typography } from '@mui/material';
import { Menu } from '@mui/icons-material';
import { addTodoListAC, changeTodolistFilterAC, changeTodolistTitleAC, removeTodoListAC, todolistsReducer } from './Components/Reducer/todolists-reducer';
import { addTaskAC, removeTaskAC, tasksReducer, changeTaskStatusAC, changeTaskTitleAC } from './Components/Reducer/tasks-reducer';

export type FilterValuesType = "all" | "active" | "completed";

export type TodolistType = {
  id: string
  title: string
  filter: FilterValuesType
}

export type TasksStateType = {
  [key: string]: Array<TaskType>
}

function AppWithReducers() {

  let todolistId1 = v1();
  let todolistId2 = v1();

  let [todolists, dispatchToTodolistsReducer] = useReducer(todolistsReducer, [
    { id: todolistId1, title: "What to learn", filter: "all" },
    { id: todolistId2, title: "What to bue", filter: "all" },
  ])

  let [tasksObj, dispatchToTasksReducer] = useReducer(tasksReducer, {
    [todolistId1]: [
      { id: v1(), title: "CSS", isDone: true },
      { id: v1(), title: "JS", isDone: true },
    ],
    [todolistId2]: [
      { id: v1(), title: "toyota", isDone: false },
      { id: v1(), title: "House", isDone: true },
    ],
  });

  function removeTask(id: string, todolistId: string) {
    dispatchToTasksReducer(removeTaskAC(id, todolistId));
  }

  function addTask(title: string, todolistId: string) {
    dispatchToTasksReducer(addTaskAC(title, todolistId))
  }

  function changeStatus(taskId: string, isDone: boolean, todolistId: string) {
    dispatchToTasksReducer(changeTaskStatusAC(taskId, isDone, todolistId));
  }

  function changeTaskTitle(taskId: string, newTitle: string, todolistId: string) {
    dispatchToTasksReducer(changeTaskTitleAC(taskId, newTitle, todolistId));
  }

  // let [filter, setFilter] = useState<FilterValuesType>("all");

  function changeFilter(value: FilterValuesType, todolistId: string) {
    const action = changeTodolistFilterAC(value, todolistId);
    dispatchToTodolistsReducer(action)
  }

  let removeTodolist = (id: string) => {
    const action = removeTodoListAC(id);
    dispatchToTasksReducer(action);
    dispatchToTodolistsReducer(action);
  }

  function changeTodoListTitle(id: string, newTitle: string) {
    const action = changeTodolistTitleAC(id, newTitle);
    dispatchToTodolistsReducer(action);
  }

  function addTodolist(title: string) {
    const action = addTodoListAC(title);
    dispatchToTasksReducer(action);
    dispatchToTodolistsReducer(action);
  }

  return (
    <div className="App">

      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <Menu />
          </IconButton>
          <Typography variant="h6">
            News
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>

// ui style
      <Container fixed>

        <Grid container style={{ padding: "10px" }}>
          <AddItemForm addItem={addTodolist} />
        </Grid>
        <Grid container spacing={5}>
          {
            todolists.map((tl) => {
              let tasksForTodoList = tasksObj[tl.id];

              if (tl.filter === "completed") {
                tasksForTodoList = tasksForTodoList.filter(t => t.isDone === true);
              }
              if (tl.filter === "active") {
                tasksForTodoList = tasksForTodoList.filter(t => t.isDone === false);
              }


              return <Grid item>
                <Paper style={{ padding: "10px" }}>
                  <TodoList
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
                </Paper>
              </Grid>
            })
          }
        </Grid>
      </Container>
    </div>
  );
}

export default AppWithReducers;
