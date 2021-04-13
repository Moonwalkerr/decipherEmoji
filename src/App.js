import { useState } from "react";
import "./styles.css";

const emojiDict = {
  "😁": "Beaming Face with Smiling Eyes",
  "🤩": "Star-Struck",
  "🥺": "Pleading Face",
  "😞": "Sad",
  "🥰": "Feeling Loved",
  "😡": "Angry",
  "😘": "Face Blowing a Kiss",
  "☺️": "Smiling Face",
  "😒": "Unamused Face",
  "😑": "Expressionless Face",
  "😐": "Neutral Face",
  "😭": "Loudly Crying Face",
  "😢": "Crying Face",
  "😱": "Face Screaming in Fear",
  "🤪": "Zany Face",
  "😀": "Grinning Face",
  "🙃": "Grinning Face with Big Eyes",
  "😂": "Face with Tears of Joy",
  "🤣": "Rolling on the Floor Laughing",
  "😈": "Devil Smile"
};

export default function App() {
  var emojiArr = Object.keys(emojiDict);

  const [meaning, setterOutput] = useState("Deciphered here");

  function inputClickHandler(event) {
    var userInput = event.target.value;
    var output = emojiDict[userInput];
    if (output === undefined) {
      var error =
        "Sorry the emoji decipher is unavailable in our database at the moment !";
      setterOutput(error);
    } else {
      setterOutput(output);
    }
  }
  function clickEventHandler(item) {
    setterOutput(emojiDict[item]);
  }
  return (
    <div className="App">
      <header>
        <h1 className="main">
          <div id="brand">By Abhishek Mishra</div>
          Decipher Your Emojis
        </h1>
      </header>
      <h3>
        <span className="head2">Enter a Emoji Below to find its meaning</span>
      </h3>
      <input onChange={inputClickHandler} />
      <div className="meaning">
        <span>{meaning}</span>
      </div>
      <span
        className="para"
        // style={{ fontWeight: "bold" }}
      >
        At Present we have following emoji database available to decipher.
        Please Click on the emoji to decipher it
      </span>
      <div className="info">
        {emojiArr.map(function (emoji) {
          return (
            <span
              id="emojiArr"
              key={emoji}
              onClick={() => clickEventHandler(emoji)}
            >
              {emoji}
            </span>
          );
        })}
      </div>
    </div>
  );
}
