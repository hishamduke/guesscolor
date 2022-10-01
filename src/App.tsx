import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("");
  const [ans, setAns] = useState([""]);
  const [status, setStatus] = useState(" ");

  const arrayGen = () => {
    let array = [];
    for (let i = 0; i < 10; i++) {
      array.push(i.toString());
    }
    array.push("a", "b", "c", "d", "e", "f");
    return array;
  };

  const colorGen = (array: string[]) => {
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color = color + array[Math.floor(Math.random() * 16)];
    }
    return color;
  };
  const newGame = () => {
    const array = arrayGen();
    const color = colorGen(array);
    const color2 = colorGen(array);
    const color3 = colorGen(array);
    setColor(color);
    const ans = [color, color2, color3];
    ans.sort(() => Math.random() - 0.5);
    setAns(ans);
    setStatus("");
  };
  useEffect(() => {
    newGame();
  }, []);

  return (
    <div className="App">
      <>
        {console.log(ans)}
        <h2>Guess the color </h2>
        <div className="box" style={{ backgroundColor: color }} />
        <div>
          {ans.map((answer) => (
            <button
              key={answer}
              onClick={() => {
                if (answer == color) {
                  setStatus("Correct answer");
                } else {
                  setStatus("Incorrect answer");
                }
              }}
            >
              {answer}
            </button>
          ))}
        </div>
        <div>{status}</div>
        <button
          onClick={() => {
            newGame();
          }}
        >
          Next
        </button>
      </>
    </div>
  );
}

export default App;
