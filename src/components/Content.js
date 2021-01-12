import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';

export default function Content() {
    return (
        <Container>
            <Row xs={2} md={4} lg={6}>
                <Container>
                    <Col md={12} className="info-panel justify-content-center">
                        <h3 className="text-center"><b>Most Wanted</b></h3>
                        <Row>
                            <Col>
                                <img src="img/Group 1.png" className="card-img-top" alt="..." />
                            </Col>
                            <Col>
                                <img src="img/Group 2.png" className="card-img-top" alt="..." />
                            </Col>
                            <Col>
                                <img src="img/Group 3.png" className="card-img-top" alt="..." />
                            </Col>
                        </Row>
                    </Col>
                </Container>
            </Row>
            <Row xs={2} md={4} lg={6}>
                <Container>
                    <Col md={12} className="info-panel-card justify-content-center">
                        <h3 className="text-center"><b>Our partner</b></h3>
                        <Row>
                            <Col>
                                <img src="img/Group 1.png" className="card-img-top" alt="..." />
                            </Col>
                            <Col>
                                <img src="img/Group 2.png" className="card-img-top" alt="..." />
                            </Col>
                            <Col>
                                <img src="img/Group 3.png" className="card-img-top" alt="..." />
                            </Col>
                        </Row>
                    </Col>
                </Container>
            </Row>
            <Row xs={1} md={2}>
                <Container>
                    <Col className="info-panel-toptalent justify-content-center">
                        <h3 className="text-center"><b>Top Talent</b></h3>
                        <Row>
                            <Col>
                                <img src="img/Group 1.png" className="card-img-top" alt="..." />
                            </Col>
                            <Col>
                                <img src="img/Group 2.png" className="card-img-top" alt="..." />
                            </Col>
                            <Col>
                                <img src="img/Group 3.png" className="card-img-top" alt="..." />
                            </Col>
                        </Row>
                    </Col>
                    <Col className="info-panel-hakathon justify-content-center">
                        <h3 className="text-center"><b>Event Hackathon</b></h3>
                        <Row>
                            <Col>
                                <img src="img/Group 1.png" className="card-img-top" alt="..." />
                            </Col>
                            <Col>
                                <img src="img/Group 2.png" className="card-img-top" alt="..." />
                            </Col>
                            <Col>
                                <img src="img/Group 3.png" className="card-img-top" alt="..." />
                            </Col>
                        </Row>
                    </Col>
                    <Col className="info-panel-volunteer justify-content-center">
                        <h3 className="text-center text-white"><b>Open Source Volunteer</b></h3>
                        <Row>
                            <Col>
                                <img src="img/Group 1.png" className="card-img-top" alt="..." />
                            </Col>
                            <Col>
                                <img src="img/Group 2.png" className="card-img-top" alt="..." />
                            </Col>
                            <Col>
                                <img src="img/Group 3.png" className="card-img-top" alt="..." />
                            </Col>
                        </Row>
                    </Col>
                </Container>
            </Row>
        </Container>
    )
}
