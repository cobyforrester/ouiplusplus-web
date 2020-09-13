import React from "react";
const DocumentationBody = ({ props }) => {
  return (
    <>
      <BodyTop />
      <Overview />
      <Variables />
      <Functions />
      <Conditionals />
      <PrimitiveTypes />
      <GeneralOperators />
      <BooleanOperators />
      <KeyWords />
      <Comments />
      <SelectingLanguage />
    </>
  );
};

const BodyTop = () => {
  return (
    <>
      <div className="text-center">
        <h1>Oui++ Documentation</h1>
        <p>By Coby Forrester</p>
      </div>
    </>
  );
};

const Overview = () => {
  return (
    <>
      <div className="container py-2">
        <div className="row">
          <div className="col align-self-center">
            <h3>Overview</h3>
            <p>
              Oui++ is an attempt at a language that is natively in both english
              and french! While it is quite similar to python in structure, it
              has many distinct differences. It is interpreted (by java), and
              dynamically typed. It is obviously a personal project, and yet it
              supports many aspects necessary in general purpose languages!
              Enjoy looking around :)
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col align-self-center border-bottom"></div>
        </div>
      </div>
    </>
  );
};

const KeyWords = () => {
  return (
    <>
      <div className="container py-2">
        <div className="row">
          <div className="col-5 align-self-center">
            <h3>Key Words</h3>
            <p>A list of all keywords used.</p>
            <table className="table table-hover">
              <thead>
                <tr className="borderless">
                  <th>English</th>
                  <th>French</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>print</td>
                  <td>imprimer</td>
                </tr>
                <tr>
                  <td>if</td>
                  <td>si</td>
                </tr>
                <tr>
                  <td>else if, elif</td>
                  <td>ou bien si</td>
                </tr>
                <tr>
                  <td>else</td>
                  <td>sinon</td>
                </tr>
                <tr>
                  <td>for</td>
                  <td>pour</td>
                </tr>
                <tr>
                  <td>while</td>
                  <td>tant que</td>
                </tr>
                <tr>
                  <td>func</td>
                  <td>fonc</td>
                </tr>
                <tr>
                  <td>null</td>
                  <td>tmp</td>
                </tr>
                <tr>
                  <td>len</td>
                  <td>tmp</td>
                </tr>
                <tr>
                  <td>append</td>
                  <td>tmp</td>
                </tr>
                <tr>
                  <td>addAt</td>
                  <td>tmp</td>
                </tr>
                <tr>
                  <td>get</td>
                  <td>tmp</td>
                </tr>
                <tr>
                  <td>remove</td>
                  <td>tmp</td>
                </tr>
                <tr>
                  <td>set</td>
                  <td>tmp</td>
                </tr>
                <tr>
                  <td>put</td>
                  <td>tmp</td>
                </tr>
                <tr>
                  <td>getKeys</td>
                  <td>tmp</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="row">
          <div className="col align-self-center border-bottom"></div>
        </div>
      </div>
    </>
  );
};

const PrimitiveTypes = () => {
  return (
    <>
      <div className="container py-2">
        <div className="row">
          <div className="col align-self-center">
            <h3 className="pb-3">Primitive Types</h3>
            <dl class="row">
              <dt className="col-sm-2">Int</dt>
              <dd className="col-sm-10">
                <p>8 bytes.</p>
              </dd>

              <dt className="col-sm-2">Double</dt>
              <dd className="col-sm-10">
                <p>8 bytes. 15-16 points of precision.</p>
              </dd>

              <dt className="col-sm-2">Boolean</dt>
              <dd className="col-sm-10">
                <p>true (vrai) OR false (faux). Case insensitive.</p>
              </dd>
              <dt className="col-sm-2">String</dt>
              <dd className="col-sm-10">
                <p>
                  '' AND "" valid. \ escapes characters. \n=newline, \t=tab.
                </p>
              </dd>
              <dt className="col-sm-2">List</dt>
              <dd className="col-sm-10">
                <p>Mutable. Ex: ['hello', true, null, [10]]</p>
              </dd>
              <dt className="col-sm-2">Map</dt>
              <dd className="col-sm-10">
                <p>
                  Mutable. Insert order maintained. No duplicates. Ex: $|'x':10,
                  'y':10, true:20|
                </p>
              </dd>
              <dt className="col-sm-2">Null</dt>
              <dd className="col-sm-10">
                <p>
                  Type representing no value. Returned if function returns
                  nothing, can be assigned to variables as well. Case
                  insensitive.
                </p>
              </dd>
            </dl>
          </div>
        </div>
        <div className="row">
          <div className="col align-self-center border-bottom"></div>
        </div>
      </div>
    </>
  );
};

