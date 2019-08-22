import React, {Component} from 'react';
import { Link } from "gatsby"
import Layout from "../components/layout"
import 'bootstrap/dist/css/bootstrap.css';
import { Card, Button, Col, Row, Jumbotron, Container, Image } from 'react-bootstrap';

class Contact extends Component {
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
        let modifiedHeight = (window.innerHeight - 60) * 0.8;
        this.setState({ 
            width: window.innerWidth, 
            height: modifiedHeight,
            url: "url(https://source.unsplash.com/QckxruozjRg/" + window.innerWidth + "x" + modifiedHeight +")"});
    }


  render() {
    return (
        <Layout>

        </Layout>
    )}
}

export default Contact