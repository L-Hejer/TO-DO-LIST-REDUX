import React from 'react';
import Modal from 'react-modal';
import { connect } from "react-redux";
import {Edit,setInput} from "../Redux/actions";
 
const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};
 
class ModalForm extends React.Component {
  constructor() {
    super();
 
    this.state = {
      modalIsOpen: false
    };
 
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }
 
  openModal() {
    this.setState({modalIsOpen: true});
  };

  closeModal() {
    this.setState({modalIsOpen: false});
  };
 
  render() {
    return (
      <div>
        <button className='List-Btn' onClick={this.openModal}>Edit</button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >  
          <form>
            <input
            type="text"
            id="ModalInput"
            placeholder={this.props.Task.text}
            onChange={ (event)=> this.props.updateInput(event.target.value)}
            />
            <button className="Modal-Btn" onClick={this.closeModal}>close</button>
            <button className="Modal-Btn"
            onClick={ () =>  { this.props.handleEdit ({id:this.props.Task.id,text:this.props.text}) ;  this.closeModal()}}
            >Submit</button>
          </form>
        </Modal>
      </div>
    );
  }
}
 

const mapStateTProps = state =>{
    return {
      text:state.input
    }
  }
  const mapDispatchToProps = dispatch => {
    return {
      updateInput: payload => dispatch(setInput(payload)),
      handleEdit: payload => dispatch(Edit(payload))
    }
  }
  const  ModalContainer = connect(mapStateTProps,mapDispatchToProps) (ModalForm)
  export default ModalContainer