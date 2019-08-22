import React, {Component} from 'react';
import { Link } from "gatsby"
import Layout from "../components/layout"
import 'bootstrap/dist/css/bootstrap.css';
import { Card, Button, Col, Row, Jumbotron, Container, Image } from 'react-bootstrap';


class Index extends Component {
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
        let modifiedHeight = window.innerHeight - 60;
        this.setState({ 
            width: window.innerWidth, 
            height: modifiedHeight,
            url: "url(https://source.unsplash.com/y9np19Fprmo/" + window.innerWidth + "x" + modifiedHeight +")"});
    }


  render() {
    return (
        <Layout>
            <Row>
                <Col className="p-0">
                    <Jumbotron className="d-flex align-items-center" fluid style={{height: this.state.height, backgroundImage: this.state.url,
                                                backgroundRepeat: `no-repeat`, backgroundSize: `cover`, backgroundColor: `gray`}}>
                        <Container className="" style={{}}>
                            <h1 className="display-1" style={{color: `white`}}>Moebius Solutions Inc.</h1>
                            <p className="h5" style={{color: `white`}}>
                            Experts in Developing Software Solutions for Military and Commercial Systems
                            </p>
                        </Container>
                    </Jumbotron>
                </Col>
            </Row>


            <div class="row align-items-top justify-content-center" style={{textAlign: `center`, minHeight: `500px`, paddingTop: `5em`}}>
                <div class="col-sm-8">

                    <Row className="d-flex justify-content-md-center" style={{marginTop: '0.7em'}}>
                        <Col md={6}>
                            <Card style={{width: '100%', textAlign: "center", border: "none"}}>
                            <Card.Body>
                                <Card.Title className="display-4">Core Text</Card.Title>
                                <Card.Subtitle className="mt-4 mb-2 text-muted">San Diego Software Company</Card.Subtitle>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content. Some quick example text to build on the card title and make up the bulk of
                                </Card.Text>
                            </Card.Body>
                            </Card>
                        </Col>
                    </Row>



                    <div class="row align-items-top" style={{paddingTop: `2em`}}>
                        <Col className="d-flex justify-content-center">
                            <Card style={{ width: '15rem', border: "none" }}>
                                <Image className="m-3" src="https://source.unsplash.com/random/200x201" roundedCircle/>

                                <Card.Body>
                                    <Card.Title as="h2">Open Source</Card.Title>
                                    <Card.Text>
                                    Some quick example text to build on the card title
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col className="d-flex justify-content-center">
                            <Card style={{ width: '15rem', border: "none" }}>
                            <Image className="m-3" src="https://source.unsplash.com/random/200x200" roundedCircle/>
                                <Card.Body>
                                    <Card.Title as="h2">Technical Excellence</Card.Title>
                                    <Card.Text>
                                    Some quick example text to build on the card title
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col className="d-flex justify-content-center">
                            <Card style={{ width: '15rem', border: "none" }}>
                            <Image className="m-3" src="https://source.unsplash.com/random/200x199" roundedCircle/>
                                <Card.Body>
                                    <Card.Title as="h2">Focused Solutions</Card.Title>
                                    <Card.Text>
                                    Some quick example text to build on the card title
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    
                    </div>
                </div>
            </div>

            <div class="row align-items-top justify-content-md-center" style={{textAlign: `center`, paddingTop: `4em`}}>
                <div class="col-sm-7">

                    <Row className="" style={{marginTop: `4em` }}>
                        <Col>
                            <Card className="text-left">
                                <Card.Header as="h2">Projects</Card.Header>
                                <Card.Body>
                                    <Card.Title>Special title treatment</Card.Title>
                                    <Card.Text>
                                    With supporting text below as a natural lead-in to additional content.
                                    </Card.Text>

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

                                </Card.Body>
                            </Card>               
                        </Col>
                    </Row>
                </div>
            </div>

            <div class="row align-items-top justify-content-md-center" style={{textAlign: `center`, minHeight: `300px`, paddingTop: `10em`, paddingBottom: `10em`}}>
                <div class="col-sm-7">
                    <h3>Technologies</h3>

                    <div style={{textAlign: `center`, marginTop: `2em`}}>
                        <Row className="">
                            <Col>
                                <Image src="https://source.unsplash.com/random/183x181" roundedCircle/>
                            </Col>
                            <Col>
                                <Image src="https://source.unsplash.com/random/183x182" roundedCircle/>
                            </Col>
                            <Col>
                                <Image src="https://source.unsplash.com/random/183x183" roundedCircle/>
                            </Col>
                            <Col>
                                <Image src="https://source.unsplash.com/random/183x184" roundedCircle/>
                            </Col>
                        </Row>
                    

                        <Row className="" style={{ marginTop: '2rem' }}>
                            <Col>
                                <Image src="https://source.unsplash.com/random/181x183" roundedCircle/>
                            </Col>
                            <Col>
                                <Image src="https://source.unsplash.com/random/182x183" roundedCircle/>
                            </Col>
                            <Col>
                                <Image src="https://source.unsplash.com/random/183x185" roundedCircle/>
                            </Col>
                            <Col>
                                <Image src="https://source.unsplash.com/random/184x183" roundedCircle/>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>

        </Layout>
    )}

}

export default Index
