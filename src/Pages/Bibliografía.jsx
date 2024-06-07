// Bibliografía.jsx

// React
// eslint-disable-next-line no-unused-vars
import React from 'react';

// React Helmet
import { Helmet } from 'react-helmet-async';

// Menu
import Menu from '../Components/Menu';

// Components
import Header from '../Components/Header';
import Footer from '../Components/Footer';

// Bootstrap React
import { Col, Container, Row } from 'react-bootstrap';

// Data
import { DataReferences } from "../Data/DataReferences"


// Return
const Bibliografía = () => {
    return (
        <>
            <Helmet>
                <title>
                    Bibliografía &mdash; Tiempos de floración de variedades de Cannabis cultivadas en La Pampa.
                </title>
            </Helmet>
            <Menu />
            <Header />
            <main className="c-main c-main-bibliografía">
                <section className="c-section c-section-references">
                    <Container fluid>
                        <Row>
                            <Col sm="12">
                                {DataReferences.map( ( element ) => (
                                    <div className="c-reference-section" key={element.slug}>
                                        <div className="c-reference-title d-block w-100">
                                            <h3 className="text-primary fw-normal mb-2">{element.text}</h3>
                                        </div>
                                        <div className="c-reference-content d-block w-100">
                                            <ul className="list-unstyled m-0 p-0 ps-4 d-flex flex-column gap-1">
                                                { element.data.map( ( item ) => 
                                                    <li key={item.id} className="d-flex gap-2">
                                                        <p dangerouslySetInnerHTML={ { __html: item.text } } />
                                                    </li>
                                                ) }
                                            </ul>
                                        </div>
                                    </div>
                                ) ) }
                            </Col>
                        </Row>
                    </Container>
                </section>
            </main>
            <Footer />
        </>
    );
}

// Export
export default Bibliografía;
