import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

export const LinkTo = () => {
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
          <div class="col col-xs-1">
            <Link to={link} style={{ textDecoration: "none" }}>
              <div class="btn-cust btn-three text-center">
                <span>{message}</span>
              </div>
            </Link>
          </div>
          <div class="col col-lg-9"></div>
          <div className="col col-lg-2 text-right pt-2">
            <button class="button5" onClick={() => alert("Coming soon!")}>
              Français
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default LinkTo;
