import React from 'react';
import {Collapse, Well} from 'react-bootstrap';
import {Link} from 'react-router';

import {Carousel} from "react-bootstrap";

const patient = require('../images/patient.jpg');
const payer = require('../images/payer.jpg');
const provider = require('../images/provider.jpg');
const c1=require('../images/c1.jpg');
const c2=require('../images/c2.jpg');
const c3=require('../images/c3.png');

export class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            providerOpen: false,
            paitentOpen: false,
            payerOpen: false
        }
    }

    render() {
        return (
            <div className="home">
           {/*     <div className="jumbotron jumbotron-fluid">
                    <div className="container text-center">
                        <h1 className="display-1"> Welcome to TabnerHealth</h1>
                        <p className="lead">Our mission is to provide data to healthCare providers</p>
                    </div>
                </div>*/}
                <Carousel>
                    <Carousel.Item>

                        <img width={1400} height={600} alt="900x500" src={c1}/>
                        <Carousel.Caption>
                            <h3>caption</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img width={1400} height={600} alt="900x500" src={c2}/>
                        <Carousel.Caption>
                            <h3>caption</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img width={1400} height={600} alt="900x500" src={c3}/>
                        <Carousel.Caption>
                            <h3>caption</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                <div className="container">
                    <div className="row imagegrid">
                        <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">

                            <button onClick={() => this.setState({providerOpen: !this.state.providerOpen})}>
                                <span><b>Provider Login</b></span><br/>
                                <img src={provider}
                                     width="280px"
                                     height="250px"/>
                            </button>

                            <Collapse in={this.state.providerOpen}>
                                <div className="collapse_data">

                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                    Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                                    unknown printer took a galley of type and scrambled it to make a type specimen
                                    book.

                                    Ipsum<br/>
                                    <button><Link to="/">Provider Login</Link></button>

                                </div>
                            </Collapse>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                            <button onClick={() => this.setState({paitentOpen: !this.state.paitentOpen})}>
                                <span><b>Patient Login</b></span><br/>
                                <img src={patient}
                                     width="280px"
                                     height="250px"/>
                            </button>

                            <Collapse in={this.state.paitentOpen}>
                                <div className="collapse_data">

                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                    Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                                    unknown printer took a galley of type and scrambled it to make a type specimen
                                    book.
                                    <br/>
                                    <button><Link to="">Patient Login</Link></button>

                                </div>
                            </Collapse>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                            <button onClick={() => this.setState({payerOpen: !this.state.payerOpen})}>
                                <span><b>Payer Login</b></span><br/>
                                <img src={payer}
                                     width="280px"
                                     height="250px"/>
                            </button>

                            <Collapse in={this.state.payerOpen}>
                                <div className="collapse_data">

                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                    Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                                    unknown printer took a galley of type and scrambled it to make a type specimen
                                    book.<br/>
                                    <button><Link to="/login">Payer Login</Link></button>
                                </div>
                            </Collapse>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}