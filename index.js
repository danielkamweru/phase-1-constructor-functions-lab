
// Scooter constructor
// function Scooter(year, color, model) {
//   this.year = year;
//   this.color = color;
//   this.model = model;
// }

// // Driver constructor
// function Driver(name, age, experience) {
//   this.name = name;
//   this.age = age;
//   this.experience = experience;
// }

// // PickupLocation constructor
// function PickupLocation(address, city) {
//   this.address = address;
//   this.city = city;
// }
// Scooter.js
// index.js

// index.js

class Scooter {
  constructor(year, color, model) {
    this.year = year;
    this.color = color;
    this.model = model;
  }
}

class Driver {
  constructor(name, age, experience) {
    this.name = name;
    this.age = age;
    this.experience = experience;
  }
}

class PickupLocation {
  constructor(address, city) {
    this.address = address;
    this.city = city;
  }
}

module.exports = { Scooter, Driver, PickupLocation };

