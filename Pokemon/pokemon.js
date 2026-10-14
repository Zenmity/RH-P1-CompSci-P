let pokedex = [];

Papa.parse("pokedex.csv", {
  download: true,
  header: true,
  dynamicTyping: true,
  skipEmptyLines: true,
  complete: function (results) {
    pokedex = results.data;
    console.log("Loaded " + pokedex.length + " Pokémon records.");
    console.log("Sample record:", pokedex[0]);

    function getRandomIndex(max) {
      return Math.floor(Math.random() * max);
    }
    function rPIndex() {
      // return getRandomIndex(pokedex.length);
      let ii = pokedex.length - 3;
      return ii;
    }

    function getPokemon(index) {
      console.log(`Name: `, pokedex[rPIndex()]);
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
        let html = "";
        for (i = 0; i < 1; i++) {
          let rand = rPIndex();
          html = html + getPokemon(pokedex[rand]);
        }
        document.getElementById("cards").innerHTML = html;
      });

    // runAlgorithms();
  },
});

function runAlgorithms() {
  // Students write their loops here:

  console.log("--- Lab Running ---");

  let html = "";

  for (let i = 0; i < pokedex.length; i++) {
    let url = pokedex[i].Image_URL;
    let name = pokedex[i].Name;
    let type1 = pokedex[i].Type1;
    let type2;

    if (pokedex[i].Type2 != null) {
      type2 = pokedex[i].Type2;
    } else {
      type2 = "";
    }

    let tag = ` <div class="font-sans bg-stone-300 m-4 w-40 p-4 shadow-lg hover:shadow-2xl rounded-2xl transition duration-200 ease-in-out">
                  <img src=${url}>
                  <h2 class="pb-0.01">${name}</h2>
                  <h3 class="text-sm pt-0.2">#${i}</h3>
                  <div id="types" class="grid grid-cols-2">
                    <h4>${type1}</h4>
                    <h4>${type2}</h4>
                  </div>
                </div>`;
    html = html + tag;

    console.log(i);
    console.log(type2);
  }

  document.getElementById("cards").innerHTML = html;
}
