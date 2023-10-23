import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(Campaigns, Clicks, Cost, Conversion, Revenue) {
  return { Campaigns, Clicks, Cost, Conversion, Revenue };
}

const rows = [
  createData("Cosmetics", 712, " USD 4,272", 8, "USD 16,568"),
  createData("Serum", 712, " USD 4,272", 8, "USD 16,568"),
  createData("Facewash", 712, " USD 4,272", 8, "USD 16,568"),
  createData("Shampoos", 712, " USD 4,272", 8, "USD 16,568"),
  createData("Conditioners", 712, " USD 4,272", 8, "USD 16,568"),
];
const TableInsight = () => {
  return (
    <div style={{ display: "flex" }}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Campaigns </TableCell>
              <TableCell align="right">Clicks</TableCell>
              <TableCell align="right">Cost</TableCell>
              <TableCell align="right">Conversion</TableCell>
              <TableCell align="right">Revenue</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.Campaigns}
                </TableCell>
                <TableCell align="right">{row.Clicks}</TableCell>
                <TableCell align="right">{row.Cost}</TableCell>
                <TableCell align="right">{row.Conversion}</TableCell>
                <TableCell align="right">{row.Revenue}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};
export default TableInsight;
