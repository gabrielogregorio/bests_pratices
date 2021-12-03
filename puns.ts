class JuridicPerson {
  // add concatenate values
  add() {
    return 1 + 1
  }
}

class Vehicle {
  name = 'corsa'
  // add concatenate values
  add() {
    return `Vehicle` + this.name
  }
}

class Animal {
  animals = []

  // bad code
  // add insert item in list
  // add is used in other context
  add() {
    this.animals.push('animal')
  }

  // good code
  insert() {
    this.animals.push('animal')
  }
}