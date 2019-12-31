import React from "react";
import { connect } from "react-redux";
import List from "./Todo";
import {addTodo,setInput} from "../Redux/actions";


function TodoList ({text = "" ,tasks = [],  handleAddTodo = () => {},  updateInput = () => {}}){
let id = tasks.length +1

return (
        <div className="Container">
        <div className="Input-Container">
          <div className="add-element">
            <h1>TO-DO APP!</h1>
            <h4>Add New To-Do</h4> 
    <div>
        <input
        type="text"
        id="myInput"
        placeholder="Enter New Task..."
         onChange={e => updateInput(e.target.value)}
         value={text}
        />
        <button className="add-Btn" onClick={() => handleAddTodo({id, text, complete:false})}>Add</button>
        </div>
        </div>
</div>

            <div>
          <h2> Let's get some work done!</h2>
         </div>

        <div><ul>
{tasks.map((el,i) => (<List Task={el} key={i} />))}
       </ul></div>

</div>




);

};



const mapStateToProps = state => {

    return {
      tasks: state.tasks,
      text: state.input
    };
  };
  const mapDispatchToProps = dispatch => {
    return {
        handleAddTodo: payload => dispatch(addTodo(payload)), // Task:obj
        updateInput: payload => dispatch(setInput(payload)) // text
    };
  };
  const GroupeoflistContainer = connect(mapStateToProps, mapDispatchToProps)(TodoList);
  export default GroupeoflistContainer;