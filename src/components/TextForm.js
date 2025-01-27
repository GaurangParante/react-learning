import React, { useState } from "react";

export default function TextForm({ heading, mode }) {
  const handleUPClick = () => {
    // console.log("Upper case was clicked" + text);
    const newText = text.toUpperCase();
    setText(newText);
  };

  const handleLoClick = () => {
    // console.log("Upper case was clicked" + text);
    const newText = text.toLowerCase();
    setText(newText);
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const handleClear = () => {
    setText("");
  };

  const handleCopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  };

  const [text, setText] = useState("");
  //   text = "new text"; // This will not work
  //   setText("new text"); // This will work
  return (
    <>
      <div
        className="container"
        style={{ color: mode === "dark" ? "white" : "black" }}
      >
        <h1>{heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
            style={{
              backgroundColor: mode === "dark" ? "grey" : "white",
              color: mode === "dark" ? "white" : "black",
            }}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUPClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleCopy}>
          Copy text
        </button>
        <button className="btn btn-primary mx-1" onClick={handleClear}>
          Clear text
        </button>
        <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>
          Remove Extra Spaces
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: mode === "dark" ? "white" : "black" }}
      >
        <h2>Your Text summery</h2>
        <p>
          {text.split(" ").length} words and {text.length} characters{" "}
        </p>
        <p>{0.008 * text.split(" ").length} Minits for read</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Enter something to preview"}</p>
      </div>
    </>
  );
}
