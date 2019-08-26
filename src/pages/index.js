import React, {Component} from 'react';
import { Link } from "gatsby"
import Layout from "../components/layout"
import 'bootstrap/dist/css/bootstrap.css';
import { Card, Button, Col, Row, Jumbotron, Container, Image } from 'react-bootstrap';
import $ from 'jquery'
import {Fade, Slide} from 'react-reveal';

import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';


class Index extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            width: 0, 
            height: 0, 
            url: ""
        };
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
        // this.isInViewport = this.isInViewport.bind(this);
        // this.isScrolledIntoView = this.isScrolledIntoView.bind(this);
        // this.handleScroll = this.handleScroll.bind(this);
    }
    
    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
        // window.addEventListener('scroll', this.handleScroll);

        document.body.classList.add('js-loading');
        // window.addEventListener("load", () => {});
        setTimeout(function(){
            document.body.classList.remove('js-loading')
        }, 700);
    }
    
    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
        // window.removeEventListener('scroll', this.handleScroll);
    }
    
    updateWindowDimensions() {
        let modifiedHeight = window.innerHeight;
        this.setState({ 
            width: window.innerWidth, 
            height: modifiedHeight,
            url: "url(https://source.unsplash.com/y9np19Fprmo/" + window.innerWidth + "x" + modifiedHeight +")"});
    }

  render() {
    return (
        <Layout>
            <Row className="jumbotop"  style={{paddingBottom: '', backgroundColor: `darkseagreen`}}>
                <Col className="p-0">
                    <Jumbotron className="d-flex align-items-center" fluid style={{height: this.state.height, backgroundImage: this.state.url,
                                                backgroundRepeat: `no-repeat`, backgroundSize: `cover`, backgroundColor: `gray`, margin: `0px`}}>
                        <Container  className="" style={{}}>
                            <Fade right>
                                <h1 className="display-1" style={{ color: `white`}}>Moebius Solutions Inc.</h1>
                            </Fade>
                            <Fade left>
                                <p className="h5" style={{fontFamily: 'Montserrat, sans-serif', color: `white`}}>
                                Experts in Developing Software Solutions for Military and Commercial Systems
                                </p>
                            </Fade>
                        </Container>
                    </Jumbotron>
                </Col>
            </Row>

            {/* <Row style={{backgroundColor: `#9da494`}}><Col></Col></Row> */}
            
            <Row style={{paddingTop: '1px', backgroundColor: `#9da494`}}><Col>
            <ScrollAnimation animateIn="has-animation animate-in" >

            <Row className="d-flex justify-content-md-center" style={{textAlign: `center`, paddingTop: '6em', paddingBottom: '8em', backgroundColor: `#9da494`}}> 
                <Col md={6}>
                    <Card style={{width: '100%', textAlign: "center", border: "none", backgroundColor: `#9da494`}}>
                        <Card.Body>
                                <Card.Title className="test display-4">Core Text</Card.Title>
                                <Card.Subtitle className="mt-4 mb-2 text-muted">San Diego Software Company</Card.Subtitle>

                                <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content. Some quick example text to build on the card title and make up the bulk of
                                </Card.Text>
                            
                            
                        </Card.Body>
                    </Card>

                    <Row className='align-items-top' style={{paddingTop: `2em`, backgroundColor: `#9da494`}}>
                            <Col className="d-flex justify-content-center" >
                                <Card style={{ border: "none", backgroundColor: `#9da494`}}>
                                    <Card.Body>
                                        <Image className="p-3" src="https://source.unsplash.com/random/80x80" roundedCircle/>
                                        <Card.Title as="h4">Open Source</Card.Title>
                                        <Card.Text>
                                        Some quick example text to build on the card title
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>

                            <Col className="d-flex justify-content-center">
                                <Card style={{ border: "none", backgroundColor: `#9da494`}}>
                                    <Card.Body>
                                        <Image className="p-3" src="https://source.unsplash.com/random/80x81" roundedCircle/>
                                        <Card.Title as="h4">Technical Excellence</Card.Title>
                                        <Card.Text>
                                        Some quick example text to build on the card title
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>

                            <Col className="d-flex justify-content-center">
                                <Card style={{border: "none", backgroundColor: `#9da494` }}>
                                    <Card.Body>
                                        <Image className="p-3" src="https://source.unsplash.com/random/79x80" roundedCircle/>
                                        <Card.Title as="h4">Focused Solutions</Card.Title>
                                        <Card.Text>
                                        Some quick example text to build on the card title
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                    </Row>
                </Col>
            </Row>
             
            </ScrollAnimation>
            </Col></Row>

            <div class="row align-items-top justify-content-md-center" style={{textAlign: `center`, paddingTop: `4em`}}>
                <div class="col-sm-6">

                    <Row className="" style={{marginTop: `4em` }}>
                        <Col>
                            <Card className="text-left">
                                <Card.Header as="h2">Projects</Card.Header>
                                <Card.Body>
                                    <Card.Title>Special title treatment</Card.Title>
                                    <Card.Text>
                                    With supporting text below as a natural lead-in to additional content.
                                    </Card.Text>

                                    <Fade bottom> 
                                        <Row className="justify-content-md-center" style={{ marginTop: '3rem' }}>
                                            <Col className="d-flex justify-content-center">
                                                <Card className="bg-dark text-white">
                                                    <Card.Img src="https://source.unsplash.com/random/1104x270" alt="Card image" />
                                                    <Card.ImgOverlay style={{textAlign: `center`}}>
                                                        <Card.Title><h4>Card title</h4></Card.Title>
                                                        <Card.Text>
                                                        This is a wider card with supporting text below as a natural lead-in to
                                                        additional content. This content is a little bit longer.
                                                        </Card.Text>
                                                        <Card.Text>Last updated 3 mins ago</Card.Text>
                                                    </Card.ImgOverlay>
                                                </Card>
                                            </Col>
                                        </Row>
                                    
                                        <Row style={{ marginTop: '3rem' }}>
                                            <Col className="d-flex justify-content-center">
                                                <Card className="bg-dark text-white">
                                                    <Card.Img src="https://source.unsplash.com/random/1104x269" alt="Card image" />
                                                    <Card.ImgOverlay style={{textAlign: `center`}}>
                                                        <Card.Title><h4>Card title</h4></Card.Title>
                                                        <Card.Text>
                                                        This is a wider card with supporting text below as a natural lead-in to
                                                        additional content. This content is a little bit longer.
                                                        </Card.Text>
                                                        <Card.Text>Last updated 3 mins ago</Card.Text>
                                                    </Card.ImgOverlay>
                                                </Card>
                                            </Col>
                                        </Row>

                                        <Row style={{ marginTop: '3rem' }}>
                                            <Col className="d-flex justify-content-center">
                                                <Card className="bg-dark text-white">
                                                    <Card.Img src="https://source.unsplash.com/random/1104x271" alt="Card image" />
                                                    <Card.ImgOverlay style={{textAlign: `center`}}>
                                                        <Card.Title><h4>Card title</h4></Card.Title>
                                                        <Card.Text>
                                                        This is a wider card with supporting text below as a natural lead-in to
                                                        additional content. This content is a little bit longer.
                                                        </Card.Text>
                                                        <Card.Text>Last updated 3 mins ago</Card.Text>
                                                    </Card.ImgOverlay>
                                                </Card>
                                            </Col>
                                        </Row>

                                    </Fade> 

                                </Card.Body>
                            </Card>               
                        </Col>
                    </Row>
                </div>
            </div>

            <div class="row align-items-top justify-content-md-center" style={{textAlign: `center`, minHeight: `300px`, paddingTop: `10em`, paddingBottom: `10em`}}>
                <div class="col-sm-6">
                    <h3>Technologies</h3>

                    <div style={{textAlign: `center`, marginTop: `2em`}}>
                        <Row className="">
                            <Col>
                                <Image src="https://source.unsplash.com/random/143x141" roundedCircle/>
                            </Col>
                            <Col>
                                <Image src="https://source.unsplash.com/random/143x142" roundedCircle/>
                            </Col>
                            <Col>
                                <Image src="https://source.unsplash.com/random/143x143" roundedCircle/>
                            </Col>
                            <Col>
                                <Image src="https://source.unsplash.com/random/143x144" roundedCircle/>
                            </Col>
                        </Row>
                    

                        <Row className="" style={{ marginTop: '2rem' }}>
                            <Col>
                                <Image src="https://source.unsplash.com/random/141x143" roundedCircle/>
                            </Col>
                            <Col>
                                <Image src="https://source.unsplash.com/random/142x143" roundedCircle/>
                            </Col>
                            <Col>
                                <Image src="https://source.unsplash.com/random/143x145" roundedCircle/>
                            </Col>
                            <Col>
                                <Image src="https://source.unsplash.com/random/144x143" roundedCircle/>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>

        </Layout>
    )}

}

export default Index
