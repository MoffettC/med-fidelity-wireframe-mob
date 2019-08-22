import React from "react"
import { Link } from "gatsby"
import 'bootstrap/dist/css/bootstrap.css';
import {Row, Col} from 'react-bootstrap';

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `2.5rem` }}>
    <Link class="text-white" to={props.to}>{props.children}</Link>
  </li>
)

export default ({ children }) => {

  return (
    <div class="container-fluid text-dark" style={{backgroundColor: 'white'}}>
        <Row>
            <Col className="p-0">
                <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                    <a class="navbar-brand" href="#"><h3>Logo?</h3></a>

                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav ml-auto">
                            <ListLink to="/">Home</ListLink>
                            <ListLink to="/about/">About</ListLink>
                            <ListLink to="/services/">Services</ListLink>
                            <ListLink to="/careers/">Careers</ListLink>
                            <ListLink to="/contact/">Contact</ListLink>
                        </div>
                    </div>
                </nav>
            </Col>
        </Row>

        {children}

        <Row>
            <Col className="p-0">
            <section id="footer" style={{background: `url('https://source.unsplash.com/random/1920x250')`, paddingTop: `2em`, paddingBottom: `2em`}}>
                <div class="row text-center text-xs-center text-sm-center text-md-center text-white"  style={{background: "none"}}>
                    <div class="col-xs-12 col-sm-12 col-md-12">
                        <h5>Moebius logo</h5>
                        <p class="text-center">
                            Standard location info and contact info
                        </p>
                    </div>
                </div>

                <div class="row" style={{background: "none"}}>
                    <div class="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center text-white">
                    <p class="h6">Moebius Solutions, Inc. <span>&copy;</span> 2018 All right Reversed.</p>
                    </div>
                </div>	
            </section>
            </Col>
        </Row>

    </div>
  )
}
