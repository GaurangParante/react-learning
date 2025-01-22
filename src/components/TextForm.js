import React, { useState } from "react";

export default function TextForm({ heading }) {
  const handleUPClick = () => {
    // console.log("Upper case was clicked" + text);
    const newText = text.toUpperCase();
    setText(newText);
  };
  const handleOnChange = (event) => {
    // console.log("On changes");
    setText(event.target.value);
  };
  const [text, setText] = useState("Enter text here");
  //   text = "new text"; // This will not work
  //   setText("new text"); // This will work
  return (
    <div>
      <h1>{heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange}
          id="myBox"
          rows="8"
        ></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleUPClick}>
        Convert to Uppercase
      </button>
    </div>
  );
}
