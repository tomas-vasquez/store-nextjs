const { faImages } = require("@fortawesome/free-solid-svg-icons");

const categories = [];

const products = [
  {
    name: "Arduino Uno R3 (replica)",
    shortLink: "arduino-r3",
    description: "arduino description",
    categories: ["", ""],
    images: ["", ""],
    price: [{ type: "BS", amount: 70, type: "USD", amount: 10 }],
  },
];

module.exports = {
  categories,
  products,
};
