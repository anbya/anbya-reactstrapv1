import React from 'react';
import { Button, Form, FormGroup, Label, Input} from 'reactstrap';
import Modal1 from "./Modal1.js";

class Signinform extends React.Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password:''
        };
    }

    CekUser =()=>{
        let userInfo  = localStorage.getItem("userInfo");
        if(userInfo === undefined || userInfo === null){
            alert("Data user kosong");
        }
        else{
            alert("Data user sudah di set");
        }
    }
    handleChange = event => {
        this.setState({
          [event.target.name]: event.target.value
        })
        console.log(event.target.value)
      }
    
    handleSubmit = event => {
        event.preventDefault()
        alert(`Name: ${this.state.email} dan Password: ${this.state.password}`)
    }
    render(){
        return(
            <Form onSubmit={this.handleSubmit}>
                <FormGroup>
                <Label for="exampleEmail">Email</Label>
                <Input
                type="email"
                name="email"
                id="exampleEmail"
                autoFocus="True"
                value={this.state.email}
                placeholder="Enter Your Email"
                onChange={this.handleChange} required/>
                </FormGroup>
                <FormGroup>
                <Label for="examplePassword">Password</Label>
                <Input
                type="password"
                name="password"
                id="examplePassword"
                value={this.state.password}
                onChange={this.handleChange}
                placeholder="Input Password" required/>
                </FormGroup>
                <Button color="primary" block onClick={this.CekUser}>Login</Button>
            </Form>
        )
    }
}

export default Signinform