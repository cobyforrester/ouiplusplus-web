import React, { useState } from "react";

import { UnControlled as CodeMirror } from "react-codemirror2";
require("codemirror/mode/javascript/javascript");
require("codemirror/mode/python/python");

export const Interpreter = (props) => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-6">
            <InputBox />
          </div>
        </div>
      </div>
    </>
  );
};

const InputBox = () => {
  let initialVal = "lang:eng\nprint(10-100)\nfor i -> (0, 100) {\n}";
  const [val, setVal] = useState(initialVal);
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
