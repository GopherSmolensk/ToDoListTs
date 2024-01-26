
import { v1 } from "uuid";
import { FilterValuesType, TodolistType } from "../../App";


// type ActionType = {
//     type: string
//     [key: string]: any
// }

export type RemoveTodolistActionType = {
    type: 'REMOVE-TODOLIST',
    id: string
}

export type AddTodolistActionType = {
    type: 'ADD-TODOLIST',
    title: string
}

export type ChangeTodolistTitleActionType = {
    type: 'CHANGE-TODOLIST-TITLE',
    id: string,
    title: string
}

export type ChangeTodolistFilterActionType = {
    type: 'CHANGE-TODOLIST-FILTER',
    id: string,
    filter: FilterValuesType
}

export type ActionsType = RemoveTodolistActionType | AddTodolistActionType
    | ChangeTodolistTitleActionType | ChangeTodolistFilterActionType


// Функция которая принимает наш стэйт и в зависимости от условия(action)
//  как его преобразовывать или что с ним делать.
// "action" это объект
// аргументы должны быть однозначно протипизированы
export const todolistsReducer = (state: Array<TodolistType>, action: ActionsType): Array<TodolistType> => {
    switch (action.type) {
        case 'REMOVE-TODOLIST': {
            return state.filter(itemTask => itemTask.id != action.id)
        }
        case 'ADD-TODOLIST': {
            return [...state, {
                // Мы вернули state, который протипизирован как TodolistType
                // id из библиотеки uuid
                id: v1(),
                // title из типа актион как строка
                title: action.title,
                // filter берём значение со старта из FilterValuesType "all" | "active" | "completed"
                filter: 'all'
            }]
        }
        case 'CHANGE-TODOLIST-TITLE': {
            const todolist = state.find(tl => tl.id === action.id);
            if (todolist) {
                todolist.title = action.title;
            }
            return [...state]
        }
        case 'CHANGE-TODOLIST-FILTER': {
            const todolist = state.find(tl => tl.id === action.id);
            if (todolist) {
                todolist.filter = action.filter;
            }
            return [...state]
        }
        default:
            throw new Error("I don't understand this action type")
    }
}

export const RemoveTodoListAC = (TodolistId: string): RemoveTodolistActionType => {
    return { type: 'REMOVE-TODOLIST', id: TodolistId }
}
export const AddTodoListAC = (title: string): AddTodolistActionType => {
    return { type: 'ADD-TODOLIST', title: title }
}
export const ChangeTodolistTitleAC = (id: string, title: string): ChangeTodolistTitleActionType => {
    return { type: 'CHANGE-TODOLIST-TITLE', title: title, id: id }
}
export const ChangeTodolistFilterAC = (id: string, filter: FilterValuesType): ChangeTodolistFilterActionType => {
    return { type: 'CHANGE-TODOLIST-FILTER', filter: filter, id: id }
}