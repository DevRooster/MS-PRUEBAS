import React from 'react'
import "./TableDash.css"
const TableDash = ({columnas, datos}) => {
    return (
        <table class="dash-table">
            <thead>
            <tr>
                    {/* Mapear sobre las columnas para generar las columnas del encabezado */}
                    {columnas.map((columna, index) => (
                        <th key={index}>{columna}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {/* Aquí puedes colocar el contenido del cuerpo de la tabla */}
                {datos.map((fila, index) => (
                    <tr key={index}>
                        {/* Mapear sobre los datos de cada fila para generar las celdas */}
                        {fila.map((dato, index) => (
                            <td key={index}>{dato}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default TableDash
