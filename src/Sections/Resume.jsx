// Resume.jsx

// React
// eslint-disable-next-line no-unused-vars
import React from "react";

// Bootstrap Container
import { Container, Row, Col } from "react-bootstrap";

// Return
const Resume = () => {
    return (
        <>
            <section className="c-section c-section-resume" id="section-resume">
                <Container fluid>
                    <Row>
                        <Col sm="12">
                            <h3 className="c-section-title">Resumen</h3>
                            <p>
                                Los nuevos marcos normativos de las leyes 27.350 y 27.669 sobre uso terapéutico, investigación científica y producción
                                industrial de <em>Cannabis sativa</em> han generado una serie de interrogantes a ser resueltos antes de poner a andar
                                la maquinaria productiva para satisfacer un mercado creciente a nivel nacional e internacional.
                            </p>
                            <p>
                                Principalmente, se deben obtener datos sobre productividad y rendimiento a las condiciones ambientales locales (Santa
                                Rosa, La Pampa) de las distintas variedades de Cannabis que existen en el mercado, al igual que otras características
                                como los tiempos de floración, quimiotipos y perfil de terpenos. A pesar de que algunas de estas características
                                comenzaron a ser indagadas, como el quimiotipo de 16 variedades cultivadas por usuarios terapéuticos, este es escaso y
                                fraccionado. El conocimiento de los tiempos de floración es de suma importancia para llevar a cabo un cultivo en
                                óptimas condiciones. Sin embargo, en la actualidad se deben profundizar los estudios a fin de determinar los tiempos
                                de floración y como varían estos en función de diferentes parámetros ambientales.
                            </p>
                            <p>
                                Es por esto que en el presente trabajo se analizan los tiempos de floración de 191 individuos de 55 variedades de{" "}
                                <em>Cannabis sativa</em> y las características ambientales del cultivo en el periodo septiembre 2019 – septiembre
                                2021. Se identificó el periodo en días de la duración del proceso de floración. Se caracterizaron las condiciones
                                ambientales del cultivo interior o <em>indoor</em> a partir del registro de las condiciones de temperatura, humedad
                                relativa, iluminación, agua y fertilización.
                            </p>
                            <p>
                                De las 55 variedades analizadas el rango del periodo de floración osciló entre los 41 y los 86 días, con un promedio
                                de 58 días de floración. El 50% de los individuos presentan tiempos de floración de entre 53 y 63 días.
                            </p>
                            <p>
                                Lo resultados de este trabajo son fundamentales para generar ciencia básica asociada al desarrollo de la industria del{" "}
                                <em>Cannabis</em> en La Pampa impulsado, entre otras instituciones, por la UNLPam. Permitiendo la realización de
                                protocolos de cultivo para abordar la producción, tanto estatal como particular en el marco de las nuevas
                                legislaciones. Estos protocolos son indispensables para la región central de Argentina ya que la provincia de La Pampa
                                cuenta con varios proyectos productivos habilitados por el INASE con categoría A para el desarrollo y registro de
                                genéticas pampeanas al igual que emprendimientos categoría F que permiten la venta legal de semillas y plantines de
                                Cannabis a usuarios de REPROCANN, ONGs y proyectos de Investigación acreditados.
                            </p>
                            <p>
                                <strong>Palabras claves:</strong> <ins>Cannabis</ins>, <ins>floración</ins>, <ins>marihuana</ins>.
                            </p>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
};

// Export
export default Resume;
