import { PieChart } from "@mui/x-charts/PieChart";
import { useDrawingArea } from "@mui/x-charts/hooks";
import { styled } from "@mui/material/styles";
import TableInsight from "./TableInsight";

const data = [
  { value: 5, label: "A" },
  { value: 10, label: "B" },
  { value: 15, label: "C" },
  { value: 20, label: "D" },
];

const size = {
  width: 500,
  height: 300,
};

const StyledText = styled("text")(({ theme }) => ({
  fill: theme.palette.text.primary,
  textAnchor: "middle",
  dominantBaseline: "central",
  fontSize: 20,
}));

function PieCenterLabel({ children }) {
  const { width, height, left, top } = useDrawingArea();
  return (
    <StyledText x={left + width / 2} y={top + height / 2}>
      {children}
    </StyledText>
  );
}
const AddInsights = () => {
  return (
    <>
      <div style={{ display: "flex" }}>
        <div>
          <TableInsight />
        </div>
        <PieChart series={[{ data, innerRadius: 80 }]} {...size}>
          <PieCenterLabel>Center label</PieCenterLabel>
        </PieChart>
      </div>
    </>
  );
};
export default AddInsights;
