import { createStore } from "redux";
import todos from "./Reducers/todos"


const store = createStore(todos);

export default store;
