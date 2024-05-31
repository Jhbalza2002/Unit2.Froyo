const froyoOrder = prompt(
  "please enter some froyo flavors separated by comas:",
  "vanilla,vanilla,vanilla,strawberry,coffee,coffee"
);

let flavorArray = froyoOrder.split(",");

let flavorCounts = {};

for (let i = 0; i < flavorArray.length; i++) {
  let flavor = flavorArray[i].trim();

  if (flavorCounts[flavor]) {
    flavorCounts[flavor]++;
  } else {
    flavorCounts[flavor] = 1;
  }
}
console.table(flavorCounts);
