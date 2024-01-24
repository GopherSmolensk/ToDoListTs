
import { todolistsReducer, RemoveTodoListAC, 
    AddTodoListAC, ChangeTodolistTitleAC, ChangeTodolistFilterAC } from './todolists-reducer';
import { v1 } from "uuid";
import { FilterValuesType, TodolistType } from '../../App';



test('correct todolist should be removed', () => {
    // Стартовые дынные
    let todolistId1 = v1();
    let todolistId2 = v1();

    const startState: Array<TodolistType> = [
        { id: todolistId1, title: "What to learn", filter: "all" },
        { id: todolistId2, title: "What to bue", filter: "all" },
    ]
    // какое то действие с этими данными
    const endState = todolistsReducer(startState, RemoveTodoListAC(todolistId1))
    // что должно быть на выходе
    expect(endState.length).toBe(1);
    expect(endState[0].id).toBe(todolistId2)
});

test('correct todolist should be added', () => {
    // Стартовые дынные
    let todolistId1 = v1();
    let todolistId2 = v1();

    let newTodolistTitle = "New Todolist";

    const startState: Array<TodolistType> = [
        { id: todolistId1, title: "What to learn", filter: "all" },
        { id: todolistId2, title: "What to bue", filter: "all" },
    ]
    // какое то действие с этими данными
    const endState = todolistsReducer(startState, AddTodoListAC(newTodolistTitle))
    // что должно быть на выходе
    expect(endState.length).toBe(3);
    expect(endState[2].title).toBe(newTodolistTitle);
    expect(endState[2].filter).toBe("all");
});

test('correct todolist should change its name', () => {
    // Стартовые дынные
    let todolistId1 = v1();
    let todolistId2 = v1();

    let newTodolistTitle = "New Todolist";

    const startState: Array<TodolistType> = [
        { id: todolistId1, title: "What to learn", filter: "all" },
        { id: todolistId2, title: "What to bue", filter: "all" },
    ]
    // какое то действие с этими данными
    // const action =  {
    //     type: 'CHANGE-TODOLIST-TITLE' as const,
    //     id: todolistId2,
    //     title: newTodolistTitle
    // };

    const endState = todolistsReducer(startState, 
        ChangeTodolistTitleAC(todolistId2, newTodolistTitle));

    // что должно быть на выходе
    
    expect(endState[0].title).toBe("What to learn");
    expect(endState[1].title).toBe(newTodolistTitle);
});

test('correct filter of todolist should be change', () => {
    // Стартовые дынные
    let todolistId1 = v1();
    let todolistId2 = v1();

    let newFilter: FilterValuesType = "completed";

    const startState: Array<TodolistType> = [
        { id: todolistId1, title: "What to learn", filter: "all" },
        { id: todolistId2, title: "What to bue", filter: "all" },
    ]
    // какое то действие с этими данными
    const action =  ChangeTodolistFilterAC(todolistId2, newFilter)

    const endState = todolistsReducer(startState, action);

    // что должно быть на выходе
    
    expect(endState[0].filter).toBe("all");
    expect(endState[1].filter).toBe(newFilter);
});