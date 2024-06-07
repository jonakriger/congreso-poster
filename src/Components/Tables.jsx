// Tables.jsx

// React
// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';

// Bootstrap React
import { Table } from 'react-bootstrap';

// Return
const Tables = ({ tableData, tableCaption }) => {
    return (
        <>
            <div className="c-tables-container">
                <Table className='align-middle m-0' size="sm" striped hover responsive>
                    <caption className="text-center" dangerouslySetInnerHTML={ { __html: tableCaption } } />
                    <thead  className="table-dark align-middl" >
                        <tr>
                            { tableData.tableHead.map( ( th, index ) => (
                                <th key={index} scope="col" className={th.id + " fs-small text-center"} colSpan={ ( th.span ) ? th.span : '0' } >
                                    <small>{th.name}</small>
                                </th>
                            ) ) }
                        </tr>
                    </thead>
                    <tbody className="table-group-divider">
                        { tableData.tableBody.map( ( td ) => 
                            <tr key={td.id}>
                                <td  scope="row" className="id pe-0 ps-1 text-center">{td.id}.</td>
                                <td className="name ps-0 text-left" >{td.variedad}</td>
                                <td className="number text-center">{td.individuo}</td>
                                <td className="days text-center">{td.floración}</td>
                            </tr>
                        )}
                    </tbody>
                </Table>
            </div>
        </>
    );
};

// PropTypes
Tables.propTypes = {
    tableData: PropTypes.object.isRequired,
    tableCaption: PropTypes.string.isRequired,
};

// Export
export default Tables;