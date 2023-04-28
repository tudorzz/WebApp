export class Car{
    brand : string;
    model : string;
    yearOfRegistration : number;
    kilometers : number;
    horsepower : number;
    combustion: string;
    price: number;


constructor(){
    this.brand = '';
    this.model = '';
    this.yearOfRegistration = 0;
    this.kilometers = 0;
    this.horsepower = 0;
    this.combustion = '';
    this.price = 0;
  }
}