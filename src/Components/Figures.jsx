// Figures.jsx

// React
// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from "prop-types";

// Bootstrap React
import { Col, Figure, Ratio, Row } from "react-bootstrap";

// Return
const Figures = ({ dataImages, dataCaption }) => {
    return (
        <>
            <div className="c-figure-container">
                <Figure className="d-block w-100 mt-0 mb-4">
                    <Row className="align-items-center">
                        {dataImages &&
                            dataImages.map((item, index) => (
                                <Col key={index}>
                                    <Ratio aspectRatio="3x4" className="overflow-hidden rounded">
                                        <Figure.Image className="h-100 object-fit-cover" fluid src={item.imagen} alt={item.alt} />
                                    </Ratio>
                                </Col>
                            ))}
                    </Row>
                    <Figure.Caption className="text-center mt-1" dangerouslySetInnerHTML={{ __html: dataCaption }} />
                </Figure>
            </div>
        </>
    );
};

// PropTypes
Figures.propTypes = {
    dataImages: PropTypes.any.isRequired,
    dataCaption: PropTypes.string.isRequired,
};

// Export
export default Figures;
