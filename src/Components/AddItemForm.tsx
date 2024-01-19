
import { ChangeEvent, useState, KeyboardEvent } from 'react';

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
        setError("Title id required")
      }
    }
    
    return <div>
      <input value={newTaskTitle}
        onChange={onNewTitleChangeHandler}
        onKeyDown={onKeyDownHandler}
        className={error ? "error" : ""}
      />
      <button onClick={addTask}>+</button>
      {error && <div className='error-message'>{error}</div>}
    </div>
  }