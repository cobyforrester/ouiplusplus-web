import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

import { UnControlled as CodeMirror } from "react-codemirror2";
require("codemirror/mode/javascript/javascript");
require("codemirror/mode/python/python");

export const Interpreter = (props) => {
  let initialVal = getInitial();
  const [val, setVal] = useState(initialVal);
  const [output, setOutput] = useState("");
  return (
    <>
      <div className="m-3">
        <div className="row">
          <div className="col-6">
            <SelectionBox
              val={val}
              output={output}
              setOutput={setOutput}
              setVal={setVal}
            />
            <InputBox val={val} setVal={setVal} />
          </div>
          <div className="col-6">
            <div className="boxed int-output">
              <div className="container py-2">{output}</div>
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

const SelectionBox = ({ output, setOutput, val, setVal }) => {
  const onRun = () => {
    let body = { input: val };
    let options = {
      method: "POST",
      headers: new Headers({
        "content-type": "application/json",
      }),
    };
    options.body = JSON.stringify(body);
    fetch(process.env.REACT_APP_ENDPOINT, options)
      .then((res) => res.text())
      .then((data) => {
        setOutput(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Nav className="ml-auto mr-auto">
          <Button
            variant="outline-success"
            onClick={() => {
              onRun();
            }}
          >
            Run
          </Button>
          <NavDropdown title="Load Example" id="basic-nav-dropdown">
            <NavDropdown.Item
              onClick={() => {
                setVal(getInitial());
              }}
            >
              Intro
            </NavDropdown.Item>
            <NavDropdown.Item
              onClick={() => {
                setVal(getFib());
              }}
            >
              Fibonacci Sequence
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar>
    </>
  );
};

const getFib = () => {
  return `lang:eng #this sets the language, remove for french
func fib(n) {
  # generic function to calculate fibonacci number
  if(n < 2) {
    return n
  }
  arr = [0, 1] + [null] * (n - 1)
  for i -> (2, n + 1) {
      tmp = get(arr, i-1) + get(arr, i-2)
      set(arr, tmp, i)
    }
    return get(arr, n)
}
    
  res = fib(10)
  
  print(res)
    `;
};

const getInitial = () => {
  return `lang:eng #this sets the language, remove for french
str = 'Hello! \\n'
str += 'Welcome to my interpreter for Oui++ \\n'
str += 'Try running with RUN, and try'
str += ' choosing a preset program from the list above! :)'
print(str)`;
};
