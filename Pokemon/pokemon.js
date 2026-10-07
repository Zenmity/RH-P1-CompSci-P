let pokedex = [];

Papa.parse("pokedex.csv", {
download: true,
header: true,
dynamicTyping: true,
skipEmptyLines: true,
complete: function(results) {
pokedex = results.data;
console.log("Loaded " + pokedex.length + " Pokémon records.");
console.log("Sample record:", pokedex[0]);

// Run classroom exercises
runAlgorithms();
}
});

function runAlgorithms() {
// Students write their loops here:
console.log("--- Lab Running ---");
}