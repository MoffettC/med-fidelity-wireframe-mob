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
        let hero = "https://source.unsplash.com/yZygONrUBe8/" + window.innerWidth + "x" + modifiedHeight

        fetch(hero)
            .then (res => {
                var searchParams = new URLSearchParams(res.url);
                searchParams.set("crop", "edges");

                this.setState({ 
                    width: window.innerWidth, 
                    height: modifiedHeight,
                    // url: "url(" + decodeURIComponent(decodeURIComponent(searchParams.toString())) + ")"
                    url: "url(hero)"
                })
            })

    }

  render() {
    return ( 
        <Layout>
            <Row className="" style={{paddingBottom: '6em', backgroundColor: `lightsteelblue`}}>
                <Col className="p-0">
                    <Jumbotron fluid style={{height: this.state.height, backgroundImage: this.state.url,
                                                backgroundRepeat: `no-repeat`, backgroundSize: `cover`, backgroundColor: `gray`}}>
                        <Container style={{textAlign: 'center', paddingTop: '4em'}}>
                            <h1 className="display-2" style={{color: `white`}}>About</h1>
                            <p className="h5" style={{color: `white`}}>
                            Use a super motivational quote about everything
                            </p>
                        </Container>
                    </Jumbotron>
                </Col>
            </Row>

            <Row className="d-flex justify-content-md-center" style={{paddingBottom: '9em', backgroundColor: `lightsteelblue`}}> 
                <Col md={6} className="">
                    <Card className="text-center">
                        <Card.Header as="h1">Featured</Card.Header>
                        <Card.Body >
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


            <Row className="d-flex justify-content-md-center" style={{marginTop:'3em', marginBottom: '4em'}}> 
                <Col md={6} className="">

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

                    </Col>
                </Row>

                <Row className="d-flex justify-content-md-center" style={{paddingTop: '4em', paddingBottom: '4em', backgroundColor: `lightsteelblue`}}>
                    <Col md={6}>
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

                <Row className="d-flex justify-content-md-center" style={{paddingTop: '4em', marginBottom: '6em'}}> 
                    <Col md={6} className="">    

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