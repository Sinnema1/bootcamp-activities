import ZooAnimals from "../interfaces/ZooAnimals";

class Animal implements ZooAnimals{
    species: string;
    hungry: boolean;
    weight: number;
    amount: number;
    constructor (species: string, hungry: boolean, weight: number, amount: number) {
        this.species = species;
        this.hungry = hungry;
        this.weight = weight;
        this.amount = amount;
    } 

    makeRollCall(): void {
        return 
    }
}
export default Animal;