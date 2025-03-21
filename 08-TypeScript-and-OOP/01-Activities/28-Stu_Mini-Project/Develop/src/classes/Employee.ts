import Work from "../interfaces/Work";

class Employee implements Work {
  name: string;
  id: number;
  title: string;
  salary: number;

  constructor(name: string, id: number, title: string, salary: number) {
    this.name = name;
    this.id = id;
    this.title = title;
    this.salary = salary;
  }

  receivePay(): void {
    console.log(`${this.name} has been paid ${this.salary}`);
  }
}

export default Employee;