const BooleanOperators = () => {
  return (
    <>
      <div className="container py-2">
        <div className="row">
          <div className="col align-self-center">
            <h3 className="pb-3">Boolean Operators (Return boolean values)</h3>
            <dl class="row">
              <dt className="col-sm-1">{"!"}</dt>
              <dd className="col-sm-11">
                <p>Not operator. Converts booleans to their opposites.</p>
              </dd>
              <dt className="col-sm-1">&&</dt>
              <dd className="col-sm-11">
                <p>
                  AND operator. If two booleans are true, returns true.
                  Otherwise returns false.
                </p>
              </dd>
              <dt className="col-sm-1">||</dt>
              <dd className="col-sm-11">
                <p>
                  OR operator. If of two compared booleans at least one is true
                  returns true. Otherwise returns false.
                </p>
              </dd>
              <dt className="col-sm-1">==</dt>
              <dd className="col-sm-11">
                <p>
                  Checks equality. If numbers compared, compares value.
                  Otherwise compares values as strings.
                </p>
              </dd>
              <dt className="col-sm-1">!=</dt>
              <dd className="col-sm-11">
                <p>
                  Checks inequality. If numbers compared, compares value.
                  Otherwise compares values as strings.
                </p>
              </dd>

              <dt className="col-sm-1">{"<"}</dt>
              <dd className="col-sm-11">
                <p>
                  Less than. If numbers compared, compares value. Otherwise
                  compares values as strings. Invalid for lists, maps, and
                  booleans.
                </p>
              </dd>
              <dt className="col-sm-1">{"<="}</dt>
              <dd className="col-sm-11">
                <p>
                  Less than or equals. If numbers compared, compares value.
                  Otherwise compares values as strings. Invalid for lists, maps,
                  and booleans.
                </p>
              </dd>
              <dt className="col-sm-1">{">"}</dt>
              <dd className="col-sm-11">
                <p>
                  Greater than. If numbers compared, compares value. Otherwise
                  compares values as strings. Invalid for lists, maps, and
                  booleans.
                </p>
              </dd>
              <dt className="col-sm-1">{">="}</dt>
              <dd className="col-sm-11">
                <p>
                  Greater than or equals. If numbers compared, compares value.
                  Otherwise compares values as strings. Invalid for lists, maps,
                  and booleans.
                </p>
              </dd>
            </dl>
          </div>
        </div>
        <div className="row">
          <div className="col align-self-center border-bottom"></div>
        </div>
      </div>
    </>
  );
};

const GeneralOperators = () => {
  return (
    <>
      <div className="container py-2">
        <div className="row">
          <div className="col align-self-center">
            <h3 className="pb-3">General Operators</h3>
            <dl class="row">
              <dt className="col-sm-1">{"="}</dt>
              <dd className="col-sm-11">
                <p>Assignment operator. Assigns value to variable.</p>
              </dd>
              <dt className="col-sm-1">+=</dt>
              <dd className="col-sm-11">
                <p>
                  Adds variables previous initialized value to newly assigned
                  value. Variable must be previously initialized.
                </p>
              </dd>

              <dt className="col-sm-1">-=</dt>
              <dd className="col-sm-11">
                <p>
                  Subtracts variables newly assigned value from previously
                  assigned value. Variable must be previously initialized.
                </p>
              </dd>

              <dt className="col-sm-1">+</dt>
              <dd className="col-sm-11">
                <p>
                  Addition operation. Integer+Double {"=>"} Double.
                  String+(Anything except Null) {"=>"} String. Valid between
                  Lists as well.
                </p>
              </dd>
              <dt className="col-sm-1">-</dt>
              <dd className="col-sm-11">
                <p>
                  Subtraction operation. Only valid between Integers and
                  Doubles. Integer-Double {"=>"} Double.
                </p>
              </dd>
              <dt className="col-sm-1">*</dt>
              <dd className="col-sm-11">
                <p>
                  Multiplication operation. (Positive Integers including 0)*(a
                  list or string) is valid. [10,2] * 2 = [10,2,10,2], 'hi' * 0 =
                  ''. Integer*Double {"=>"} Double.
                </p>
              </dd>
              <dt className="col-sm-1">/</dt>
              <dd className="col-sm-11">
                <p>
                  Division operation. Integer/Integer {"=>"} Integer. In other
                  words integer division by default. But Integer/Double {"=>"}{" "}
                  Double.
                </p>
              </dd>
              <dt className="col-sm-1">%</dt>
              <dd className="col-sm-11">
                <p>Modulo Operator. Only valid for Integers.</p>
              </dd>
              <dt className="col-sm-1">^</dt>
              <dd className="col-sm-11">
                <p>
                  Power operator. Valid for Integers or Doubles. Integer^Double{" "}
                  {"=>"} Double
                </p>
              </dd>
            </dl>
          </div>
        </div>
        <div className="row">
          <div className="col align-self-center border-bottom"></div>
        </div>
      </div>
    </>
  );
};

