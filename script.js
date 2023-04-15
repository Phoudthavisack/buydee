const data = require("./buydee.json");

const _ex = data.map((e) => ({
  ...e,
  price: e.price + (((e.price * 0.3) / 1000) | 0) * 1000,
}));
console.log(_ex);
require("fs").writeFileSync("./buydee.json", JSON.stringify(_ex));