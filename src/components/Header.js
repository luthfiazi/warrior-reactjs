import React from 'react'
import { Nav, Navbar, Button, Container } from 'react-bootstrap';


export default function Header() {
    return (
        <Container>
            <Navbar bg="navbar navbar-expand-lg navbar-light">
                <Navbar.Brand href="#"><img src="img/warrior.png" width="80px" alt="..." /></Navbar.Brand>
                {/* <Button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </Button> */}
                <Nav className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <Nav className="navbar-nav ml-auto">
                        <Nav.Link href="index.html">Home <span class="sr-only">(current)</span></Nav.Link>
                        <Nav.Link href="#">Talent</Nav.Link>
                        <Nav.Link href="#">About us</Nav.Link>
                        <Nav.Link href="#"><Button variant="danger">Login</Button></Nav.Link>
                    </Nav>
                </Nav>
            </Navbar>
        </Container>
    )
}
