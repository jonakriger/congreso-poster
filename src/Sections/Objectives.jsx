// Objectives.jsx

// React
// eslint-disable-next-line no-unused-vars
import React from "react";

// Bootstrap Container
import { Container, Row, Col } from "react-bootstrap";

// Return
const Objectives = () => {
    return (
        <>
            <section className="c-section c-section-objectives" id="section-objectives">
                <Container fluid>
                    <Row>
                        <Col sm="12">
                            <h3 className="c-section-title">Objetivos</h3>
                            <p>
                                El presente trabajo tuvo como objetivo estimar los tiempos de floración de 55 variedades de Cannabis utilizadas por
                                usuarios terapéuticos de Santa Rosa, La Pampa, cultivadas en condiciones controladas <em>(indoor)</em>. Además,
                                caracterizar los factores ambientales de las condiciones de cultivo y comparar los promedios de los tiempos de
                                floración en días establecidos por el Banco de Semillas con los tiempos reales de floración.
                            </p>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
};

// Export
export default Objectives;
