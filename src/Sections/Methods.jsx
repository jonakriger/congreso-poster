// Methods.jsx

// React
// eslint-disable-next-line no-unused-vars
import React from "react";

// Bootstrap React
import { Col, Container, Row } from "react-bootstrap";

// Component
import ChartLine from "../Components/ChartLine";
import Figures from "../Components/Figures";

// Img
import Figure01_01 from "../Images/figura-01-01.jpg";
import Figure01_02 from "../Images/figura-01-02.jpg";
import Figure02_01 from "../Images/figura-02-01.jpg";
import Figure02_02 from "../Images/figura-02-02.jpg";

// Data
import { DataHumidity } from "../Data/DataHumidity";
import { DataTemperature } from "../Data/DataTemperature";

// Return
const Methods = () => {
    return (
        <>
            <section className="c-section c-section-methods" id="section-methods">
                <Container fluid>
                    <Row>
                        <Col sm="12">
                            <h3 className="c-section-title">Materiales y métodos</h3>
                            <p>
                                Se analizaron 191 plantas, cultivadas en la modalidad interior o indoor en la localidad de Santa Rosa, La Pampa. Esta
                                se encuentra en la región fitogeográfica conocida como monte o caldenar, un bosque xerófilo donde el clima se
                                caracteriza por ser seco con una gran amplitud térmica. La zona recibe una precipitación anual promedio de entre 600 y
                                700 mm, las lluvias se concentran durante el periodo estival. Los veranos son cálidos y durante los inviernos suelen
                                caer heladas que llevan la temperatura de exterior a valores de hasta - 10ºC (Lell J.D., 2005).
                            </p>
                            <p>
                                Se determinó el tiempo de floración mediante el número de días que tenía la planta cuando se cosechó, los días
                                establecidos por el banco, la relación entre pistilos nuevos y secos y la coloración de las cabezas de los tricomas
                                glandulares.
                            </p>
                            <p>Los cultivos de interior se realizaron en carpas de cultivo Homebox Q120 de 1.2 m2 x 2 m de altura.</p>
                            <p>
                                Se utilizó para la etapa de <strong>vegetativo</strong>: Lámpara de bajo consumo (Fluorescente Compacto) General
                                Electric de 105W, con espectro 6500 K y 6350 lm.
                            </p>
                            <p>
                                Para la etapa de <strong>floración</strong> en interior: Lámpara LEC (light emiting ceramic) Philips Master Colour
                                315W, espectro 3100 K y 38.700 lm. durante los periodos de alta temperatura y durante el periodo marzo – noviembre se
                                utilizó lámpara HPS 400W Philips Son-T de 50.850 lm de potencia.
                            </p>
                            <p>
                                Los cultivos fueron estandarizados en lo que respecta a temperatura y humedad siendo estas 25,5 °C +/- 8,5°C y 45% +/-
                                35% respectivamente, tal como se muestra en los <strong>Gráficos 1 y 2</strong>.
                            </p>
                            <ChartLine
                                chartData={{
                                    labels: DataHumidity.map((data) => data.sdate),
                                    datasets: [
                                        {
                                            label: "Humedad Relativa Mínima",
                                            data: DataHumidity.map((data) => data.min),
                                            backgroundColor: "#336535",
                                            borderColor: "#336535",
                                        },
                                        {
                                            label: "Humedad Relativa Máxima",
                                            data: DataHumidity.map((data) => data.max),
                                            backgroundColor: "#A3BD31",
                                            borderColor: "#A3BD31",
                                        },
                                    ],
                                }}
                                chartOptions={{
                                    scales: {
                                        y: {
                                            min: 0,
                                            grid: {
                                                display: true,
                                            },
                                        },
                                    },
                                    plugins: {
                                        tooltip: {
                                            callbacks: {
                                                title: function (TooltipItems) {
                                                    let newTitle = "";
                                                    TooltipItems.forEach((TooltipItem) => {
                                                        newTitle += TooltipItem.dataset.label;
                                                    });
                                                    return newTitle;
                                                },
                                                label: function (TooltipItem) {
                                                    let newLabel = DataHumidity[TooltipItem.dataIndex].date;
                                                    return newLabel;
                                                },
                                                footer: function (TooltipItems) {
                                                    let newFooter = "";
                                                    TooltipItems.forEach((TooltipItem) => {
                                                        newFooter += TooltipItem.formattedValue;
                                                    });
                                                    return newFooter;
                                                },
                                            },
                                        },
                                    },
                                }}
                                chartTitle={"Humedad Relativa en <em>Indoor</em>"}
                                chartLegend={
                                    "<strong>Gráfico 1:</strong> Muestra los valores de humedad relativa en el indoor durante el periodo septiembre 2019 – septiembre 2021."
                                }
                            />
                            <ChartLine
                                chartData={{
                                    labels: DataTemperature.map((data) => data.sdate),
                                    datasets: [
                                        {
                                            label: "Humedad Relativa Mínima",
                                            data: DataTemperature.map((data) => data.min),
                                            backgroundColor: "#336535",
                                            borderColor: "#336535",
                                        },
                                        {
                                            label: "Humedad Relativa Máxima",
                                            data: DataTemperature.map((data) => data.max),
                                            backgroundColor: "#A3BD31",
                                            borderColor: "#A3BD31",
                                        },
                                    ],
                                }}
                                chartOptions={{
                                    scales: {
                                        y: {
                                            min: 0,
                                            max: 40,
                                            grid: {
                                                display: true,
                                            },
                                        },
                                    },
                                    plugins: {
                                        tooltip: {
                                            callbacks: {
                                                title: function (TooltipItems) {
                                                    let newTitle = "";
                                                    TooltipItems.forEach((TooltipItem) => {
                                                        newTitle += TooltipItem.dataset.label;
                                                    });
                                                    return newTitle;
                                                },
                                                label: function (TooltipItem) {
                                                    let newLabel = DataTemperature[TooltipItem.dataIndex].date;
                                                    return newLabel;
                                                },
                                                footer: function (TooltipItems) {
                                                    let newFooter = "";
                                                    TooltipItems.forEach((TooltipItem) => {
                                                        newFooter += TooltipItem.formattedValue;
                                                    });
                                                    return newFooter;
                                                },
                                            },
                                        },
                                    },
                                }}
                                chartTitle={"Temperaturas mínimas y máximas del <em>indoor</em>"}
                                chartLegend={
                                    "<strong>Gráfico 2:</strong> Muestra los valores máximos y mínimos registrados en el indoor durante el periodo septiembre 2019 – septiembre 2021."
                                }
                            />
                            <p>
                                Se utilizó agua de red, a la cual se le corrigió tanto el pH (llevándolo a valores de entre 6.3 y 5.8) con ácidos
                                débiles como el acético o ascórbico, así como la electroconductividad (EC), llevándola a valores de entre 800 y 1000
                                uS con agua destilada. Esta técnica fue implementada, ya que en el área de estudio el agua disponible es clasificada
                                como agua dura, con un alto contenido de sales de magnesio y calcio, y cuyo pH presenta valores entre 8 y 9, lo que
                                dificulta la absorción de algunos nutrientes como el zinc, el boro y el hierro, cuyos valores de pH óptimo de
                                absorción están por debajo de 6. Además, esta posee una EC de entre 1200 y 1400 microSiemens (µS), que antes de ser
                                distribuida es mezclada con agua proveniente de perforaciones del acuífero Anguil – Catriló. Si bien existen variantes
                                en la EC y el pH del agua en distintas zonas de la ciudad, los rangos se ubican entre los 1500 y 1600 µS.
                            </p>
                            <p>
                                Las plantas en estado vegetativo, para las macetas de 3 litros (L) se utilizó 0.7 L por riego en una frecuencia de
                                entre 5 y 12 días.
                            </p>
                            <p>Para las macetas de 15-20 L se utilizó 2,5 L por riego en una frecuencia de entre 7 y 15 días.</p>
                            <p>
                                Durante la fase de crecimiento vegetativo, se aplican suplementos ricos en nitrógeno de forma asimilable cada 7-10
                                días (Phito N y Myr N). En una dosificación de 5 cc por litro de agua.
                            </p>
                            <p>
                                Una vez que las plantas adquieren la altura para ingresar a la etapa de floración, unos (35 cm en interior) se
                                cortaron las ramas más bajas con el fin de obtener nuevamente esquejes o gajos y de mejorar la distribución de
                                recursos en la planta.
                            </p>
                            <p>
                                El enraizamiento de los esquejes o gajos se realizaron en macetas Nº 10 de plástico soplado, utilizando hormona
                                enraizante (Phitoclone), en perlita como sustrato y bajo la lámpara de crecimiento vegetativo (BC 105W, 6400K). Entre
                                los 10 y 15 días dependiendo de las variedades o cepas y de la temperatura, los esquejes ya muestran sus raíces. Se
                                colocan en las mismas macetas, pero reemplazando la perlita por un sustrato elaborado en base a 3 partes de turba, 2
                                de perlita, 1 de vermiculita, 2 compost y 2 humus.
                            </p>
                            <p>
                                Luego de otros 10 o 15 días fueron trasplantados a maceta de 3 L con el mismo sustrato y se les aplicó un
                                bioestimulante radicular que contiene Micorrizas, <em>Azospirillum</em> y <em>Pseudomonas</em> (Phitogro).
                            </p>
                            <p>
                                Las plantas fueron puestas bajo lámpara de bajo consumo a un régimen de 18 hs de luz y 6 de oscuridad durante 45 a 60
                                días.
                            </p>
                            <p>
                                Las plantas, para pasar a floración, fueron trasplantadas de una maceta de 3 L a una de 15 L con un sustrato igual al
                                utilizado en vegetativo. El régimen lumínico pasa a ser de 12 horas de luz y 12 horas de oscuridad bajo lámpara HPS de
                                400W o LEC de 315W dependiendo de la época del año.
                            </p>
                            <p>
                                Si bien no hay diferencias en los tiempos de floración en las plantas cultivadas en distintos momentos del año, la
                                variación en el espectro lumínico de las lámparas (2700K el HPS y 3100K el LEC) generaron diferencias en cuanto al
                                grado de compactación de la flor: las cultivadas con LEC presentan inflorescencias más alargadas, tal como se puede
                                ver en la <strong>Figura 1</strong>.
                            </p>
                            <Figures
                                dataImages={[
                                    {
                                        imagen: Figure01_01,
                                        alt: "Foto de Variedad Chocolope (banco DNA Genetic) cultivada con un HPS 400",
                                    },
                                    {
                                        imagen: Figure01_02,
                                        alt: "Foto de Variedad Chocolope (banco DNA Genetic) cultivada con LEC 315W",
                                    },
                                ]}
                                dataCaption={
                                    "<strong>Figura 1:</strong> Dos inflorescencias de esquejes de la variedad Chocolope del banco DNA Genetics. A) cultivada con un HPS 400W y B) cultivada con LEC 315W. Se observan diferencias en la compactación de la flor."
                                }
                            />
                            <p>
                                Durante la primera etapa de la floración, que va desde la aparición de los primeros pistilos hasta la mitad del ciclo
                                de floración (4 a 6 semanas) se utilizaron fertilizantes ricos en fósforo y potasio (Myr PK, PhitoFós).
                            </p>
                            <p>
                                Durante la segunda etapa de la flora (mitad del ciclo de floración hasta últimas 2 semanas antes de la cosecha),
                                fueron utilizados fertilizantes ricos en potasio e hidratos de carbono (Melaza No Stress).
                            </p>
                            <p>Por último, las plantas fueron cosechadas teniendo en cuenta los siguientes criterios:</p>
                            <ul>
                                <li>
                                    <p>
                                        Cuando presentaban un 80% de los pistilos secos, con los cálices hinchados y cubiertos de tricomas, tal como
                                        se muestra en la <strong>Figura 2</strong>.
                                    </p>
                                </li>
                                <li>
                                    <p>El tiempo de floración en días o semanas estimado por el Banco de Semillas.</p>
                                </li>
                                <li>
                                    <p>El tiempo de floración real en días o semanas.</p>
                                </li>
                                <li>
                                    <p>
                                        La coloración del tricoma: el color del ápice del tricoma glandular varía de los colores transparente al
                                        blanquecino y finalmente al ámbar. Cuando hay presencia de tricomas de esta última coloración en un porcentaje
                                        de entre el 10 y el 20 % se cosecha.
                                    </p>
                                </li>
                            </ul>
                            <Figures
                                dataImages={[
                                    {
                                        imagen: Figure02_01,
                                        alt: "Foto de variedad Red Mandarine con 59 días de floración.",
                                    },
                                    {
                                        imagen: Figure02_02,
                                        alt: "Foto de variedad Tangie x Lemon skunk con 63 días de floración",
                                    },
                                ]}
                                dataCaption={
                                    "<strong>Figura 2:</strong> Inflorescencias de Canabis sativa. A) Red Mandarine con 59 días de floración. B) Tangie x Lemon skunk con 63 días de floración."
                                }
                            />
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
};

// Export
export default Methods;
