import React, { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "😂": "face with tears of joy",
  "😍": "smiling face with heart-eyes",
  "❤️": "red heart",
  "😘": "face blowing a kiss",
  "😭": "loudly crying face",
  "😊": "smiling face ",
  "♥️": "heart suit",
  "💕": "two hearts",
  "👌": "ok hand",
  "🤗": "hugging face"
};

var emojiWeKnow = Object.keys(emojiDictionary);

export default function App() {
  var [meaning, setMeaning] = useState("");
  function emojiInputHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];
    if (meaning === undefined) {
      meaning = "We don't have that in our database!";
    }
    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }
  return (
    <div className="App">
      <h1>emoti kon?</h1>
      <input onChange={emojiInputHandler}></input>
      <h2> {meaning} </h2>
      <h3>emojis we know</h3>
      {emojiWeKnow.map(function (emoji) {
        return (
          <span
            className="emojiWeKnow"
            onClick={() => emojiClickHandler(emoji)}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
