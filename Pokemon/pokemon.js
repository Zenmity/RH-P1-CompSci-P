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

    // Run classroom exercises
    runAlgorithms();
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

    let tag = ` <div class="bg-stone-300 m-4 w-40 grid justify-items-center">
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
  }

  document.getElementById("cards").innerHTML = html;
}
