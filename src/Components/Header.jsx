// Header.jsx

// React
// eslint-disable-next-line no-unused-vars
import React from 'react';

// Logos
import LogoCongress from "../Logos/logo-congreso.png";
import LogoUnlpam from "../Logos/logo-unlpam.svg";
import LogoCatedra from "../Logos/logo-catedra.svg";
import LogoCeicann from "../Logos/logo-ceicann.svg";

// Bootstrap React
import { Col, Container, Image, Row } from 'react-bootstrap';

// Coomponents
import ModalAuthors from './ModalAuthors';

// Data
import { DataAuthors } from "../Data/DataAuthors";

// Return
const Header = () => {
    return (
        <>
            <header className="c-header py-4 mb-5">
                <Container fluid>
                    <Row>
                        <Col sm="2">
                            <div className="d-flex flex-column gap-3 w-100">
                                <div className="d-block w-100 mt-2">
                                    <Image src={LogoCongress}  alt="Logo 3º Congreso Argentino de Cannabis y Salud" fluid />
                                </div>
                            </div>
                        </Col>
                        <Col sm="8">
                            <h1 className="fw-bold mb-3 text-uppercase text-center">
                                Tiempos de floración de variedades de Cannabis cultivadas en La Pampa.
                            </h1>
                            <h2 className="m-0 fw-normal text-center fst-italic">
                                Flowering time of Cannabis strains grown in La Pampa.
                            </h2>
                        </Col>
                        <Col sm="2">
                            <div className="d-flex flex-column gap-3 w-100">
                                <div className="d-block w-100">
                                    <Image src={LogoUnlpam} alt="Logo Universidad Nacional de La Pampa" fluid />
                                </div>
                                <div className="d-block w-100">
                                    <Image src={LogoCatedra} alt="Logo Catedra Libre Interdisciplinaria del Cannabis - UNLPam" fluid />
                                </div>
                                <div className="d-block w-100">
                                    <Image src={LogoCeicann} alt="Logo CEICann" fluid />
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row className="justify-content-center mt-3 mb-5">
                        <Col sm="10">
                            <ul className="authors-container d-flex align-items-center justify-content-center gap-4 list-unstyled p-0 m-0">
                                <li>
                                    <h6 className='fw-normal fst-italic m-0'>Autores:</h6>
                                </li>
                                {DataAuthors.map((author, index) => (
                                    <li key={index}>
                                        <ModalAuthors 
                                            buttonLabel={author.name}
                                            modalData={author}
                                        />
                                    </li>
                                ))}
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </header>
        </>
    );
}

// Export
export default Header;
