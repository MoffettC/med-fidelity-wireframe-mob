import React, {Component} from 'react';
import { Link } from "gatsby"
import Layout from "../components/layout"
import 'bootstrap/dist/css/bootstrap.css';
import { Card, Col, Row, Jumbotron, Container, Image } from 'react-bootstrap';

class Careers extends Component {
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
        let hero = "https://source.unsplash.com/-VKCUt2Mptc/" + window.innerWidth + "x" + modifiedHeight

        fetch(hero)
            .then (res => {
                var searchParams = new URLSearchParams(res.url);
                searchParams.set("crop", "edges");

                this.setState({ 
                    width: window.innerWidth, 
                    height: modifiedHeight,
                    url: "url(" + decodeURIComponent(decodeURIComponent(searchParams.toString())) + ")"
                })
            })

    }

  render() {
    return (
        <Layout>
            <Row className="" style={{paddingBottom: '3em', backgroundColor: 'sandybrown'}}>
                <Col className="p-0">
                    <Jumbotron fluid style={{height: this.state.height, backgroundImage: this.state.url,
                                                backgroundRepeat: `no-repeat`, backgroundSize: `cover`, backgroundColor: `sandybrown`}}>
                        <Container style={{textAlign: 'center', paddingTop: '4em'}}>
                            <h1 className="display-2" style={{color: `black`}}>Careers</h1>
                            <p className="h5" style={{color: `black`}}>
                            Use a super motivational quote about everything
                            </p>
                        </Container>
                    </Jumbotron>
                </Col>
            </Row>

            <Row className="d-flex justify-content-md-center" style={{backgroundColor: 'sandybrown', paddingBottom: '3em'}}> 
                <Col className="">
                    <Card style={{backgroundColor: 'sandybrown', width: '100%', textAlign: "center", border: "none"}}>
                    <Card.Body>
                        <Image className="mb-3" src="https://source.unsplash.com/random/100x100" roundedCircle/>
                        <Card.Title as="h1">Benefits</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                        <Card.Text>
                        </Card.Text>
                    </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row className="d-flex justify-content-md-center" style={{marginBottom: '12em'}}> 
                <Col md={6} className="">

                    <Row className="d-flex justify-content-md-center" style={{marginTop: '2em', marginBottom: '5em'}}>
                        <Col >

                            <Card style={{width: '100%', textAlign: "center", border: "none"}}>
                            <Card.Body>
                                {/* <Card.Title as="h1">Benefits</Card.Title> */}
                                {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}

                                <Row className="" style={{textAlign: `center`, marginTop: `2em`}}>
                                    <Col>
                                        <Image src="https://source.unsplash.com/random/150x151" style={{margin: `0.5em`}} roundedCircle/>
                                        <h5>Competitive Pay</h5>
                                    </Col>
                                    <Col>
                                        <Image src="https://source.unsplash.com/random/151x150" style={{margin: `0.5em`}} roundedCircle/>
                                        <h5>Flexible Schedule</h5>
                                    </Col>
                                    <Col>
                                        <Image src="https://source.unsplash.com/random/150x149" style={{margin: `0.5em`}} roundedCircle/>
                                        <h5>PTO/Holidays</h5>
                                    </Col>
                                </Row>

                                <Row className="" style={{textAlign: `center`, marginTop: `1em`, marginBottom: `2em`}}>
                                    <Col>
                                        <Image src="https://source.unsplash.com/random/149x150" style={{margin: `0.5em`}} roundedCircle/>
                                        <h5>Health Insurance</h5>
                                    </Col>
                                    <Col>
                                        <Image src="https://source.unsplash.com/random/150x150" style={{margin: `0.5em`}} roundedCircle/>
                                        <h5>401K/Retirement Plans</h5>
                                    </Col>
                                    <Col>
                                        <Image src="https://source.unsplash.com/random/149x151" style={{margin: `0.5em`}} roundedCircle/>
                                        <h5>Education Assistance</h5>
                                    </Col>
                                </Row>


                                <Card.Text>
                                    Moebius Solutions, Inc. is a small software firm based in San Diego, CA. We currently have 80+ employees, and a growing, brisk business supporting both DoD and civilian customers. Subject matter expertise includes many C2 systems such as C2PC, GCCS, XCOP, OTM, along with other mappings systems such as Google Earth and NASA’s World Wind.
                                </Card.Text>

                                <Card.Text>
                                    As a small group of software engineers and subject matter experts, we have low corporate overhead, maintain a collaborative work environment, promote creative solutions and keep employee satisfaction a top priority by offering generous benefits such as...
                                </Card.Text>

                                <Card.Text style={{textAlign: `left`}}>
                                    <ul>
                                        <li>Competitive Salary</li>
                                        <li>Adjustable working schedule to accommodate work/life balance</li>
                                        <li>Paid Time Off & Holidays</li>
                                        <li>Medical, Vision, Dental, Life & Long-Term Disability Insurance</li>
                                        <li>401(k) Retirement planning, with 4% matching contribution</li>
                                        <li>Educational Assistance program</li>
                                    </ul>
                                </Card.Text>

                                <Card.Text>
                                    Ready to apply? Click on our open positions below...
                                </Card.Text>
                            </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <Card>
                                <Card.Header as="h5">Openings</Card.Header>
                                <Card.Body>
                                    <Card.Title></Card.Title>
                                    <Card.Text>
                                    </Card.Text>
                                    <iframe src="https://jobs.localjobnetwork.com/s/e-Moebius-Solutions-jobs-e127568.html?pbid=68645" style={{width:'100%', height:'600px'}} frameborder="0"></iframe>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>


                </Col>
            </Row>

        </Layout>
    )}
}

export default Careers