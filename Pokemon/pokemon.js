let pokedex = [];

Papa.parse("pokedex.csv", {
  download: true,
  header: true,
  dynamicTyping: true,
  skipEmptyLines: true,
  complete: function (results) {
    pokedex = results.data;
    console.log("Loaded " + pokedex.length + " Pokémon records.");
    // console.log("Sample record:", pokedex[0]);

    function getRandomIndex(max) {
      return Math.floor(Math.random() * max);
    }
    function rPIndex() {
      return getRandomIndex(pokedex.length);
      // let ii = pokedex.length - 1;
      // return ii;
    }

    function getPokemon(index) {
      // console.log(`Name: `, pokedex[rPIndex()]);
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
        // let html = "";
        // for (i = 0; i < 1; i++) {
        //   let rand = rPIndex();
        // html = html + getPokemon(pokedex[rand]);
        // }
        // document.getElementById("cards").innerHTML = html;

        let picks = [];
        for (let i = 0; i < 4; i++) {
          picks.push(rPIndex());
        }

        // console.log(picks);
        let correct = getRandomIndex(4);
        let html = "";
        html = html + getPokemon(pokedex[picks[correct]]);
        document.getElementById("cards").innerHTML = html;
        console.log("Correct Answer: " + pokedex[picks[correct]].Name);

        let wrongPokemon = [];

        for (let i = 0; i < 4; i++) {
          if (i != correct) {
            let pokemon = pokedex[picks[i]].Name;
            wrongPokemon.push(pokemon);
          }
        }

        console.log("Wrong Answers: ", wrongPokemon.join(", "));

        let html1 = "";
        let exist = [];
        let correctBtnIndex;

        for (let i = 0; i < 4; i++) {
          let rand = getRandomIndex(4);

          if (exist.includes(rand)) {
            i--;
            console.log("fail ", i);
            continue;
          }

          if (rand == correct) {
            correctBtnIndex = i;
          }

          exist.push(rand);

          let btnTag = `<button
              id="btn${i}" class="bg-blue-600 text-white font-bold px-4 py-2 m-4 rounded-xl hover:bg-blue-700"
            >
              ${pokedex[picks[rand]].Name}
            </button>`;

          html1 = html1 + btnTag;
          console.log(pokedex[picks[rand]].Name);
          html1;
        }
        console.log(exist);
        document.getElementById("buttons").innerHTML = html1;
        console.log(correctBtnIndex);
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
