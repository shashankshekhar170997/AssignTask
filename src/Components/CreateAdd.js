import React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";

const label = { inputProps: { "aria-label": "Checkbox demo" } };
const CreateAdd = () => {
  return (
    <>
      <div style={{ border: "1px solid black", margin: "20px" }}>
        <div style={{ display: "flex", margin: "20px" }}>
          <span style={{ fontWeight: "bolder" }}>Create Ads</span>
          <div>
            <Box
              sx={{
                margin: 10,
                marginLeft: 25,
                width: 250,
                height: 150,
                padding: 12,
                border: 1,
              }}
            >
              <div
                style={{
                  // backgroundColor: "red",
                  marginLeft: "200px",
                  justifyContent: "flex-start",
                  marginRight: "100px",
                  // marginRight: "200px",
                }}
              >
                <div style={{ backgroundColor: "blue" }}>
                  <Checkbox
                    {...label}
                    style={{
                      position: "relative",
                      marginLeft: "-300px",
                      marginTop: "-170px",
                    }}
                  ></Checkbox>
                </div>
              </div>

              <div>
                <Button
                  variant="outlined"
                  style={{
                    top: "500px",
                    marginLeft: "50px",
                    position: "fixed",
                  }}
                >
                  Create Text Ad
                </Button>
              </div>
            </Box>
          </div>

          <Box
            sx={{
              margin: 10,
              width: 250,
              height: 150,
              padding: 12,
              border: 1,
            }}
          >
            <div>
              <Checkbox
                {...label}
                style={{
                  position: "relative",
                  marginLeft: "-100px",
                  marginTop: "-170px",
                  // marginRight: "-300px",
                }}
              ></Checkbox>
            </div>
            <Button
              variant="outlined"
              placeholder="Text Ad"
              style={{ top: "500px", marginLeft: "50px", position: "fixed" }}
            >
              Create Media Ad
            </Button>{" "}
          </Box>
        </div>
        <div style={{ margin: "10px" }}>
          <Stack
            spacing={2}
            direction="row"
            style={{ justifyContent: "flex-end", marginRight: "100px" }}
          >
            <Button variant="contained">Next</Button>
          </Stack>
        </div>
      </div>
    </>
  );
};

export default CreateAdd;
