import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

export const LinkTo = (props) => {
  const { location } = props;
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
        <div className="container p-4">
          <button className="btn btn-info btn-lg btn-block">{message}</button>
        </div>
      </Link>
    </>
  );
};

export default LinkTo;
