import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { dark, docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

export const Interpreter = ({ props }) => {
  return (
    <>
      <InputBox />
    </>
  );
};

const InputBox = () => {
  return (
    <>
      <SyntaxHighlighter showLineNumbers language="javascript" style={docco}>
        {"print(x) \nprint(10 + 100)"}
      </SyntaxHighlighter>
    </>
  );
};
