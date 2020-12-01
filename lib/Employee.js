// TODO: Write code to define and export the Employee class
class Employee {
  constructor(name, id, email) {
    // if (!name) {
    //   throw new Error("You must include a name.");
    // }
    // if (!title) {
    //   throw new Error("You must include a job title.");
    // }
    // if (!id) {
    //   throw new Error("You must include an id number.");
    // }
    // if (!email) {
    //   throw new Error("You must include an email address.");
    // }
    this.name = name;
    this.id = id;
    this.email = email;
  }

  getName() {
    const name = this.name;
    return name;
  }

  getId() {
    return this.id;
  }

  getEmail() {
    return this.email;
  }

  getRole() {
    return "Employee";
  }
}

module.exports = Employee;
