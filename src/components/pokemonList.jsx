import React from "react";

const PokemonList = ({ items }) => {
  console.log("pokemons passed", items);
  return (
    <React.Fragment>
      <div>
        {items.map((item) => (
          <div key={item.name}>
            <p>{item.name}</p>
            <a href={item.url}>{item.url}</a>
          </div>
        ))}
      </div>
    </React.Fragment>
  );
};

export default PokemonList;
