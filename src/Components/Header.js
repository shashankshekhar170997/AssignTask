import * as React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div></div>
      <div style={{ border: "1px solid black", margin: "3px" }}>
        <div>
          <h1 style={{ marginRight: "930px" }}>App Logo</h1>
        </div>
        <ul
          style={{
            display: "flex",
            justifyContent: "flex-end",
            padding: "5px",
            listStyle: "none",
            fontSize: "20px",
          }}
        >
          <li style={{ padding: "5px", marginRight: "10px" }}>
            <Link to="/" style={{ textDecoration: "none" }}>
              {" "}
              DASHBOARD
            </Link>
          </li>
          <li
            style={{
              padding: "5px",
              marginRight: "10px",
            }}
          >
            <Link to="/createAdd" style={{ textDecoration: "none" }}>
              {" "}
              CREATE ADDS
            </Link>
          </li>
          <li style={{ padding: "5px", marginRight: "10px" }}>
            <Link to="/insights" style={{ textDecoration: "none" }}>
              {" "}
              AD INSIGHTS
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};
export default Header;
