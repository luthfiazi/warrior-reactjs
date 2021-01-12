import React from 'react'
import { Container } from 'react-bootstrap';

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
                        margin={8} >

                        <img className="img" src='img/tokped 1.png' width="50" alt="..." />
                        <img className="img" src='img/shopee 1.png' width="50" alt="..." />
                        <img className="img" src='img/gojek 1.png' width="50" alt="..." />
                        <img className="img" src='img/grab 1.png' width="50" alt="..." />
                    </OwlCarousel>
                </div>
            </Container>

        </div>

        // <Container>
        //     <Row xs={2} md={4} lg={6}>
        //         <Container>
        //             <Col md={12} className="info-panel justify-content-center">
        //                 <h3 className="text-center"><b>Most Wanted</b></h3>
        //                 <Row>
        //                     <Col>
        //                         <img src="img/Group 1.png" className="card-img-top" alt="..." />
        //                     </Col>
        //                     <Col>
        //                         <img src="img/Group 2.png" className="card-img-top" alt="..." />
        //                     </Col>
        //                     <Col>
        //                         <img src="img/Group 3.png" className="card-img-top" alt="..." />
        //                     </Col>
        //                 </Row>
        //             </Col>
        //         </Container>
        //     </Row>
        //     <Row xs={2} md={4} lg={6}>


        //         <Container>
        //             <Col md={12} className="info-panel-card justify-content-center">
        //                 <h3 className="text-center"><b>Our partner</b></h3>
        //                 <Row>
        //                     <Col>
        //                         <img src="img/Group 1.png" className="card-img-top" alt="..." />
        //                     </Col>
        //                     <Col>
        //                         <img src="img/Group 2.png" className="card-img-top" alt="..." />
        //                     </Col>
        //                     <Col>
        //                         <img src="img/Group 3.png" className="card-img-top" alt="..." />
        //                     </Col>
        //                 </Row>
        //             </Col>
        //         </Container>
        //     </Row>
        //     <Row xs={1} md={2}>
        //         <Container>
        //             <Col className="info-panel-toptalent justify-content-center">
        //                 <h3 className="text-center"><b>Top Talent</b></h3>
        //                 <Row>
        //                     <Col>
        //                         <img src="img/Group 1.png" className="card-img-top" alt="..." />
        //                     </Col>
        //                     <Col>
        //                         <img src="img/Group 2.png" className="card-img-top" alt="..." />
        //                     </Col>
        //                     <Col>
        //                         <img src="img/Group 3.png" className="card-img-top" alt="..." />
        //                     </Col>
        //                 </Row>
        //             </Col>
        //             <Col className="info-panel-hakathon justify-content-center">
        //                 <h3 className="text-center"><b>Event Hackathon</b></h3>
        //                 <Row>
        //                     <Col>
        //                         <img src="img/Group 1.png" className="card-img-top" alt="..." />
        //                     </Col>
        //                     <Col>
        //                         <img src="img/Group 2.png" className="card-img-top" alt="..." />
        //                     </Col>
        //                     <Col>
        //                         <img src="img/Group 3.png" className="card-img-top" alt="..." />
        //                     </Col>
        //                 </Row>
        //             </Col>
        //             <Col className="info-panel-volunteer justify-content-center">
        //                 <h3 className="text-center text-white"><b>Open Source Volunteer</b></h3>
        //                 <Row>
        //                     <Col>
        //                         <img src="img/Group 1.png" className="card-img-top" alt="..." />
        //                     </Col>
        //                     <Col>
        //                         <img src="img/Group 2.png" className="card-img-top" alt="..." />
        //                     </Col>
        //                     <Col>
        //                         <img src="img/Group 3.png" className="card-img-top" alt="..." />
        //                     </Col>
        //                 </Row>
        //             </Col>
        //         </Container>
        //     </Row>
        // </Container>
    )
}
