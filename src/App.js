import "./App.css";
import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import Spiel from "./components/Spiel";
import Pokemon from "./components/Pokemon.js";

function App() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch("/pokemon")
      .then((resp) => resp.json())
      .then((data) => setArticles(data))
      .catch((err) => alert(err));
  }, []);
  console.log(articles);

  return (
    <Router>
      <nav className="nav">
        <NavLink to="/">
          <button>Pokemon</button>
        </NavLink>
        <NavLink to="/Spiel">
          <button> Go to the game</button>{" "}
        </NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<Pokemon />} />
        <Route path="/Spiel" element={<Spiel dataPokemon={articles} />} />
      </Routes>
    </Router>
  );
}

export default App;
