import React from "react";
import { Link } from "react-router-dom";

export default function Navbar({
  title = "Title",
  aboutText = "About",
  mode,
  toggleMode,
}) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${mode} bg-${mode}`}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          {title}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/about">
                {aboutText}
              </a>
            </li>
          </ul>
          {/* <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-primary" type="submit">
              Search
            </button>
          </form> */}
          <div className="d-flex">
            <div
              className="bg-primary rounded mx-2"
              onClick={() => {
                toggleMode("primary");
              }}
              style={{ height: "30px", width: "30px", cursor: "pointer" }}
            ></div>
            <div
              className="bg-danger rounded mx-2"
              onClick={() => {
                toggleMode("danger");
              }}
              style={{ height: "30px", width: "30px", cursor: "pointer" }}
            ></div>
            <div
              className="bg-success rounded mx-2"
              onClick={() => {
                toggleMode("success");
              }}
              style={{ height: "30px", width: "30px", cursor: "pointer" }}
            ></div>
            <div
              className="bg-warning rounded mx-2"
              onClick={() => {
                toggleMode("warning");
              }}
              style={{ height: "30px", width: "30px", cursor: "pointer" }}
            ></div>
            <div
              className="bg-dark rounded mx-2"
              onClick={() => {
                toggleMode("dark");
              }}
              style={{ height: "30px", width: "30px", cursor: "pointer" }}
            ></div>
            <div
              className="bg-light rounded mx-2"
              onClick={() => {
                toggleMode("light");
              }}
              style={{ height: "30px", width: "30px", cursor: "pointer" }}
            ></div>
          </div>
          {/* <div
            className={`form-check form-switch text-${
              mode === "light" ? "dark" : "light"
            }`}
          >
            <input
              className="form-check-input"
              type="checkbox"
              id="flexSwitchCheckDefault"
              onChange={() => {
                toggleMode(null);
              }}
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault"
            >
              Enable Darkmode
            </label>
          </div> */}
        </div>
      </div>
    </nav>
  );
}
