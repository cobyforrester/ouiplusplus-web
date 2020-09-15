import React from "react";
import "./App.css";
import "./documentation/documentation.css";
import "./interpreter/interpreter.css";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/oceanic-next.css";
import { DocumentationBody } from "./documentation";
import { Interpreter } from "./interpreter";

function App() {
  return (
    <>
      <Interpreter />
      <DocumentationBody />
    </>
  );
}

export default App;
