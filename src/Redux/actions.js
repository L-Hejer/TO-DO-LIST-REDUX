import {ADD_TODO,SET_INPUT,DELETE,COMPLETE,EDIT} from './actionTypes';


export const addTodo = (payload) => {
return {type: ADD_TODO, payload} 
 };

export const setInput =(payload) => {
    return {type:SET_INPUT, payload}
};

export const Delete =(payload) => {
    return {type:DELETE, payload}
};

export const Complete =(payload) => {
    return {type:COMPLETE, payload}
};

export const Edit =(payload) => {
    return {type:EDIT, payload}
};