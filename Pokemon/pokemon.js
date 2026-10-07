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
  console.log(pokedex[0].Image_URL);

let html = "";

  for(let i = 0; i < pokedex.length; i++){
    console.log(pokedex[i].Image_URL)
    let url = pokedex[i].Image_URL;
    let name = pokedex[i].Name
    let tag = `<img src=${url}><h2>${name}`;
    html = html + tag ;
  }

//   let pokeNum = 1261;
  
//   let pokeName = pokedex[pokeNum].Name;
// let tits = `<h2>${pokeName}</h2>`

  document.getElementById("cards").innerHTML = html;
//   document.getElementById("cards").innerHTML = tits;

}
