
import { TasksStateType } from "../../App";


export type RemoveTaskActionType = {
    type: 'REMOVE-TASK',
    todolistId: string
    taskId: string
}

export type Action2Type = {
    type: '2',
    title: string
}

export type ActionsType = RemoveTaskActionType | Action2Type

export const tasksReducer = (state: TasksStateType, action: ActionsType): TasksStateType => {
    switch (action.type) {
        case '1': {
            return {...state};
        }
        case '2': {
            return {...state}
        }
        default:
            throw new Error("I don't understand this action type")
    }
}

export const removeTaskAC = ( taskId: string, todolistId: string): RemoveTaskActionType => {
    return { type: 'REMOVE-TASK',taskId: taskId, todolistId: todolistId,  }
}
export const action2tAC = (title: string): Action2Type => {
    return { type: '2', title: title }
}
