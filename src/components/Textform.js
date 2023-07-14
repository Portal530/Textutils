import React, { useState } from "react";
// import PropTypes from 'prop-types'


export default function Textform(props) {
  const [text, setText] = useState("");

  const handleonChange = (event) => {
    console.log("on change");
    setText(event.target.value);
  };

  const upperhandle = () => {
    console.log("Clicked");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase", "success");
  };

  function clearhandle() {
    setText("");
    props.showAlert("Text Cleared", "success");
  }
  function lowerhandle() {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted To Lowercase", "success");
  }
  function copyhandle() {
    var text = document.getElementById('mybox')
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to Clipboard", "success");
  }

  function removeSpace() {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("Unwanted Space Removed", "success");
  }

  return (
    <>
      <h2 className="container my-2">Enter text to analyze</h2>
      <div className="container">
        <textarea
        placeholder="Enter Your Text"
          onChange={handleonChange}
          value={text}
          className="form-control my-3"
          style={props.textboxColor}
          id="mybox"
          rows="8"
        />
        <div className="container" style={{ textAlign: "center" }}>
          <button
            onClick={clearhandle}
            type="button"
            className="btn btn-dark my-2 mx-2 "
            
          >
            CLEAR ALL
          </button>
          <button
            onClick={upperhandle}
            type="button"
            className="btn btn-dark my-2 mx-2"
          >
            UPPERCASE
          </button>
          <button
            onClick={lowerhandle}
            type="button"
            className="btn btn-dark my-2 mx-2"
          >
            LOWERCASE
          </button>
          <button
            onClick={removeSpace}
            type="button"
            className="btn btn-dark my-2 mx-2"
          >
            REMOVE SPACE
          </button>
          <button
            onClick={copyhandle}
            type="button"
            className="btn btn-dark my-2 mx-2"
          >
            COPY TEXT
          </button>
        </div>
        {/* <div className="container">
          <h2>
            Text Summery
          </h2>
          <p className="blackqoute">
            {text.split(" ").length} Words, {text.length} Characters and {0.008*text.split(" ").length} Minutes Reads
          </p>
          <p className="my-2"> {text} </p>
        </div> */}
      </div>
    </>
  );
}
