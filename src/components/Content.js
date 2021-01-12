import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap';

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './owl.css';




export default function Content() {
    return (
        <div>
            <Container >
                <div className="info-panel justify-content-center">
                    <h3 className="text-center"><b>Most Wanted</b></h3>
                    <OwlCarousel items={3}
                        className="owl-theme"
                        loop
                        nav
                        margin={8} >
                        <img src="img/Group 1.png" className="card-img-top" alt="..." />
                        <img src="img/Group 2.png" className="card-img-top" alt="..." />
                        <img src="img/Group 3.png" className="card-img-top" alt="..." />
                    </OwlCarousel>
                </div>
            </Container>
            <Container >
                <div className="info-panel-card justify-content-center">
                    <h3 className="text-center"><b>Our partner</b></h3>
                    <OwlCarousel items={3}
                        className="owl-theme"
                        loop
                        nav
                        margin={12} >
                        <img className="" src='img/tokped 1.png' width="25px" height="100px" alt="..." />
                        <img className="" src='img/shopee 1.png' width="25px" height="75px" alt="..." />
                        <img className="" src='img/gojek 1.png' width="25px" height="100px" alt="..." />
                        <img className="" src='img/grab 1.png' width="5px" height="100px" alt="..." />
                    </OwlCarousel>
                </div>
            </Container>
            <Container >
                <Row>
                    <Col md={8}>
                        <div className="info-panel-card justify-content-center">
                            <h3 className="text-center"><b>Top Talent</b></h3>
                            <OwlCarousel items={4}
                                className="owl-theme"
                                loop
                                nav
                                margin={8} >
                                <div className="text-center">
                                    <img src="img/Ellipse 1.png" width="20px" alt="..." />
                                    <p>Steve Job</p>
                                </div>
                                <div className="text-center">
                                    <img src="img/Ellipse 2.png" width="20px" alt="..." />
                                    <p>Ellon Musk</p>
                                </div>
                                <div className="text-center">
                                    <img src="img/Ellipse 3.png" width="20px" alt="..." />
                                    <p>Linus Torvalds</p>
                                </div>
                                <div className="text-center">
                                    <img src="img/Ellipse 4.png" width="20px" alt="..." />
                                    <p>Nam Do San</p>
                                </div>
                            </OwlCarousel>
                        </div>
                    </Col>
                    <Col md={4} className="info-panel-hakathon">
                        <h3 class="text-center"><b>Event Hackathon</b></h3>
                        <Row>
                            <Col md={12} className="p-3">
                                <Card className="p-2 mb-2">
                                    <div class="d-flex justify-content-between">
                                        <img src="img/Rectangle 11.png" width="50px" height="50px" alt="..." />
                                        <div>
                                            <h6 class="text-left">East Venture</h6>
                                            <h6 class="text-left">10 Januari 2021</h6>
                                        </div>
                                        <button class="btn btn-sm btn-danger">Join</button>
                                    </div>
                                </Card>
                                <Card className="p-2 mb-2">
                                    <div class="d-flex justify-content-between">
                                        <img src="img/Rectangle 12.png" width="50px" height="50px" alt="..." />
                                        <div>
                                            <h6 class="text-left">East Venture</h6>
                                            <h6 class="text-left">10 Januari 2021</h6>
                                        </div>
                                        <button class="btn btn-sm btn-danger">Join</button>
                                    </div>
                                </Card>
                                <Card className="p-2 mb-2">
                                    <div class="d-flex justify-content-between">
                                        <img src="img/Rectangle 13.png" width="50px" height="50px" alt="..." />
                                        <div>
                                            <h6 class="text-left">East Venture</h6>
                                            <h6 class="text-left">10 Januari 2021</h6>
                                        </div>
                                        <button class="btn btn-sm btn-danger">Join</button>
                                    </div>
                                </Card>
                                <Card className="p-2 mb-2">
                                    <div class="d-flex justify-content-between">
                                        <img src="img/Rectangle 19.png" width="50px" height="50px" alt="..." />
                                        <div>
                                            <h6 class="text-left">East Venture</h6>
                                            <h6 class="text-left">10 Januari 2021</h6>
                                        </div>
                                        <button class="btn btn-sm btn-danger">Join</button>
                                    </div>
                                </Card>
                                <Card className="p-2 mb-2">
                                    <div class="d-flex justify-content-between">
                                        <img src="img/Rectangle 20.png" width="50px" height="50px" alt="..." />
                                        <div>
                                            <h6 class="text-left">East Venture</h6>
                                            <h6 class="text-left">10 Januari 2021</h6>
                                        </div>
                                        <button class="btn btn-sm btn-danger">Join</button>
                                    </div>
                                </Card>
                            </Col>
                        </Row>
                    </Col>
                </Row >
            </Container>
            <Container >
                <Col md={8} >
                    <div className="info-panel-volunteer justify-content-center ">
                        <h3 className="text-center text-white"><b>Open Source Volunteer</b></h3>
                        <OwlCarousel items={2}
                            className="owl-theme"
                            loop
                            nav
                            margin={8} >
                            <div>
                                <img src="img/Rectangle 15.png" width="40px" alt="..." />
                                <p className="text-center text-white">Golang.id</p>
                            </div>
                            <div>
                                <img src="img/Rectangle 18.png" width="40px" alt="..." />
                                <p className="text-center text-white">Reactjs.id</p>
                            </div>
                        </OwlCarousel>
                    </div>
                </Col>
            </Container>
        </div >
    )
}
