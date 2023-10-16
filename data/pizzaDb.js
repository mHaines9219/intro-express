const pizzaTypes = [
  { type: "Pepperoni", style: "NY" },
  { type: "Cheese", style: "Sicilian" },
  { type: "Mushroom", style: "Sicilian" },
];

module.exports = {
  getAll: function () {
    return pizzaTypes;
  },
};
