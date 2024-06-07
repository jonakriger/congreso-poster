// Footer.jsx

// React
// eslint-disable-next-line no-unused-vars
import React from "react";

// Bootstrap React
import { Button, Col, Container, Image, Row } from "react-bootstrap";

// Logos
import LogoCongress from "../Logos/logo-congreso.png";
import LogoUnlpam from "../Logos/logo-unlpam.svg";
import LogoCatedra from "../Logos/logo-catedra.svg";
import LogoCeicann from "../Logos/logo-ceicann.svg";

// Return
const Footer = () => {
    return (
        <>
            <footer className="c-footer py-5 px-0">
                <Container fluid>
                    <Row className="align-center">
                        <Col sm="2" className="text-center">
                            <Button variant="link" href="/bibliografia" size="lg">
                                Bibliografía
                            </Button>
                        </Col>
                        <Col sm="10">
                            <Row className="align-center">
                                <Col sm="3">
                                    <Image src={LogoCongress} alt="Logo 3º Congreso Argentino de Cannabis y Salud" fluid />
                                </Col>
                                <Col sm="3">
                                    <Image src={LogoUnlpam} alt="Logo Universidad Nacional de La Pampa" fluid />
                                </Col>
                                <Col sm="3">
                                    <Image src={LogoCatedra} alt="Logo Catedra Libre Interdisciplinaria del Cannabis - UNLPam" fluid />
                                </Col>
                                <Col sm="3">
                                    <Image src={LogoCeicann} alt="Logo CEICann" fluid />
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </footer>
        </>
    );
};

// Export
export default Footer;
