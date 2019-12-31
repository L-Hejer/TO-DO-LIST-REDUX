import { ADD_TODO, SET_INPUT, DELETE, COMPLETE, EDIT } from "../actionTypes";

const initialState = {
  input: "",
  tasks: []
};

const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return { ...state, tasks: state.tasks.concat(action.payload), input: "" };

    case SET_INPUT:
      return { ...state, input: action.payload };

    case DELETE:
      return {
        ...state,
        tasks: state.tasks.filter((el, i) => el.id !== action.payload)
      };

    case COMPLETE:
      return {
        ...state,
        tasks: state.tasks.map((el, i) =>
          el.id === action.payload ? { ...el, complete: !el.complete } : el
        )
      };

    case EDIT:
      return {
        ...state,
        tasks: state.tasks.map((el, i) =>
          el.id === action.payload.id
            ? { ...el, text: action.payload.text, complete: false }
            : el
        ),
        input: ""
      };

    default:
      return state;
  }
};

export default todos;
