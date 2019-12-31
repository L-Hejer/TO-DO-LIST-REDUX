import React from "react";
import { connect } from "react-redux";
import {Delete,Complete,Edit} from "../Redux/actions";
import ModalForm from "./Modal"

const List = ({Task, handelComplete = () => {}, handelDelete = () => {}}) =>{
    return(<li>
        <button className='List-Btn' onClick={() => handelComplete(Task.id)}>{Task.complete ? "Undo" : "Complete"}</button>
        <ModalForm Task={Task}/>
        <button className='List-Btn' onClick={() => handelDelete(Task.id)}>Delete</button>
        <p style={{ textDecoration: Task.complete ? "line-through" : "none" }}>{Task.text}</p>
    </li>
    )}
const mapStateToProps = () => {
    return {};
  };
  const mapDispatchToProps = dispatch => {
    return {
      handelDelete: payload => dispatch(Delete(payload)),
      handelComplete: payload => dispatch(Complete(payload)),
      handleEdit: payload => dispatch(Edit(payload))
    };
  };
  const ListContainer = connect(mapStateToProps, mapDispatchToProps)(List);
  export default ListContainer;