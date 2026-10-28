function normalizeUnits(manifest) {
  const newManifest = { ...manifest };
  if (manifest && manifest.unit == "lb") {
    newManifest.weight *= 0.45;
    newManifest.unit = "kg";
  }
  return newManifest;
}

let test = {
  containerId: 68,
  destination: "Salinas",
  weight: 101,
  unit: "lb",
  hazmat: true,
};

console.log(normalizeUnits(test));

function validateManifest(manifest) {
  let newManifest = {};
  let units = ["kg", "lb"];
  if (manifest) {
    if (
      manifest.containerId === null ||
      !Number.isInteger(manifest.containerId) ||
      manifest.containerId <= 0
    ) {
      newManifest.containerId = "Invalid";
    }
    if (
      manifest.destination === null ||
      typeof manifest.destination !== "string" ||
      manifest.destination.trim() == ""
    ) {
      newManifest.destination = "Invalid";
    }
    if (
      manifest.weight === null ||
      typeof manifest.weight !== "number" ||
      manifest.weight <= 0 ||
      Number.isNaN(manifest.weight)
    ) {
      newManifest.weight = "Invalid";
    }
    if (manifest.unit === null || !units.includes(manifest.unit)) {
      newManifest.unit = "Invalid";
    }
    if (manifest.hazmat === null || typeof manifest.hazmat !== "boolean") {
      newManifest.hazmat = "Invalid";
    }
    if (manifest.containerId === undefined) {
      newManifest.containerId = "Missing";
    }
    if (manifest.destination === undefined) {
      newManifest.destination = "Missing";
    }
    if (manifest.weight === undefined) {
      newManifest.weight = "Missing";
    }
    if (manifest.unit === undefined) {
      newManifest.unit = "Missing";
    }
    if (manifest.hazmat === undefined) {
      newManifest.hazmat = "Missing";
    }
  }
  console.log(manifest.weight);
  return newManifest;
}

console.log(validateManifest({ containerId: 3.5 }));

let processManifest = (manifest) => {};
