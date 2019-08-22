import React, {Component} from 'react';
import { Link } from "gatsby"
import Layout from "../components/layout"
import 'bootstrap/dist/css/bootstrap.css';
import { Card, Button, Col, Row, Jumbotron, Container, Image } from 'react-bootstrap';

class About extends Component {
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
            url: "url(https://source.unsplash.com/QckxruozjRg/" + window.innerWidth + "x" + modifiedHeight +")"});
    }


  render() {
    return ( 
        <Layout>
            <Row className="" style={{marginBottom: '6em'}}>
                <Col className="p-0">
                    <Jumbotron fluid style={{height: this.state.height, backgroundImage: this.state.url,
                                                backgroundRepeat: `no-repeat`, backgroundSize: `cover`, backgroundColor: `gray`}}>
                        <Container style={{textAlign: 'center'}}>
                            <h1 className="display-3" style={{color: `white`}}>About here</h1>
                            <p style={{color: `white`}}>
                            Use a super motivational quote about everything
                            </p>
                        </Container>
                    </Jumbotron>
                </Col>
            </Row>

            <Row className="d-flex justify-content-md-center" style={{marginBottom: '12em'}}> 
                <Col md={6} className="">

                    <Row style={{marginBottom: '6em'}}>
                        <Col>
                            <Card className="text-center">
                                <Card.Header as="h1">Featured</Card.Header>
                                <Card.Body>
                                        <Image className="mb-3" src="https://source.unsplash.com/random/150x150" roundedCircle/>
                                        <Card.Title>CEO</Card.Title>
                                        <Card.Text>
                                        With supporting text below as a natural lead-in to additional content. <br></br>
                                        With supporting text below as a natural lead-in to additional content. <br></br>
                                        With supporting text below as a natural lead-in to additional content.
                                        </Card.Text>
                                        <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                                {/* <Card.Img variant="bot" src="https://source.unsplash.com/random/1120x200" /> */}
                            </Card>
                        </Col>
                    </Row>

                    {/* <Row className="mb-5">
                        <Col>
                            <Card>
                                <Card.Header>Featured</Card.Header>
                                <Card.Body>
                                    <Card.Title>Special title treatment</Card.Title>
                                    <Card.Text>
                                    With supporting text below as a natural lead-in to additional content.
                                    </Card.Text>
                                </Card.Body>
                            </Card>


                        </Col>
                    </Row> */}

                    <Row className="d-flex justify-content-md-center" style={{marginTop: '3em'}}>
                        <Col >
                            <Card style={{width: '100%', textAlign: "center", border: "none"}}>
                            <Card.Body>
                                <Image className="mb-3" src="https://source.unsplash.com/random/150x149" roundedCircle/>
                                <Card.Title>Open Source Culture</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content. Some quick example text to build on the card title and make up the bulk of
                                the card's content.Some quick example text to build on the card title and make up the bulk of
                                the card's content.Some quick example text to build on the card title and make up the bulk of
                                the card's content.Some quick example text to build on the card title and make up the bulk of
                                the card's content.Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                </Card.Text>
                            </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                    <Row className="d-flex justify-content-md-center" style={{marginTop: '3em'}}>
                        <Col>
                            <Card style={{width: '100%', textAlign: "center", border: "none"}}>
                            <Card.Body>
                            <Image className="mb-3" src="https://source.unsplash.com/random/149x150" roundedCircle/>

                                <Card.Title>Technical Excellence</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content. Some quick example text to build on the card title and make up the bulk of
                                the card's content.Some quick example text to build on the card title and make up the bulk of
                                the card's content.Some quick example text to build on the card title and make up the bulk of
                                the card's content.Some quick example text to build on the card title and make up the bulk of
                                the card's content.Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                </Card.Text>
                            </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                    <Row className="d-flex justify-content-md-center" style={{marginTop: '10em', marginBottom: '10em'}}>
                        <Col>
                            <blockquote className="blockquote mb-0 text-right">
                                <p class="display-3">
                                    {' '}Moebius always brings the best of people.{' '}
                                </p>
                                <footer className="blockquote-footer">
                                    <cite title="Source Title">Client</cite>
                                </footer>
                            </blockquote>
                        </Col>
                    </Row>

                    <Row className="d-flex justify-content-md-center" style={{marginTop: '3em'}}>
                        <Col>
                            <Card style={{width: '100%', textAlign: "center", border: "none"}}>
                            <Card.Body>
                            <Image className="mb-3" src="https://source.unsplash.com/random/151x150" roundedCircle/>

                                <Card.Title>Focus</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content. Some quick example text to build on the card title and make up the bulk of
                                the card's content.Some quick example text to build on the card title and make up the bulk of
                                the card's content.Some quick example text to build on the card title and make up the bulk of
                                the card's content.Some quick example text to build on the card title and make up the bulk of
                                the card's content.Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                </Card.Text>
                            </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                    <Row className="d-flex justify-content-md-center" style={{marginTop: '3em'}}>
                        <Col>
                            <Card style={{width: '100%', textAlign: "center", border: "none"}}>
                            <Card.Body>
                            <Image className="mb-3" src="https://source.unsplash.com/random/150x151" roundedCircle/>

                                <Card.Title>Approach</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content. Some quick example text to build on the card title and make up the bulk of
                                the card's content.Some quick example text to build on the card title and make up the bulk of
                                the card's content.Some quick example text to build on the card title and make up the bulk of
                                the card's content.Some quick example text to build on the card title and make up the bulk of
                                the card's content.Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                </Card.Text>
                            </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                </Col>
            </Row>
    
    
        </Layout> 
    )}
}

export default About