import { useEffect, useState } from "react";
import "./index.css";

function App() {
  let fruits = ["strawberries", "grapes", "plums", "apples", "oranges"];

  const [word, setWord] = useState("");
  const [rotate, setRotate] = useState(0);

  useEffect(() => {
    setWord(fruits[Math.floor(Math.random() * fruits.length)]);
  }, [rotate]);

  let rotateSquare = () => {
    setRotate(rotate + 90);
  };

  let squareStyles = {
    transform: `rotate(${rotate}deg)`,
  };

  return (
    <div className="App">
      <div className="square" onClick={rotateSquare} style={squareStyles}></div>
      <h3>{word}</h3>
    </div>
  );
}

export default App;
