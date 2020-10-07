import React from "react";
import { useState } from "react";
import "./App.css";
import "./documentation/documentation.css";
import "./interpreter/interpreter.css";
import "./base/base.css";

import "codemirror/lib/codemirror.css";
import "codemirror/theme/oceanic-next.css";

import { HashRouter as Router, Route, Switch } from "react-router-dom";

import { DocumentationBodyEng, DocumentationBodyFr } from "./documentation";
import { Interpreter, InterpreterFr } from "./interpreter";
import { LinkTo, LinkToFr } from "./base";
require("dotenv").config();

function App() {
  const [language, setLanguage] = useState(
    localStorage["language"] || "english"
  );
  return (
    <>
      <Router>
        <div className="App">
          <div>
            <Switch>
              {language === "english" ? (
                <>
                  <LinkTo language={language} setLanguage={setLanguage} />
                  <Route exact path="/interpreter" component={Interpreter} />
                  <Route exact path="/" component={DocumentationBodyEng} />
                </>
              ) : (
                <>
                  <LinkToFr language={language} setLanguage={setLanguage} />
                  <Route exact path="/interpreter" component={InterpreterFr} />
                  <Route exact path="/" component={DocumentationBodyFr} />
                </>
              )}
            </Switch>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
