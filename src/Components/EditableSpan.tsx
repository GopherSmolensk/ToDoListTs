
import { ChangeEvent, useState } from "react"



// Библиотека Material UI
import { TextField } from "@mui/material";


type EditableSpanPropsType = {
    title: string
    onChange: (newValue: string) => void
}

// Проверка поведения состояния тудулистов 

export function EditableSpan(props: EditableSpanPropsType) {
    let [editMode, setEditMode] = useState(false);
    let [title, setTitle] = useState("");

    // Изменение элемента списка задач

    const activateEditMode = () => {
        setEditMode(true);
        setTitle(props.title)
    }
    const activateViewMode = () => {
        setEditMode(false);
        props.onChange(title);
    }
    const onChangeTitleHandler = (e: ChangeEvent<HTMLInputElement>) => setTitle(e.currentTarget.value)

    // При двойном клике активирует инпут для перезаписи конкретного элемента из списка

    return editMode
        ? <TextField value={title} onChange={onChangeTitleHandler} onBlur={activateViewMode} autoFocus />
        : <span onDoubleClick={activateEditMode}>{props.title}</span>
}