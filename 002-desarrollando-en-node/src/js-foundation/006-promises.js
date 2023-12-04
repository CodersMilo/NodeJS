const pokemonByID = (id) => {
  fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then(async (res) => console.log((await res.json()).name))
    .finally(() => console.log("Prueba"));

  console.log(id);
};

module.exports = { pokemonByID };
