import React, { useState } from "react";
import ReactPaginate from "react-paginate";

function Spiel({ dataPokemon }) {
  const [selected, setSelected] = useState([]);
  const [winner, setWinner] = useState([]);

  const handleClick = (e) => {
    if (selected.length === 0) {
      setSelected([e.name.english]);
    } else if (selected.length === 1) {
      setSelected([...selected, e.name.english]);
    } else {
      setSelected([]);
      setWinner([]);
    }
  };

  const handleStart = () => {
    const random = Math.floor(Math.random() * 2);
    setWinner(selected[random]);
  };

  //Create pagination
  const [pageNumber, setPageNumber] = useState(0);
  const articlesPerPage = 10;
  const pagesVisited = pageNumber * articlesPerPage;

  const pageCount = Math.ceil(dataPokemon.length / articlesPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <div className="App">
      <header>
        <div className="meal">
          <h4>Pokemons</h4>
        </div>
        {selected.length === 2 && (
          <div className="pak">
            <p>
              Start the game! &nbsp;{" "}
              <button onClick={handleStart}>START</button>
            </p>
          </div>
        )}
        <p>
          {winner.length > 0 && (
            <div>
              {" "}
              <h1 className="pik">
                {" "}
                The &nbsp;Winner&nbsp; is &nbsp; " {winner} " &nbsp;!
              </h1>
              <img
                className="pok"
                src={`https://img.pokemondb.net/artwork/large/${winner.toLowerCase()}.jpg`}
                alt={winner}
                title={winner}
              />{" "}
            </div>
          )}
        </p>
      </header>

      <div className="spiel">
        <h4>
          {" "}
          {selected[0] && (
            <div className="puk">
              {" "}
              {selected[0]}{" "}
              <img
                className="pok"
                src={`https://img.pokemondb.net/artwork/large/${selected[0].toLowerCase()}.jpg`}
                alt={selected[0]}
                title={selected[0]}
              />{" "}
            </div>
          )}
          player 1
        </h4>
        <div>
          <h4>
            {selected[1] && (
              <div className="puk">
                {" "}
                {selected[1]}{" "}
                <img
                  className="pok"
                  src={`https://img.pokemondb.net/artwork/large/${selected[1].toLowerCase()}.jpg`}
                  alt={selected[1]}
                  title={selected[1]}
                />{" "}
              </div>
            )}
            player 2
          </h4>
        </div>
      </div>

      <main>
        <div className="wrapper">
          {dataPokemon
            .slice(pagesVisited, pagesVisited + articlesPerPage)
            .map((article, i) => (
              <div className="li" key={i}>
                {article.name.english}
                {article.id && (
                  <img
                    className="pok"
                    onClick={() => handleClick(article)}
                    src={`https://img.pokemondb.net/artwork/large/${article.name.english.toLowerCase()}.jpg`}
                    alt={article.name.english}
                    title={article.name.english}
                  />
                )}
              </div>
            ))}
        </div>
      </main>
      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"paginationBttns"}
        previousLinkClassName={"previousBttn"}
        nextLinkClassName={"nextBttn"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
      />
    </div>
  );
}

export default Spiel;
