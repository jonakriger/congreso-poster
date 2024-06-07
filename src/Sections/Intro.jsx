// Intro.jsx

// React
// eslint-disable-next-line no-unused-vars
import React from "react";

// Bootstrap Container
import { Container, Row, Col } from "react-bootstrap";

// Return
const Intro = () => {
    return (
        <>
            <section className="c-section c-section-intro" id="section-intro">
                <Container fluid>
                    <Row>
                        <Col sm="12">
                            <h3 className="c-section-title">Introducción</h3>
                            <p>
                                La planta de <em>Cannabis sativa</em> acompaña al hombre desde sus orígenes más remotos. Esta planta formó parte de la
                                revolución del neolítico, momento en el que la especie humana pasa de ser nómade a sedentaria a partir del manejo de
                                los cultivos (Merino 2000).
                            </p>
                            <p>
                                El Cannabis fue proveedor de alimento, ropa y medicina durante 15.000 años por lo menos. En todo este tiempo, y a la
                                par de la expansión del ser humano se fue distribuyendo por distintas zonas de todo el planeta: originada en China, la
                                planta se distribuyó desde Asia por la ruta de la seda hacia Europa y África. Llega a América con el desembarco de los
                                europeos a fines del siglo XV y posteriormente, con los esclavos traídos desde África. (Ramos y Fernández 2000).
                            </p>
                            <p>
                                La variabilidad ambiental entre los lugares donde fueron cultivadas, junto a diversos criterios de selección
                                artificial, produjeron cambios significativos en la estructura de esta planta. Hay variedades de Cannabis
                                seleccionadas para producción de fibra, otras para pasta celulosa, de granos y de compuestos medicinales (Grinspoon,
                                1997). También, el fotoperiodo en las distintas latitudes dio origen a los 3 tipos principales de variedades:{" "}
                                <em>Cannabis sativa L subsp sativa</em>, de zonas tropicales, <em>Cannabis sativa L subsp rudelaris Janish</em> de
                                zonas con veranos de corta duración y con fotoperiodos largos; y <em>Cannabis sativa L subsp indica</em> (Lam.), de
                                zonas mediterráneas y clima templado (Oliveto y Vitale, 2018).
                            </p>
                            <p>
                                Las plantas de climas tropicales, suelen tener floraciones más extensas ya que las condiciones ambientales suelen
                                tener poca variación en el año, tanto en humedad ambiental como en horas de luz por día.
                            </p>
                            <p>
                                Las plantas índicas poseen tiempos de floración más corto, cercano a los dos meses. Además, el ambiente en el que
                                desarrollan de manera silvestre (a los pies de la cordillera del Himalaya, en el norte de África), son regiones con
                                gran amplitud térmica, baja humedad y alta radiación. (Oliveto y Vitale, 2018)
                            </p>
                            <p>
                                Las plantas <em>rudelaris</em>, provienen de la zona de Kazajistán, en latitudes muy altas del hemisferio norte, los
                                veranos son cortos y no permiten el desarrollo de plantas fotoperiódicas, con lo que las variedades adaptadas a este
                                medio tienen la capacidad de florar de manera “automática” ya que no requiere disminución de las horas de luz para
                                realizar el proceso de floración. (Oliveto y Vitale, 2018)
                            </p>
                            <p>
                                El cruce entre plantas a lo largo de la historia, ha generado una gran diversidad en cuanto a los tiempos de
                                floración. (Oliveto y Vitale, 2018). Conocer estos estos valores de las distintas variedades estudiadas, genera una
                                mejor planificación de los cultivos, tanto de usuarios terapéuticos, ONGs, proyectos de investigación o de producción
                                a escala industrial. Trabajar con plantas cuyos tiempos de floración sean más breves, permiten cosechar más veces en
                                el año y hacer más eficiente el proceso productivo.
                            </p>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
};

// Export
export default Intro;
