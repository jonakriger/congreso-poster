// Results.jsx

// React
// eslint-disable-next-line no-unused-vars
import React from 'react';

// Bootstrap React
import { Col, Container, Row } from 'react-bootstrap';

// Components
import Tables from "../Components/Tables";
import Chartbloom from "../Components/Chartbloom";
import ChartVarietes from "../Components/ChartVarietes";

// Data
import { DataVarietes } from "../Data/DataVarietes";
import { DataBloom } from "../Data/DataBloom";

// Return
const Results = () => {
    return (
        <>
            <section className="c-section c-section-results" id="section-results">
                <Container fluid>
                    <Row>
                        <Col sm="12">
                            <h3 className="c-section-title">Resultados</h3>
                            <h4 className="c-section-subtitle">Tiempos de floración</h4>
                            <p>Se registraron los tiempos de floración de 191 individuos correspondientes a 55 variedades.</p>
                            <p>Se promediaron los días de floración de cada variedad. En la <strong>Tabla 1</strong> se muestra la cantidad de individuos por variedad y el promedio en días de floración de cada una de ellas.</p>
                            <Tables
                                tableData={DataVarietes}
                                tableCaption={'<strong>Tabla 1:</strong> Número de individuos por variedad y promedio de días de floración'}
                            />
                            <p>
                                De las 55 variedades analizadas, podemos afirmar que el rango de los periodos de floración va entre los 41 y los 86 días, con un promedio de 58 días de floración. El 50% de los individuos presentan tiempos de floración de entre 53 y 63 días, como lo resume el <strong>Gráfico 3</strong>.
                            </p>
                            <Chartbloom
                                chartData={DataBloom}
                                chartTitle={'Días de floración'}
                                chartLegend={'<strong>Gráfico 3:</strong> El 50% de las variedades analizadas florecen entre los 53 y 63 días. El tiempo mínimo de floración es de 41 días y el máximo de 78. Unas pocas variedades tuvieron tiempos de flora entre los 78 y los 86 días.'}
                            />
                            <p>
                                El <strong>Gráfico 4</strong> muestra la comparativa entre el promedio de días a los que fueron cosechadas las plantas y el promedio de días estimado por el banco de semillas que la produce. Las que no presentan comparativas (barras celestes) es porque son cruces de usuarios y cultivadores, por lo tanto, no tenemos tiempos de floración estimados.
                            </p>
                            <ChartVarietes
                                chartData={DataVarietes}
                                chartTitle={'Variedades y sus días de floración'}
                                chartLegend={'<strong>Gráfico 4:</strong> Las barras celestes muestran los promedios de días de floración a los que fueron cosechadas cada variedad y las barras naranjas, los días de floración estimados por el banco de semillas que la produce.'}
                            />
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
}

// Export
export default Results;