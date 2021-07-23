import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {Table} from "react-bootstrap";

export default function TableResult(promps) {
    return (
        <Table responsive>
            <thead>
                <tr>
                    <th>#</th>
                    {Array.from({length: promps.tableRow.length}).map(
                        (_, index) => (
                            <th key={index}>{promps.tableRow[index]}</th>
                        )
                    )}
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    {Array.from({length: promps.tableData.length}).map(
                        (_, index) => (
                            <td key={index}>{promps.tableData[index]} </td>
                        )
                    )}
                </tr>
            </tbody>
        </Table>
    );
}
