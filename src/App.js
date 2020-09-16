import React from "react";
import "./App.css";
import "./documentation/documentation.css";
import "./interpreter/interpreter.css";
import "./base/base.css";

import "codemirror/lib/codemirror.css";
import "codemirror/theme/oceanic-next.css";

import { HashRouter as Router, Route, Switch } from "react-router-dom";

import { DocumentationBodyEng } from "./documentation";
import { Interpreter } from "./interpreter";
import { LinkTo } from "./base";

function App() {
  return (
    <>
      <Router>
        <div className="App">
          <div>
            <LinkTo props={{ location: "location" }} />
            <Switch>
              <Route exact path="/interpreter" component={Interpreter} />
              <Route exact path="/" component={DocumentationBodyEng} />
              {/* ID ABOVE IS ID FOR CORRESPONDING PROJECT */}
            </Switch>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
