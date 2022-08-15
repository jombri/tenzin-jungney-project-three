

/* function Table({ baller, colNames, width = 'auto', height = 'auto' }) {
    return (
        <div>
            {baller.length > 0 && (
                <table cellSpacing={0} style={{width: width, height: height, padding: '5px 10px'}}>
                    <thead>
                        <tr>
                            {colNames.map((headerItem, index) => (
                                <th key={index}>
                                    {headerItem.toUpperCase()}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {Object.values(baller).map((obj, index) => (
                            <tr key={index}>
                                {Object.values(obj).map((value, index2) => (
                                    <td key={index2}>
                                        {value}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    )
}

export default Table;
 */







import React, { useMemo } from "react";
import { useTable } from 'react-table';
import { COLUMNS } from './columns';
import './table.css';

export const Table = ({baller}) => {

    const columns = useMemo(() => COLUMNS, []);
    const data = useMemo(() => baller, []);
    
    const tableInstance = useTable({
        columns,
        data,
    })

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = tableInstance

    return (
        <table {...getTableProps()}>
            <thead>
                {headerGroups.map((headerGroup) => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                    {
                        headerGroup.headers.map((column) => (
                            <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                    ))}
                </tr>
                ))}
            </thead>

            <tbody {...getTableBodyProps()}>
                {
                    rows.map(row => {
                        prepareRow(row)
                        return (
                            <tr {...row.getRowProps()}>
                                {
                                    row.cells.map((cell) => {
                                        return <td {...cell.getCellProps()}>{cell.render('cell')}</td>
                                    })
                                }
                                <td></td>
                            </tr>
                        )
                })}
            </tbody>
        </table>
    )
} 

export default Table;