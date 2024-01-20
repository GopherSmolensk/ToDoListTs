
import { ChangeEvent, useState, KeyboardEvent } from 'react';



import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import ControlPointIcon from '@mui/icons-material/ControlPoint';


// Форма добавления тудулиста

type AddItemPropsType = {
  addItem: (title: string) => void
}


export function AddItemForm(props: AddItemPropsType) {
  const [newTaskTitle, setNewTaskTitle] = useState("");
  const [error, setError] = useState<string | null>(null)

  const onNewTitleChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTaskTitle(e.currentTarget.value)
  }
  const onKeyDownHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    setError(null);
    if (e.key === 'Enter') {
      props.addItem(newTaskTitle);
      setNewTaskTitle("");
    }
  }
  const addTask = () => {
    if (newTaskTitle.trim() !== "") {
      props.addItem(newTaskTitle.trim());
      setNewTaskTitle("");
    } else {
      setError("Title is required")
    }
  }

  return <div>
    {/* <input value={newTaskTitle}
      onChange={onNewTitleChangeHandler}
      onKeyDown={onKeyDownHandler}
      className={error ? "error" : ""}
    /> */}

    <TextField
      value={newTaskTitle}
      onChange={onNewTitleChangeHandler}
      onKeyDown={onKeyDownHandler}
      variant={'outlined'}
      label={'Type value'}
      error={!!error}
      helperText={error}
    />

    <IconButton onClick={addTask} color={'primary'}>
      <ControlPointIcon />
    </IconButton>


  </div>

}