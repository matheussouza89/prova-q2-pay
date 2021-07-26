import { InputAdornment, TextField } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import React from "react";
import * as homeController from "../../controller/homeController";
import { useState } from "react";
import "./style.css";
import history from "../../util/history";

const Navbar: React.FC = () => {
  const [pesquisa, setPesquisa] = useState<string>("");
  return (
    <>
      <header
        className="navbar navbar-expand-md navbar-light bd-navbar"
        aria-label="Main navigation"
      >
        <nav className="container-xxl flex-wrap flex-md-nowrap">
          <a className="navbar-brand p-0 me-2" href="/" aria-label="Logo">
            <div className="logo"></div>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#textoNavbar"
            aria-controls="textoNavbar"
            aria-expanded="false"
            aria-label="Alterna navegação"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="textoNavbar">
            <ul className="navbar-nav flex-row flex-wrap ms-md-auto">
              <TextField
                label="Pesquisa"
                onKeyPress={(e) => {
                  if (e.key === "Enter") {
                    if (pesquisa) {
                      homeController.searchFilme(pesquisa);
                    } else {
                      homeController.getAllFilmes(1);
                    }
                    return history.push('/')
                  }
                }}
                onChange={(e) => {
                  setPesquisa(e.target.value);
                }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <SearchIcon
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                          if (pesquisa) {
                            homeController.searchFilme(pesquisa);
                          } else {
                            homeController.getAllFilmes(1);
                          }
                          return history.push('/')
                        }}
                      />
                    </InputAdornment>
                  ),
                }}
              />
              <li className="nav-item col-6 col-md-auto">
                <a className="nav-link p-3" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item col-6 col-md-auto">
                <a className="nav-link p-3" href="/">
                  <span>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="pr-2"
                    >
                      <path
                        d="M15 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H15"
                        stroke="#FFC300"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M10 17L15 12L10 7"
                        stroke="#FFC300"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M15 12H3"
                        stroke="#FFC300"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </span>
                  LogIn
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
