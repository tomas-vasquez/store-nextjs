const categories = ["arduinos", "conectividad", "lcd's"];

const products = [
  {
    name: "Arduino Uno R3 (replica)",
    images: ["/products/arduino-uno-r3.jpg", "/products/3.jpg"],
    shortLink: "arduino-r3",
    description: "arduino",
    categories: ["arduinos", ""],
    price: [
      { type: "BS", amount: 70 },
      { type: "USD", amount: 10 },
    ],
  },
  {
    name: "Arduino Mega",
    images: ["/products/arduino-mega.jpg"],
    shortLink: "arduino-mega",
    description: "arduino",
    categories: ["arduinos", ""],
    price: [
      { type: "BS", amount: 70 },
      { type: "USD", amount: 10 },
    ],
  },
  {
    name: "Arduino Nano",
    images: ["/products/arduino-nano.jpg"],
    shortLink: "arduino-nano",
    description: "arduino",
    categories: ["arduinos", ""],
    price: [
      { type: "BS", amount: 70 },
      { type: "USD", amount: 10 },
    ],
  },
  {
    name: "Arduino lolypod",
    images: ["/products/arduino-lolypod.jpg"],
    shortLink: "arduino-lolypod",
    description: "arduino lolypod",
    categories: ["arduinos", ""],
    price: [
      { type: "BS", amount: 70 },
      { type: "USD", amount: 10 },
    ],
  },
];

module.exports = {
  categories,
  products,
};
