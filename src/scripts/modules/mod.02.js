export default class User {
  constructor(firstName, lastName, age) {
    this.lastName = lastName;
    this.firstName = firstName;
    this.age = age;
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  sayHello() {
    return `Hello, my name is ${this.getFullName()}`;
  }
}