function getCurrentSensorReference() {return 2400}

// The hidden implementation approach is very useful, imagine if we need to change the sensor, which for some reason returns new values. With this approach the new implementation will be invisible, and they will only matter with the result coming from 0% to 100%. In this way, we do not break rules defined elsewhere. Don't expose raw values, always hide this layer.
class Vehicle {
  #fuelAvailable; // is adjustable
  #maxSensorCurrent = 4800; // is adjustable

  constructor() {
    this.#fuelAvailable = getCurrentSensorReference(); // is adjustable
  }

  getPercentFullAvaliable(): number { // implementation needs return % 0 - 100
    // ...magic and calcs
    return 50
  }
}

const instance = new Vehicle()