const Variables = () => {
  return (
    <>
      <div className="container py-2">
        <div className="row">
          <div className="col align-self-center">
            <h3 className="pb-3">Variables</h3>
            <p>
              Variables do not need to have a type when initialized. Have
              function scope, and NO variable hoisting. Regex for valid custom
              variable names is: [A-Za-z]+[A-Za-z0-9]*
              <br />
              Some example variable declarations are below. Semicolons optional.
            </p>

            <pre className="prettyprint">
              <code>
                {`
  lang:eng #select appropriate language

  i = 0
  s = 'Hello, '
  s += 'World!'
  d = 0.10
  n = null
  b = true
  l = [10, [], 'yes']
  m = $|'x':10, 'y':10, true:20| #hashmap
                `}
              </code>
            </pre>
          </div>
        </div>
        <div className="row">
          <div className="col align-self-center border-bottom"></div>
        </div>
      </div>
    </>
  );
};

const Functions = () => {
  return (
    <>
      <div className="container py-2">
        <div className="row">
          <div className="col align-self-center">
            <h3 className="pb-3">Functions</h3>
            <p>
              Functions need to start with fonc or func. No return statement
              required, and return statement can be empty. Supports recursion.
              Does not support nested functions. Regex for valid custom function
              names is: [A-Za-z]+[A-Za-z0-9]*
              <br />
              Some example variable declarations are below. Semicolons optional.
            </p>

            <pre className="prettyprint">
              <code>
                {`
  lang:eng #select appropriate language

  func printTruth(str) {
    print(str)
  }
  printTruth('Oui++ is so great!')

  func addTwo(a, b) {
    return a + b
  }
  print(addTwo(10, 12))
                `}
              </code>
            </pre>
          </div>
        </div>
        <div className="row">
          <div className="col align-self-center border-bottom"></div>
        </div>
      </div>
    </>
  );
};

const Conditionals = () => {
  return (
    <>
      <div className="container py-2">
        <div className="row">
          <div className="col align-self-center">
            <h3 className="pb-3">Conditionals</h3>
            <p>Example statements below!</p>

            <pre className="prettyprint">
              <code>
                {`
  lang:eng #select appropriate language

  x = true
  if(!x) {
    print('In if')
  } elif ((true == !false) && 10 == 10) {
    print('In elif')
  } else if (true) {
    print('In else if')
  } else {
    print('in else')
  }
                `}
              </code>
            </pre>
          </div>
        </div>
        <div className="row">
          <div className="col align-self-center border-bottom"></div>
        </div>
      </div>
    </>
  );
};

const Comments = () => {
  return (
    <>
      <div className="container py-2">
        <div className="row">
          <div className="col align-self-center">
            <h3 className="pb-3">Comments</h3>
            <p>Single line: #, multi-line: ###</p>

            <pre className="prettyprint">
              <code>
                {`
  lang:eng #select appropriate language

  # this is a single line

  ### 
    This
    Is 
    a 
    Multiline
    Comment 
  ###
                `}
              </code>
            </pre>
          </div>
        </div>
        <div className="row">
          <div className="col align-self-center border-bottom"></div>
        </div>
      </div>
    </>
  );
};

const SelectingLanguage = () => {
  return (
    <>
      <div className="container py-2">
        <div className="row">
          <div className="col align-self-center">
            <h3 className="pb-3">Selecting Language</h3>
            <p>
              Default is French. Add lang:eng for english, and optional to add
              lang:fr for french. MUST be added at top of file on its own line.
              Comments excluded.
            </p>

            <pre className="prettyprint">
              <code>
                {`
  lang:eng #this is selecting english as the language
                `}
              </code>
            </pre>
          </div>
        </div>
        <div className="row">
          <div className="col align-self-center border-bottom"></div>
        </div>
      </div>
    </>
  );
};

export { DocumentationBody };
