import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";

import { UnControlled as CodeMirror } from "react-codemirror2";
require("codemirror/mode/javascript/javascript");
require("codemirror/mode/python/python");

export const Interpreter = (props) => {
  let initialVal = localStorage["code"] || getInitial();
  const [val, setVal] = useState(initialVal);
  const [output, setOutput] = useState("");
  const { width } = useWindowDimensions();
  return (
    <>
      <div className="container-fluid">
        <div className="row no-gutters">
          <div className="col-lg-6">
            <SelectionBox
              val={val}
              output={output}
              setOutput={setOutput}
              setVal={setVal}
            />
            <InputBox val={val} setVal={setVal} />
          </div>
          <div
            className={`col-lg-6 boxed ${width > 991 ? "border-left" : ""} `}
          >
            <div className="container-fluid interpreter-input-top">
              <div className="col padding-output">Output</div>
            </div>
            <div className="int-output">
              <div className="container py-2">{output}</div>
            </div>
          </div>
        </div>
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
          localStorage["code"] = value;
        }}
      />
    </>
  );
};

const SelectionBox = ({ output, setOutput, val, setVal }) => {
  const { width } = useWindowDimensions();
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
    <div className="container-fluid interpreter-input-top">
      {width > 474 ? (
        <div className="row no-gutter">
          <div className="col col-lg-2 pt-2 file-name py-1 text-center underline">
            Main.ouipp
          </div>
          <div className="col col-m-8 py-1 text-left">
            <Dropdown>
              <Dropdown.Toggle variant="outline-light" id="dropdown-basic">
                Example Programs
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item
                  onClick={() => {
                    setVal(getInitial());
                    localStorage["code"] = getInitial();
                  }}
                >
                  Intro
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => {
                    setVal(getFizzBuzz());
                    localStorage["code"] = getFizzBuzz();
                  }}
                >
                  FizzBuzz
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => {
                    setVal(getFib());
                    localStorage["code"] = getFib();
                  }}
                >
                  Fibonacci Sequence
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div className="col col-lg-2 py-1 text-center">
            <Button
              variant="outline-success"
              onClick={() => {
                onRun();
              }}
            >
              Run
            </Button>
          </div>
        </div>
      ) : (
        <>
          <div className="row no-gutter">
            <div className="col py-1 text-center">
              <Button
                variant="outline-success"
                onClick={() => {
                  onRun();
                }}
              >
                Run
              </Button>
            </div>
          </div>
          <div className="row no-gutter">
            <div className="col py-1 text-center">
              <Dropdown>
                <Dropdown.Toggle variant="outline-light" id="dropdown-basic">
                  Example Programs
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item
                    onClick={() => {
                      setVal(getInitial());
                      localStorage["code"] = getInitial();
                    }}
                  >
                    Intro
                  </Dropdown.Item>
                  <Dropdown.Item
                    onClick={() => {
                      setVal(getFizzBuzz());
                      localStorage["code"] = getFizzBuzz();
                    }}
                  >
                    FizzBuzz
                  </Dropdown.Item>
                  <Dropdown.Item
                    onClick={() => {
                      setVal(getFib());
                      localStorage["code"] = getFib();
                    }}
                  >
                    Fibonacci Sequence
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>
          <div className="container-fluid">
            <div className="col file-name py-1 text-center underline">
              Main.ouipp
            </div>
          </div>
        </>
      )}
    </div>
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

# run and print result from function
res = fib(10)
print('Resultant Fibonacci Number: ' + res)
    `;
};

const getInitial = () => {
  return `lang:eng #this sets the language, remove for french
str = 'Hello! \\n\\n'
str += 'Welcome to my interpreter for Oui++ \\n\\n'
str += 'Try running with Run, and try'
str += ' choosing a preset program from the list above! :)'
print(str)`;
};

const getFizzBuzz = () => {
  return `lang:eng #this sets the language, remove for french
func fizzBuzz(n) {
  # generic fizzbuzz implementation
  s = ''
  for i -> (1, n + 1) {
    if (i % 3 == 0 && i % 5 == 0) {
      s += 'FizzBuzz\\n'
    } else if (i % 3 == 0) {
      s += 'Fizz\\n'
    } elif (i % 5 == 0) {
      s += 'Buzz\\n'
    } else {
      s += i + '\\n'
    }
  }
  return s
}

# output result
s = fizzBuzz(30)
print(s)`;
};

// WINDOW SIZING HELP
function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
}
