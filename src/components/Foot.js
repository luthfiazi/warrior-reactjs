import React from 'react'
import { Jumbotron, Nav, Row, Col, Container } from 'react-bootstrap';

export default function Foot() {
    return (
        <>
            <Jumbotron className="jumbotron-fluid mt-5">
                <Container>
                    <Row>
                        <Row>
                            <Col md={4}>
                                <h5>Main Menu</h5>
                                <Nav.Link href="#">Home</Nav.Link>
                                <Nav.Link href="#">Talent</Nav.Link>
                                <Nav.Link href="#">About us</Nav.Link>
                            </Col>
                            <Col md={4}>
                                <h5>Event</h5>
                                <Nav.Link href="#">Open Source</Nav.Link>
                                <Nav.Link href="#">Hackathon</Nav.Link>
                            </Col>
                            <Col md={4}>
                                <h5>Partner</h5>
                                <Nav.Link href="#">Volunteer</Nav.Link>
                                <Nav.Link href="#">Company</Nav.Link>
                                <Nav.Link href="#">Term of Services</Nav.Link>
                                <Nav.Link href="#">Privacy Policy</Nav.Link>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={6} className="text-left mb-5">
                                <h1>
                                    <Nav.Link href="#" className="navbar-brand"><img src="img/warrior.png" width="100px" alt="..." /><h6>Social</h6></Nav.Link>
                                </h1>
                                <div className="mt-5">
                                    <img src="img/Ellipse 8.png" width="50px" alt="" />
                                    <img src="img/Ellipse 9.png" width="50px" alt="" />
                                    <img src="img/Ellipse 10.png" width="50px" alt="" />
                                    <img src="img/Ellipse 11.png" width="50px" alt="" />
                                </div>
                            </Col>
                            <Col sm={6} classname="text-left">
                                <h1 className="foot">
                                    "Growth Your Business With a Great ManPower"
                                </h1>
                            </Col>
                        </Row>
                    </Row>
                </Container>
            </Jumbotron>
            <footer className="text-center">
                <p>&copy; Copyright warrior 2020.</p>
            </footer>
        </>
    )
}
