
import { TasksStateType } from "../../App";


export type RemoveTaskActionType = {
    type: 'REMOVE-TASK',
    todolistId: string,
    taskId: string
}

export type Action2Type = {
    type: '2',
    title: string
}

export type ActionsType = RemoveTaskActionType | Action2Type

export const tasksReducer = (state: TasksStateType, action: ActionsType): TasksStateType => {
    switch (action.type) {
        case 'REMOVE-TASK': {
            const  stateCopy = {...state};
            // Меняем тудулисты котрые лежат в стэйте через инструкцию action 
            const tasks = state[action.todolistId];
            
            const filteredTasks = tasks.filter(t => t.id !== action.taskId);
            stateCopy[action.todolistId] = filteredTasks;
            return stateCopy
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
