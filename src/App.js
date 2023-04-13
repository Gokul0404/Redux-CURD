

// npm install @reduxjs/toolkit   npm install react-redux intsall the packages

//BOOTSTRAP AND ICONS
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css"

import Formfield from './form';
import { Col, Container, Row } from 'react-bootstrap'; 

import Tablefield from './Table';
import Head from './head';
import AddTask from './form';
function App() {
  return (
    <Container className="dd">
      <Row className="justify-content-center mt-5">
        <Col lg={6}>
          <Head />
          <AddTask />
          <Tablefield />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
