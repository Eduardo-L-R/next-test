import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "@mui/material";

export const TableData = ({ data }) => {
  return (
    <TableContainer>
      <h3>Results Today:</h3>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>
              <h2>Indicador</h2>
            </TableCell>
            <TableCell>
              <h2>Nombre</h2>
            </TableCell>
            <TableCell>
              <h2>Valor</h2>
            </TableCell>
            <TableCell>
              <h2>Fecha</h2>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Object.entries(data).map(([key, value]) => {
            return (
              <TableRow key={key}>
                <TableCell>{key}</TableCell>
                <TableCell>{value.nombre ? value.nombre : value}</TableCell>
                <TableCell>{value.valor}</TableCell>
                <TableCell>{value.fecha}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export { TableData as default };
