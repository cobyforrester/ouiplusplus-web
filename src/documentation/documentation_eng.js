import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { github } from "react-syntax-highlighter/dist/esm/styles/hljs";
const DocumentationBodyEng = ({ props }) => {
  return (
    <>
      <BodyTop />
      <Overview />
      <SelectingLanguage />
      <Print />
      <Variables />
      <Types />
      <GeneralOperators />
      <Conditionals />
      <BooleanOperators />
      <Loops />
      <CustomFunctions />
      <PreBuiltFunctions />
      <Comments />
      <KeyWords />
    </>
  );
};

const BodyTop = () => {
  return (
    <>
      <div className="text-center pt-2">
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
              Oui++ is an attempt at a language that is natively in both English
              and French! While it is quite similar to python in structure, it
              has many distinct differences. It is interpreted (by java),
              dynamically typed, pass by value (I know, how inefficient right),
              and whitespace is generally ignored excluding most newlines. It is
              obviously a personal project, and yet it supports many aspects
              necessary in general purpose languages! Enjoy looking around at
              the english documentation below :)
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
                  <th>Case Sensitive</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>print</td>
                  <td>imprimer</td>
                  <td>No</td>
                </tr>
                <tr>
                  <td>if</td>
                  <td>si</td>
                  <td>No</td>
                </tr>
                <tr>
                  <td>else if, elif</td>
                  <td>ou bien si</td>
                  <td>No</td>
                </tr>
                <tr>
                  <td>else</td>
                  <td>sinon</td>
                  <td>No</td>
                </tr>
                <tr>
                  <td>func</td>
                  <td>fonc</td>
                  <td>No</td>
                </tr>
                <tr>
                  <td>return</td>
                  <td>retourner</td>
                  <td>No</td>
                </tr>
                <tr>
                  <td>for</td>
                  <td>pour</td>
                  <td>No</td>
                </tr>
                <tr>
                  <td>while</td>
                  <td>tant que</td>
                  <td>No</td>
                </tr>
                <tr>
                  <td>null</td>
                  <td>null</td>
                  <td>No</td>
                </tr>
                <tr>
                  <td>true</td>
                  <td>vrai</td>
                  <td>No</td>
                </tr>
                <tr>
                  <td>false</td>
                  <td>faux</td>
                  <td>No</td>
                </tr>
                <tr>
                  <td>len</td>
                  <td>long</td>
                  <td>Yes</td>
                </tr>
                <tr>
                  <td>append</td>
                  <td>ajouter</td>
                  <td>Yes</td>
                </tr>
                <tr>
                  <td>addAt</td>
                  <td>ajouterÀ, ajouterA</td>
                  <td>Yes</td>
                </tr>
                <tr>
                  <td>get</td>
                  <td>obtenir</td>
                  <td>Yes</td>
                </tr>
                <tr>
                  <td>remove</td>
                  <td>retirer</td>
                  <td>Yes</td>
                </tr>
                <tr>
                  <td>set</td>
                  <td>remplacer</td>
                  <td>Yes</td>
                </tr>
                <tr>
                  <td>put</td>
                  <td>mettre</td>
                  <td>Yes</td>
                </tr>
                <tr>
                  <td>sub</td>
                  <td>sub</td>
                  <td>Yes</td>
                </tr>
                <tr>
                  <td>getKeys</td>
                  <td>obtenirClés, obtenirCles</td>
                  <td>Yes</td>
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

const Types = () => {
  return (
    <>
      <div className="container py-2">
        <div className="row">
          <div className="col align-self-center">
            <h3 className="pb-3">Types</h3>
            <dl className="row">
              <dt className="col-sm-2">Integer</dt>
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
                  <code>''</code> AND <code>""</code> valid. <code>\</code>{" "}
                  escapes characters. <code>\n</code>
                  =newline, <code>\t</code>=tab.
                </p>
              </dd>
              <dt className="col-sm-2">List</dt>
              <dd className="col-sm-10">
                <p>
                  Mutable. Takes any type as value. Ex:{" "}
                  <code>['hello', true, (100 - 2 ^ 10), [10]]</code>
                </p>
              </dd>
              <dt className="col-sm-2">Map</dt>
              <dd className="col-sm-10">
                <p>
                  Mutable. Insert order maintained. No duplicates. Takes any
                  type as key or value. Ex:{" "}
                  <code>$|'x':10, 'y':10, true:20|</code>
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
            <dl className="row">
              <dt className="col-sm-1">{"!"}</dt>
              <dd className="col-sm-11">
                <p>Not operator. Converts booleans to their opposite.</p>
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
            <dl className="row">
              <dt className="col-sm-1">{"="}</dt>
              <dd className="col-sm-11">
                <p>Assignment operator. Assigns value to variable.</p>
              </dd>
              <dt className="col-sm-1">+=</dt>
              <dd className="col-sm-11">
                <p>
                  Adds variables previously initialized value to newly assigned
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

const PreBuiltFunctions = () => {
  return (
    <>
      <div className="container py-2">
        <div className="row">
          <div className="col align-self-center">
            <h3 className="pb-3">Prebuilt Functions</h3>
            <p className="pb-4">
              List of prebuilt functions below. ITEM implies of any type. <br />
              arg1 = argument 1, arg2 = argument 2...
            </p>
            <dl className="row">
              <dt className="col-sm-4">len(LIST|MAP|STRING)</dt>
              <dd className="col-sm-8">
                <p>Returns the length of the object.</p>
              </dd>
              <dt className="col-sm-4">append(LIST, ITEM)</dt>
              <dd className="col-sm-8">
                <p>Arg2 added to end of List specified. New List returned.</p>
              </dd>

              <dt className="col-sm-4">addAt(LIST, ITEM, INT)</dt>
              <dd className="col-sm-8">
                <p>Adds arg2 to List at index specified by arg3.</p>
              </dd>

              <dt className="col-sm-4">get(LIST|STRING, INT)</dt>
              <dd className="col-sm-8">
                <p>Returns value at arg2 from arg1.</p>
              </dd>
              <dt className="col-sm-4">get(MAP, ITEM)</dt>
              <dd className="col-sm-8">
                <p>
                  Returns value attached to key from arg2 in the map at arg1.
                </p>
              </dd>
              <dt className="col-sm-4">remove(LIST, INT)</dt>
              <dd className="col-sm-8">
                <p>
                  Value arg1 valued indexed by arg2 removed. Returns new List.
                </p>
              </dd>
              <dt className="col-sm-4">remove(MAP, ITEM)</dt>
              <dd className="col-sm-8">
                <p>
                  Removes key value pair from Map in arg1, with arg2 being key.
                  Returns new Map.
                </p>
              </dd>
              <dt className="col-sm-4">set(LIST, ITEM, INT)</dt>
              <dd className="col-sm-8">
                <p>
                  Sets value of List from arg1 at location in specified by arg3
                  to value specified in arg2, then returns new List.
                </p>
              </dd>
              <dt className="col-sm-4">put(MAP, ITEM, ITEM)</dt>
              <dd className="col-sm-8">
                <p>
                  Adds key and value pair to map in first argument, arg2 is key
                  and arg3 is value. If key already present overwrites value.
                  Then returns new Map.
                </p>
              </dd>
              <dt className="col-sm-4">sub(LIST|STRING, INT, INT)</dt>
              <dd className="col-sm-8">
                <p>
                  Returns sublist or substring from argument one, with range of
                  inclusive at arg2 and exclusive of arg3. From arg2 to arg3.
                </p>
              </dd>
              <dt className="col-sm-4">getKeys(MAP)</dt>
              <dd className="col-sm-8">
                <p>Returns array of keys from specified Map.</p>
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
              Variables do not need to have a type when initialized. They have
              function scope, and NO variable hoisting. Regex for valid custom
              variable names is: <code>[A-Za-z]+[A-Za-z0-9]*</code>
              <br />
              Semicolons optional.
              <br />
              Some example variable declarations are below.
            </p>

            <SyntaxHighlighter language="python" style={github}>
              {`
  lang:eng #select appropriate language

  i = -10 + -(-+10 * 11) / 7 % 2 #int
  s = 'Hello, '
  s += 'World!' #string
  d = 0.10; #double
  n = null #null
  b = true; #boolean
  l = [10, [], 'yes'] #list
  m = $|'x':10, 'y':10, true:20| #map
                `}
            </SyntaxHighlighter>
          </div>
        </div>
        <div className="row">
          <div className="col align-self-center border-bottom"></div>
        </div>
      </div>
    </>
  );
};

const CustomFunctions = () => {
  return (
    <>
      <div className="container py-2">
        <div className="row">
          <div className="col align-self-center">
            <h3 className="pb-3">Custom Functions</h3>
            <p>
              Functions need to start with fonc or func. No return statement
              required, and return statement can be empty. Supports recursion.
              Does not support nested functions. Regex for valid custom function
              names is: <code>[A-Za-z]+[A-Za-z0-9]*</code>
              <br />
              Some example function declarations are below.
            </p>

            <SyntaxHighlighter language="python" style={github}>
              {`
  lang:eng #select appropriate language

  # two random functions
  func printTruth(str) {
    print(str)
  }
  func addTwo(a, b) {
    return a + b
  }

  # print results, one with function one with print()
  printTruth('Oui++ is so great!')
  print(addTwo(10, 12))
                `}
            </SyntaxHighlighter>
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

            <SyntaxHighlighter language="python" style={github}>
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
            </SyntaxHighlighter>
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

            <SyntaxHighlighter language="python" style={github}>
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
            </SyntaxHighlighter>
          </div>
        </div>
        <div className="row">
          <div className="col align-self-center border-bottom"></div>
        </div>
      </div>
    </>
  );
};

const Loops = () => {
  return (
    <>
      <div className="container py-2">
        <div className="row">
          <div className="col align-self-center">
            <h3 className="pb-3">Loops</h3>
            <p>
              Both for and while loops are available. For loops take in 3
              inputs, a variable name, and a starting and ending Integer value.
              If the starting is greater than the ending it counts in reverse.
              While loops take in one conditional statement.
            </p>

            <SyntaxHighlighter language="python" style={github}>
              {`
  lang:eng #select appropriate language

  arr = [1, 2, 3, 4, 5]

  # while loop through arr
  print('WHILE LOOP:')
  i = 0
  while(i <SyntaxHighlighter len(arr)) {
    print(get(arr, i))
    i+=1
  }
  
  # same but in for loop format, changing array slightly
  print('\\nFOR LOOP:')
  arr += ['oui++'] * 5 # some nifty list features

  for i -> (0, len(arr)) {
    print(get(arr, i))
  }
                `}
            </SyntaxHighlighter>
          </div>
        </div>
        <div className="row">
          <div className="col align-self-center border-bottom"></div>
        </div>
      </div>
    </>
  );
};

const Print = () => {
  return (
    <>
      <div className="container py-2">
        <div className="row">
          <div className="col align-self-center">
            <h3 className="pb-3">Print</h3>
            <p>
              To output a value use print(), and put the value in the ().
              Newline added after every usage.
            </p>

            <SyntaxHighlighter language="python" style={github}>
              {`
  lang:eng #select appropriate language

  print(10 + 100)
  print('Oui++ is the best, why did I print 110 before?')
                `}
            </SyntaxHighlighter>
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
              Default is French. Add <code>lang:eng</code> for english, and
              optional to add <code>lang:fr</code> for french. MUST be added at
              top of file on its own line. Comments excluded. <br /> Has no
              effect on keywords, both English and French always work, just for
              error messages.
            </p>

            <SyntaxHighlighter language="python" style={github}>
              {`
  lang:eng #this is selecting english as the language
                `}
            </SyntaxHighlighter>
          </div>
        </div>
        <div className="row">
          <div className="col align-self-center border-bottom"></div>
        </div>
      </div>
    </>
  );
};

export { DocumentationBodyEng };
