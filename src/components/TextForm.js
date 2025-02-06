import React, { useState } from "react";

export default function TextForm({ heading, mode, showAlert }) {
  const handleUPClick = () => {
    const newText = text.toUpperCase();
    setText(newText);
    showAlert("Converted To Uppercase", "success");
  };

  const handleLoClick = () => {
    const newText = text.toLowerCase();
    setText(newText);
    showAlert("Converted To Lowercase", "success");
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const handleClear = () => {
    setText("");
    showAlert("Text Cleared", "success");
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    showAlert("Text Coppied", "success");
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    showAlert("Extra space removed", "success");
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
        <h1 className="mb-2">{heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
            style={{
              backgroundColor: mode === "dark" ? "#13466e" : "white",
              color: mode === "dark" ? "white" : "black",
            }}
          ></textarea>
        </div>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleUPClick}
        >
          Convert to Uppercase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleLoClick}
        >
          Convert to Lowercase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleCopy}
        >
          Copy text
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleClear}
        >
          Clear text
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleExtraSpaces}
        >
          Remove Extra Spaces
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: mode === "dark" ? "white" : "black" }}
      >
        <h2>Your Text summery</h2>
        <p>
          {
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          words and {text.length} characters{" "}
        </p>
        <p>
          {0.008 *
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length}{" "}
          Minits for read
        </p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Nothing to preview!"}</p>
      </div>
    </>
  );
}
