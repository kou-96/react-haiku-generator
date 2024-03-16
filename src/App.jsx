import "./App.css";
import { useState } from "react";

function App() {
  const [inputText, setInputText] = useState("");
  const [text, setText] = useState([]);

  function Post() {
    if (text.length === 3) return;
    setText([...text, { tamago: inputText }]);
    setInputText("");
  }

  function Delete() {
    setText([]);
    setInputText("");
  }

  return (
    <>
      <div>
        {text.map((hallo, index) => (
          <h1 key={`${hallo.tamago}-${index}`}>{hallo.tamago}</h1>
        ))}
      </div>

      <input
        type="text"
        value={inputText}
        onChange={(event) => setInputText(event.target.value)}
      />

      <div className="card">
        <button onClick={Post} style={{ marginRight: "1rem" }}>
          投稿
        </button>
        <button onClick={Delete} style={{ marginLeft: "1rem" }}>
          削除
        </button>
      </div>
    </>
  );
}

export default App;
