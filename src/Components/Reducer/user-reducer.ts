// Типизация объектов входящих в Reducer

// StateType это объект на основании которого будет обрабатываться action 
// Только по таким типам даным
type StateType = {
    age: number
    childrenCount: number
    name: string
}
// ActionType объект который имеет тип строка и ключ и значение
type ActionType = {
    type: string
    [key: string]: any
}

// Функция которая принимает наш стэйт и в зависимости от условия(action)
//  как его преобразовывать или что с ним делать.
// "action" это объект
// аргументы должны быть однозначно протипизированы
export const userReducer = (state: any, action: any) => {

    // Переключатель (switch) в зависимости от случая(case) выбирает на что ему перключиться
    // Он принимает action.type и в зависимости от объекта action перелючает эти самые случаи(case)
    switch (action.type) {
        // случай первый
        case "one step":
        // случай два
        case "two step":
        // обработчик событий если по условию не выпал ни один из результатов
        default:
            throw new Error("Что то пошло не так")
    }
}