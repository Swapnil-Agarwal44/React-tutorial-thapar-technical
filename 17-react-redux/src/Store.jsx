// react redux is a tool that is used to manage the state on the global level of the application, just like the context api. However, it provides much more scalability and performance optimizations, that's why it is used for larger applications. 

//we have mainly three components in this - redux store, actions, reducer functions

// redux store is the central place that holds the applications's state. 
// actions are the plain javascript objects that tells the reducer what has happened. It must have a type field and it has an extra paramater called payload, which carries extra data needed to update the state. 
// a reducer functions takes state and an action, and used the switch statement to decide how to update the state based on the conditions.  

// few important things to remember while using the reducer functions is to always return a new state, and make sure that the state is not directly mutated, instead use the spread operator to store the old state, and then pass the changes as it has been done in the functions.



import {createStore} from 'redux'

const ADD_TASK = "task/add";
const DELETE_TASK = "task/delete";

const initialState = {
    task: [],
};

const taskReducer = (state = initialState, action) => {
    switch (action.type){
        case ADD_TASK: 
        return {
            ...state, 
            task: [...state.task, action.payload],
        }

        case DELETE_TASK:
            const updatedTask = state.task.filter((cur, id) => id != action.payload);
            return {
                ...state, 
                task: updatedTask,
            }

        default: 
        return state;
    }
}

//creating the store with the help of createStore
export const store = createStore(taskReducer);

console.log("inital state", store.getState()); // this will get the current state in the store. 

// dispatcing the data into the store using the dispatch functions, that will have atleast one argument called type. 
store.dispatch({type: ADD_TASK, payload: "React-redux tutorial"})
store.dispatch({type: ADD_TASK, payload: "Learning react from thapa technical "})

store.dispatch({type: DELETE_TASK, payload: 1})


// action creacter functions are the functions that are used to create the dispatch actions for multiple data.

export const addTask = (data) =>{
    return {type: ADD_TASK, payload: data}
}

export const deleteTask = (data) =>{
    return {type: DELETE_TASK, payload: data}
}

store.dispatch(addTask("Using the action creater functions "))
store.dispatch(deleteTask(1))