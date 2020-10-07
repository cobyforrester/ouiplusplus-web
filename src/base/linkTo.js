import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

export const LinkTo = ({ language, setLanguage }) => {
  let currPath = useLocation().pathname;
  let message = "";
  let link = "";

  if (currPath === "/interpreter") {
    message = "Documentation Here!";
    link = "/";
  } else {
    message = "Live Interpreter Here!";
    link = "/interpreter";
  }
  return (
    <>
      <div className="container-fluid">
        <div className="row no-gutters container-3 p-2">
          <div className="col col-xs-1">
            <Link to={link} style={{ textDecoration: "none" }}>
              <div className="btn-cust btn-three text-center">
                <span>{message}</span>
              </div>
            </Link>
          </div>
          <div className="col col-lg-9"></div>
          <div className="col col-lg-2 text-right pt-2">
            <button
              className="button5"
              onClick={() => {
                localStorage["language"] = "francais";
                setLanguage("francais");
              }}
            >
              Français
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default LinkTo;
