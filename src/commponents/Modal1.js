import React from 'react';
import { Modal, ModalHeader, ModalBody} from 'reactstrap';
import Signupform from "./Signupform.js";

class Modal1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      header:''
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  render() {
    return (
      <div>
        {/* <Button color="primary" block onClick={this.toggle}>Open Modal</Button> */}
        <a href="#" block="true" onClick={this.toggle}>Wanna create an account ?</a>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Sign Up Form</ModalHeader>
          <ModalBody>
            <Signupform modalClose = {this.toggle} />
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default Modal1;