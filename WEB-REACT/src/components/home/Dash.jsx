import BotonNav from "../BotonNav";
import TableDash from "../TableDash";
import BotonExit from "../BotonExit";
import Exit from "../icons/Exit";
import Add from "../icons/Add";

export function Dash() {
  const colEncabezado = ['Nombre', 'Año'];
  const datos = [
    ['Dato 1', 'Dato 2'],
    ['Dato 4', 'Dato 5']
  ];

  return (
    <body>
      <div className="dash-container">
        <div class="dash-sidebar">
          <BotonNav nombreNav={"Matricula"} />
          <BotonNav nombreNav={"Matricula"} />
          <BotonNav nombreNav={"Matricula"} />
          <BotonNav nombreNav={"Matricula"} />
          <BotonNav nombreNav={"Matricula"} />
          <BotonNav nombreNav={"Matricula"} />
          <BotonNav nombreNav={"Matricula"} />
          <BotonExit exitNav={"Cerrar"} url={"/login"} icon={<Exit />} />
        </div>
        <div className="dash-content">
          <div className="dash-content-buttons">
            <BotonNav nombreNav={"Agregar"} icon={<Add />} />
          </div>
          <TableDash columnas={colEncabezado} datos={datos} />
        </div>
      </div>
    </body >
  );
}
