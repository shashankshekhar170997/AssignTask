import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Select, MenuItem } from "@mui/material";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
const DashBoard = () => {
  return (
    <div>
      <Box
        style={{ border: "1px solid black", margin: "23px" }}
        component="form"
        sx={{
          "& .MuiTextField-root": {
            m: 3,
            width: "50ch",
          },
        }}
        noValidate
        autoComplete="off"
      >
        <div style={{ margin: "23px" }}>
          <span>Create text & Media</span>
        </div>

        <div>
          <TextField
            // id="outlined-multiline-flexible"
            label="Add a heading that would make users insterested"
            placeholder="Heading 01"

            // multiline
            // maxRows={4}
          />

          <TextField
            id="outlined-textarea"
            label="Add a heading that would make users insterested"
            placeholder="Heading 02"
            // multiline
          />
          <TextField
            id="outlined-multiline-static"
            label="Add primary text to help users understand more about your products,services or offers"
            multiline
            placeholder="Description"
            rows={4}
            // defaultValue="Default Value"
          />
        </div>
        <div>
          <TextField
            id="filled-multiline-flexible"
            label="Add your Business name"
            multiline
            placeholder="Business Name"
            maxRows={4}
            // variant="filled"
          />

          <TextField
            id="filled-textarea"
            label="Add the URL of the landing page you want to redirect users to"
            placeholder="Website URL"
            // multiline
            // variant="filled"
          />
          <Select
            // label="Add the URL of the landing page you want to redirect users to"
            sx={{
              marginTop: 3,
              marginLeft: 4,
              width: 350,
              height: 50,
            }}
          >
            <MenuItem value={1}>Red</MenuItem>
            <MenuItem value={2}>Black</MenuItem>
            <MenuItem value={3}>Blue</MenuItem>
            <MenuItem value={4}>Green</MenuItem>
            <MenuItem value={5}>Yellow</MenuItem>
          </Select>
        </div>
        <div style={{ marginBottom: "20px" }}>
          <Stack
            direction="row"
            spacing={3}
            display={"flex"}
            style={{
              justifyContent: "flex-end",
              marginRight: "100px",
              marginTop: "150px",
            }}
          >
            <Button variant="outlined" disabled>
              Back
            </Button>
            <Button variant="contained">Submit</Button>
          </Stack>
        </div>
      </Box>
    </div>
  );
};
export default DashBoard;
