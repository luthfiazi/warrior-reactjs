import React from 'react'
import { Jumbotron, InputGroup, FormControl, Button, Container, Row, Col } from 'react-bootstrap';


export default function Jumbo() {
    return (
        <Jumbotron>
            <Container>
                <h1 className="text-white mt-5 text-left">We Provide a Great Talent </h1>
                <p className="text-white text-left">
                    a growth mindset that will give solutions
             </p>
                <Row>
                    <Col md={6}>
                        <InputGroup className="mb-3">
                            <FormControl
                                placeholder="Email address"
                                aria-label="Email address"
                                aria-describedby="basic-addon2"
                            />
                            <InputGroup.Append>
                                <Button variant="danger">subscribe</Button>
                            </InputGroup.Append>
                        </InputGroup>
                    </Col>
                </Row>
            </Container>
        </Jumbotron >
    )
}
