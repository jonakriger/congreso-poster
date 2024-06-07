// Conclutions.jsx

// React
// eslint-disable-next-line no-unused-vars
import React from "react";

// Cootstrap React
import { Col, Container, Row } from "react-bootstrap";

// Return
const Conclutions = () => {
    return (
        <>
            <section className="c-section c-section-conclutions" id="section-conclutions">
                <Container fluid>
                    <Row>
                        <Col sm="12">
                            <h3 className="c-section-title">Conclusiones</h3>
                            <p>
                                Esta información, junto con los quimiotipos en los que se clasifican las plantas utilizadas con fines terapéuticos y
                                la asociación de dosis en función de los síntomas o patologías que se traten, son sumamente importantes para actuar de
                                guía en cuanto a la proyección de los cultivos necesarios, tanto desde el autocultivo, los cultivos solidarios o los
                                estatales para satisfacer una demanda sanitaria creciente.
                            </p>
                            <p>
                                Las diferencias en los tiempos de floración generan que algunos usuarios puedan tener entre 2 y 3 cosechas al año,
                                mientras que aquellos que utilizan plantas con períodos de floración más breves pueden lograr hasta 5 cosechas
                                anuales.
                            </p>
                            <p>
                                Las plantas de <em>Cannabis sativa</em> presentan una gran diversidad intraespecífica que se manifiesta en las
                                distintas características fenotípicas como los tiempos de floración y los quimiotipos.
                            </p>
                            <p>
                                Esta variabilidad, sugiere que las personas que usan los cultivos de <em>Cannabis sativa</em> con fines terapéuticos
                                en la provincia de La Pampa, poseen una variabilidad intraespecífica muy elevada para tratar las mismas enfermedades.
                            </p>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
};

// Export
export default Conclutions;
