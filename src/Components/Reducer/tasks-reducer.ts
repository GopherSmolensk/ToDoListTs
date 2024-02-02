

import { v1 } from "uuid";
import { TasksStateType } from "../../App";

// Типизация объектов входящих в Reducer

// StateType это объект на основании которого будет обрабатываться action 
// Только по таким типам даным
export type RemoveTaskActionType = {
    type: 'REMOVE-TASK'
    todolistId: string
    taskId: string
}
// ActionType объект который имеет тип строка и ключ и значение
export type AddTaskActionType = {
    type: 'ADD-TASK'
    todolistId: string
    title: string
}
export type ChangeTaskStatusActionType = {
    type: 'CHANGE-TASK-STATUS'
    taskId: string
    todolistId: string
    isDone: boolean
}


export type ActionsType = RemoveTaskActionType | AddTaskActionType | ChangeTaskStatusActionType;

// Функция которая принимает наш стэйт и в зависимости от условия(action)
//  как его преобразовывать или что с ним делать.
// "action" это объект
// аргументы должны быть однозначно протипизированы
export const tasksReducer = (state: TasksStateType, action: ActionsType): TasksStateType => {
    switch (action.type) {
        case 'REMOVE-TASK': {
            const stateCopy = { ...state };
            // Меняем тудулисты котрые лежат в стэйте через инструкцию action 
            const tasks = state[action.todolistId];

            const filteredTasks = tasks.filter(t => t.id !== action.taskId);
            stateCopy[action.todolistId] = filteredTasks;
            return stateCopy
        }
        case 'ADD-TASK': {
            const stateCopy = { ...state };
            const tasks = stateCopy[action.todolistId];
            const newTask = { id: v1(), title: action.title, isDone: false }
            const newTasks = [newTask, ...tasks]
            stateCopy[action.todolistId] = newTasks;
            return stateCopy
        }
        default:
            throw new Error("I don't understand this action type")
    }
}
// удаление
export const removeTaskAC = (taskId: string, todolistId: string): RemoveTaskActionType => {
    return { type: 'REMOVE-TASK', taskId: taskId, todolistId: todolistId, }
}
// добавление
export const addTaskAC = (title: string, todolistId: string): AddTaskActionType => {
    return { type: 'ADD-TASK', title, todolistId }
}
export const changeTaskStatusAC = (taskId: string,
    isDone: boolean,
    todolistId: string): ChangeTaskStatusActionType => {
    return { type: 'CHANGE-TASK-STATUS', taskId, isDone, todolistId }
}
