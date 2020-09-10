import React from "react";
const DocumentationBody = ({ props }) => {
  return (
    <>
      <BodyTop />
      <Overview />
      <KeyWords />
      <PrimitiveTypes />
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
            <h3>Key Words (Case Insensitive)</h3>
            <p>
              A list of all keywords used. Regex for valid custom variable and
              function names is: [A-Za-z]+[A-Za-z0-9]*
            </p>
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
              <dt className="col-sm-3">Int</dt>
              <dd className="col-sm-9">
                <p>...</p>
              </dd>

              <dt className="col-sm-3">Double</dt>
              <dd className="col-sm-9">
                <p>...</p>
              </dd>

              <dt className="col-sm-3">Boolean</dt>
              <dd className="col-sm-9">
                <p>...</p>
              </dd>
              <dt className="col-sm-3">String</dt>
              <dd className="col-sm-9">
                <p>...</p>
              </dd>
              <dt className="col-sm-3">List</dt>
              <dd className="col-sm-9">
                <p>...</p>
              </dd>
              <dt className="col-sm-3">Map</dt>
              <dd className="col-sm-9">
                <p>...</p>
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

export { DocumentationBody };
