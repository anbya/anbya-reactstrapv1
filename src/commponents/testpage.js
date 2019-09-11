import React from 'react';
import imagesCard from '../assets/images/vintage-eyeglasses.png';
import { Button, CardImg, Form, FormGroup, Label, Input} from 'reactstrap';
import Modal1 from "./Modal1";

class Pagestate extends React.Component {
    constructor() {
        super();
        this.state = {
            keyapaaja: true
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
    minElement =()=>{
        this.setState(prevState => ({
            keyapaaja: prevState.keyapaaja = false
        }))
    }
    plusElement = () => {
        this.setState(prevState => ({
            keyapaaja: prevState.keyapaaja = true
        }))
    }

    render(){
        this.CekUser()
        return(
            <div className="container-fluid" style={{height:"100vh",width:"100vw",backgroundColor:"#efefef",paddingTop:"5vh"}}>
                <div className="row justify-content-center">
                    <div className=" col-10 col-sm-10 col-md-4 col-lg-4 col-xl-4">
                        <div className="card">
                            <div className="card-header">
                                <CardImg src={imagesCard} alt="Card image cap" style={{width:"50%",marginLeft:"25%"}} />
                            </div>
                            <div className="card-body">
                                <form>
                                    
                                </form>
                                <Form>
                                    <FormGroup>
                                    <Label for="exampleEmail">Email</Label>
                                    <Input type="email" name="email" id="exampleEmail" autoFocus="True" placeholder="Enter Your Email" />
                                    </FormGroup>
                                    <FormGroup>
                                    <Label for="examplePassword">Password</Label>
                                    <Input type="password" name="password" id="examplePassword" placeholder="Input Password" />
                                    </FormGroup>
                                    <Button color="primary" block onClick={this.CekUser}>Login</Button>
                                </Form>
                            </div>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-12">
                                        <Modal1 />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <Row>
                    <Col xs={{ size: 6, offset: 3 }}>
                        <table>
                            <tr>
                                <td><button class="btn btn-primary" onClick={this.minElement}><i class="fa fa-minus" aria-hidden="true"></i></button></td>
                                <td><h1 style={{paddingLeft:"1em",paddingRight:"1em"}}>{ this.state.keyapaaja ? 'tampil' : 'tidak'}</h1></td>
                                <td><button class="btn btn-primary" onClick={this.plusElement}><i class="fa fa-plus" aria-hidden="true"></i></button></td>
                            </tr>
                        </table>
                    </Col>
                </Row> */}
            </div>
        )
    }
}

export default Pagestate