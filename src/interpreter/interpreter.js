import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

import { UnControlled as CodeMirror } from "react-codemirror2";
require("codemirror/mode/javascript/javascript");
require("codemirror/mode/python/python");

export const Interpreter = (props) => {
  let initialVal = "lang:eng\nprint(10-100)\nfor i -> (0, 100) {\n}";
  const [val, setVal] = useState(initialVal);
  const [output, setOutput] = useState("");
  return (
    <>
      <div className="mx-3">
        <div className="row">
          <SelectionBox output={output} setOutput={setOutput} />
        </div>
        <div className="row">
          <div className="col-6">
            <InputBox val={val} setVal={setVal} />
          </div>
          <div className="col-6">
            <div className="boxed">
              <div className="container">{output}</div>
            </div>
          </div>
        </div>
        <div className="row m-1"></div>
      </div>
    </>
  );
};

const InputBox = ({ val, setVal }) => {
  return (
    <>
      <CodeMirror
        value={val}
        autoCursor={false}
        options={{
          mode: "python",
          theme: "oceanic-next",
          lineNumbers: true,
          autofocus: true,
        }}
        onChange={(editor, data, value) => {
          setVal(value);
        }}
      />
    </>
  );
};

const SelectionBox = ({ output, setOutput }) => {
  const onRun = () => {
    // FETCH REQUEST TO BACKEND
  };
  return (
    <>
      <div className="col-12 my-2">
        <Navbar bg="dark" variant="dark" expand="lg">
          <Nav className="ml-auto mr-auto">
            <Button
              variant="outline-success"
              onClick={() => {
                onRun();
                console.log("here");
              }}
            >
              Run
            </Button>
            <NavDropdown title="Load Example" id="basic-nav-dropdown">
              <NavDropdown.Item
                onClick={() => {
                  console.log("here");
                }}
              >
                Action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar>
      </div>
    </>
  );
};
