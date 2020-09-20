import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

export const LinkTo = () => {
  let currPath = useLocation().pathname;
  let message = "";
  let link = "";

  if (currPath === "/interpreter") {
    message = "Link to Documentation";
    link = "/";
  } else {
    message = "Link to Interpreter";
    link = "/interpreter";
  }
  return (
    <>
      <Link to={link}>
        <button className="btn btn-info btn-lg btn-block">{message}</button>
      </Link>
    </>
  );
};

export default LinkTo;