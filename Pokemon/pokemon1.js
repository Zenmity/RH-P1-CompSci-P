let pokedex = [];

Papa.parse("pokedex.csv", {
  download: true,
  header: true,
  dynamicTyping: true,
  skipEmptyLines: true,
  complete: function (results) {
    pokedex = results.data;
    console.log("Loaded " + pokedex.length + " Pokémon records.");

    document
      .getElementById("randomBtn")
      .addEventListener("click", function (event) {
        console.log(pickPokemonForGame());
      });

    function getRandomIndex(max) {
      return Math.floor(Math.random() * max);
    }
    let rand = () => {
      return getRandomIndex(pokedex.length);
    };

    let picks = [];

    function pickPokemonForGame() {
      for (let i = 0; i < 4; i++) {
        picks.push(rand());
      }
    }

    let correct = picks[getRandomIndex(picks.length)];

    let returnObject = {
      correctPokemonIndex: correct,
      randPokeList: picks,
    };

    function getPokemon(index) {
      let url = index.Image_URL;
      let name = index.Name;
      let indexNum = index.ID;
      let tag = ` <div class="font-sans bg-stone-300 m-4 w-40 p-4 shadow-lg hover:shadow-2xl rounded-2xl transition duration-200 ease-in-out justify-center">
                  <img src=${url}>
                  <h2 class="pb-0.01">${name}</h2>
                  <h3 class="text-sm pt-0.2">#${indexNum}</h3>
                </div>`;
      return tag;
    }

    let lastNum = 0;

    document
      .getElementById("randomBtn")
      .addEventListener("click", function (event) {
        let picks = [];
        for (let i = 0; i < 4; i++) {
          picks.push(rand());
        }

        let correct = getRandomIndex(4);

        let html = "";
        html = html + getPokemon(pokedex[picks[correct]]);
        document.getElementById("cards").innerHTML = html;
        console.log("Correct Answer: " + pokedex[picks[correct]].Name);
      });
  },
});
