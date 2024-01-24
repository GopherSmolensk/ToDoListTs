import { userReducer } from "./user-reducer";

test('user reducer should increment only age', () => {
    const startState = {age: 20, childrenCount: 2, name: 'Dmitriy'};

    const endState = userReducer(startState, {type: 'INCREMENT-AGE'})

    expect(endState.age).toBe(20);
    expect(endState.childrenCount).toBe(2);
});

test('user reducer should increment only childrenCount', () => {
    const startState = {age: 20, childrenCount: 2, name: 'Dmitriy'};

    const endState = userReducer(startState, {type: 'INCREMENT-CHILDREN-COUNT'});

    expect(endState.childrenCount).toBe(3);
    expect(endState.age).toBe(20)
    
});
//  user reduser should change name of user должен изменить имя пользлвателя
test('user reduser should change name of user', () => {
    const startState = {name: 'Dimitriy', age: 20, childrenCount: 2};
    const newName = 'Fedor';
    const endState = userReducer(startState, {type: 'CHANGE-NAME', newName: newName});

    expect(endState.name).toBe(newName);
});