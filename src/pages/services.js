import React, {Component} from 'react';
import { Link } from "gatsby"
import Layout from "../components/layout"
import 'bootstrap/dist/css/bootstrap.css';
import { Card, Button, Col, Row, Jumbotron, Container, Image } from 'react-bootstrap';

class Services extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            width: 0, 
            height: 0, 
            url: ""
        };
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }
    
    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }
    
    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }
    
    updateWindowDimensions() {
        let modifiedHeight = (window.innerHeight) * 0.7;
        this.setState({ 
            width: window.innerWidth, 
            height: modifiedHeight,
            url: "url(https://source.unsplash.com/5fNmWej4tAA/" + window.innerWidth + "x" + modifiedHeight +")"});
    }


  render() {
    return (
        <Layout>
            <Row className="" style={{paddingBottom: '3em', backgroundColor: `paleturquoise`}}>
                <Col className="p-0">
                    <Jumbotron fluid style={{height: this.state.height, backgroundImage: this.state.url,
                                                backgroundRepeat: `no-repeat`, backgroundSize: `cover`, backgroundColor: `paleturquoise`}}>
                        <Container style={{textAlign: 'center', paddingTop: '4em'}}>
                            <h1 className="display-2" style={{color: `black`}}>Services</h1>
                            <p className="h5" style={{color: `black`}}>
                            Use a super motivational quote about everything
                            </p>
                        </Container>
                    </Jumbotron>
                </Col>
            </Row>

            <Row className="d-flex justify-content-md-center" style={{backgroundColor: 'paleturquoise', paddingBottom: '3em'}}> 
                <Col className="">
                    <Card style={{backgroundColor: 'paleturquoise', width: '100%', textAlign: "center", border: "none"}}>
                    <Card.Body>
                        <Image className="mb-3" src="https://source.unsplash.com/random/100x100" roundedCircle/>
                        <Card.Title as="h1">Government Contracting</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                        <Card.Text>
                        </Card.Text>
                    </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row className="d-flex justify-content-md-center" style={{marginTop: '3em', marginBottom: '3em'}}> 
                <Col md={6} className="">

                    <Row style={{marginTop: '1em', marginBottom: '5em'}}>
                        <Col className="d-flex justify-content-md-center" md={3}>
                            {/* <Image className="mb-3" src="https://source.unsplash.com/random/150x400" rounded/> */}

                            <Card className="bg-dark text-white" style={{textAlign: "center"}}>
                                <Card.Img src="https://source.unsplash.com/random/170x400" alt="Card image" />
                                <Card.ImgOverlay>
                                    <Card.Title as='h1'>Prime</Card.Title>
                                    <Card.Text>
                                    </Card.Text>
                                </Card.ImgOverlay>
                            </Card>
                        </Col>

                        <Col>
                            <Row>
                                <Col>
                                    <Card style={{ textAlign: "left", border: "none"}}>
                                    <Card.Body>
                                        <Card.Title>Contract One</Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                                        <Card.Text>
                                                    Some quick example text to build on the card title and make up the bulk of
                                            the card's content. Some quick example text to build on the card title and make up the bulk of
                                            the card's content.Some quick example text to build on the card title and make up the bulk of
                                        </Card.Text>
                                    </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Card style={{textAlign: "left", border: "none"}}>
                                    <Card.Body>
                                        <Card.Title>Contract Two</Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                                        <Card.Text>
                                                    Some quick example text to build on the card title and make up the bulk of
                                            the card's content. Some quick example text to build on the card title and make up the bulk of
                                            the card's content.Some quick example text to build on the card title and make up the bulk of
                                        </Card.Text>
                                    </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </Col>
                    </Row>



                    <Row style={{marginBottom: '5em'}}>
                        <Col className="d-flex justify-content-md-center" md={3}>
                            {/* <Image className="mb-3" src="https://source.unsplash.com/random/150x400" rounded/> */}

                            <Card className="bg-dark text-white" style={{textAlign: "center"}}>
                                <Card.Img src="https://source.unsplash.com/random/170x402" alt="Card image" />
                                <Card.ImgOverlay>
                                    <Card.Title as='h1'>Task</Card.Title>
                                    <Card.Text>
                                    </Card.Text>
                                </Card.ImgOverlay>
                            </Card>
                        </Col>

                        <Col>
                            <Row>
                                <Col>
                                    <Card style={{ textAlign: "left", border: "none"}}>
                                    <Card.Body>
                                        <Card.Title>Contract One</Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                                        <Card.Text>
                                                    Some quick example text to build on the card title and make up the bulk of
                                            the card's content. Some quick example text to build on the card title and make up the bulk of
                                            the card's content.Some quick example text to build on the card title and make up the bulk of
                                        </Card.Text>
                                    </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Card style={{textAlign: "left", border: "none"}}>
                                    <Card.Body>
                                        <Card.Title>Contract Two</Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                                        <Card.Text>
                                                    Some quick example text to build on the card title and make up the bulk of
                                            the card's content. Some quick example text to build on the card title and make up the bulk of
                                            the card's content.Some quick example text to build on the card title and make up the bulk of
                                        </Card.Text>
                                    </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </Col>
                    </Row>




                    <Row style={{marginBottom: '5em'}}>
                        <Col className="d-flex justify-content-md-center" md={3}>
                            {/* <Image className="mb-3" src="https://source.unsplash.com/random/150x400" rounded/> */}

                            <Card className="bg-dark text-white" style={{textAlign: "center"}}>
                                <Card.Img src="https://source.unsplash.com/random/170x401" alt="Card image" />
                                <Card.ImgOverlay>
                                    <Card.Title as='h1'>Other</Card.Title>
                                    <Card.Text>
                                    </Card.Text>
                                </Card.ImgOverlay>
                            </Card>
                        </Col>

                        <Col>
                            <Row>
                                <Col>
                                    <Card style={{ textAlign: "left", border: "none"}}>
                                    <Card.Body>
                                        <Card.Title>Contract One</Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                                        <Card.Text>
                                                    Some quick example text to build on the card title and make up the bulk of
                                            the card's content. Some quick example text to build on the card title and make up the bulk of
                                            the card's content.Some quick example text to build on the card title and make up the bulk of
                                        </Card.Text>
                                    </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Card style={{textAlign: "left", border: "none"}}>
                                    <Card.Body>
                                        <Card.Title>Contract Two</Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                                        <Card.Text>
                                                    Some quick example text to build on the card title and make up the bulk of
                                            the card's content. Some quick example text to build on the card title and make up the bulk of
                                            the card's content.Some quick example text to build on the card title and make up the bulk of
                                        </Card.Text>
                                    </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Row>

            <Row className="d-flex justify-content-md-center" style={{backgroundColor: 'paleturquoise', 
                                                                paddingTop: '4em', paddingBottom: '4em'}}> 
                <Col className="">
                    <Card style={{backgroundColor: 'paleturquoise', width: '100%', textAlign: "center", border: "none"}}>
                    <Card.Body>
                        <Image className="mb-3" src="https://source.unsplash.com/random/100x101" roundedCircle/>
                        <Card.Title as="h1">Commerical Contracting</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                        <Card.Text>
                        </Card.Text>
                    </Card.Body>
                    </Card>
                </Col>
            </Row>


            <Row className="d-flex justify-content-md-center" style={{marginTop: '4em', marginBottom: '12em'}}> 
                <Col md={6} className="">

                    <Row style={{marginBottom: '5em'}}>
                        <Col className="d-flex justify-content-md-center" md={3}>

                            <Card className="bg-dark text-white" style={{textAlign: "center"}}>
                                <Card.Img src="https://source.unsplash.com/random/171x400" alt="Card image" />
                                <Card.ImgOverlay>
                                    <Card.Title as='h3'>Company Name</Card.Title>
                                    <Card.Text>
                                    </Card.Text>
                                </Card.ImgOverlay>
                            </Card>
                        </Col>

                        <Col>
                            <Row>
                                <Col>
                                    <Card style={{ textAlign: "left", border: "none"}}>
                                    <Card.Body>
                                        <Card.Title>Contract One</Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                                        <Card.Text>
                                                    Some quick example text to build on the card title and make up the bulk of
                                            the card's content. Some quick example text to build on the card title and make up the bulk of
                                            the card's content.Some quick example text to build on the card title and make up the bulk of
                                        </Card.Text>
                                    </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Card style={{textAlign: "left", border: "none"}}>
                                    <Card.Body>
                                        <Card.Title>Contract Two</Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                                        <Card.Text>
                                                    Some quick example text to build on the card title and make up the bulk of
                                            the card's content. Some quick example text to build on the card title and make up the bulk of
                                            the card's content.Some quick example text to build on the card title and make up the bulk of
                                        </Card.Text>
                                    </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </Col>
                    </Row>



                </Col>
            </Row>
        </Layout>
    )}
}

export default Services