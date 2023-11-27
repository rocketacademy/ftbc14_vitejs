let array = ["Snolax", 3000, 30, true];
let object = {
  name: "Snorlax",
  weight: 3000,
  level: 30,
  owned: true,
};

// const [name, weight, level, owned] = array;

const { name, weight, level, owned } = object;

console.log(name);
console.log(weight);
console.log(level);
console.log(owned);
