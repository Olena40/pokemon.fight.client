import React from "react";
import pokemon from "./pokemon.png";

const Pokemon = (poki) => {
  return (
    <div>
      <h2>Welcome to the pokemon game!</h2>

      <h3>
        {" "}
        <img
          className="pokemon"
          src={pokemon}
          alt="It's Pokemon."
          title="Pokemon!"
        ></img>
      </h3>
    </div>
  );
};

export default Pokemon;
