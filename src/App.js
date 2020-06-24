import React, { useState, useEffect } from "react";
import axios from "axios";
import PokemonList from "./components/pokemonList";
import Pagination from "./components/pagination";

function App() {
  const initialUrl = "https://pokeapi.co/api/v2/pokemon";
  const [pokemons, setPokemon] = useState([]);
  const [currentPage, setCurrentPage] = useState(initialUrl);
  const [nextPage, setNextPage] = useState();
  const [previousPage, setPreviousPage] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    let cancel;
    async function fetchData() {
      try {
        const { data } = await axios.get(currentPage);
        console.log("data", data.results);
        console.log("next", data.next);
        console.log("prev", data.previous);

        setNextPage(data.next);
        setPreviousPage(data.previous);
        setPokemon(data.results.map((item) => item));
        setLoading(false);
      } catch (error) {}
    }
    fetchData();
  }, [currentPage]);

  function goToPrevPage() {
    console.log("going to previous page");
    setCurrentPage(previousPage);
  }

  function goToNextPage() {
    console.log("going to next page");
    setCurrentPage(nextPage);
  }

  if (loading) {
    return "Loading...";
  }

  return (
    <React.Fragment>
      <PokemonList items={pokemons}></PokemonList>
      <Pagination
        next={nextPage ? goToNextPage : null}
        prev={previousPage ? goToPrevPage : null}
      ></Pagination>
    </React.Fragment>
  );
}

export default App;
