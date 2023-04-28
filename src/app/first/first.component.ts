import { Component } from '@angular/core';
import { CarsService } from '../Services/cars.service';
import { Car } from '../Models/cars';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent {
  
  constructor(private carsService: CarsService) {

  }

  // text: string = "Text aus der Varriable";
  // showSecondRow: boolean = false;
  // my_list: string[] = ['DynamicItem1', 'DynamicItem2', 'DynamicItem3', 'DynamicItem4']
  inputValue: string = '';
  carsFromDB: Car[] = [];
  datasource=new MatTableDataSource(this.carsFromDB);
  newCarBrand: string = "";
  newCarModel: string = "";
  newcarYearOfRegistration: number = 0;
  newCarKilometers: number = 0;
  newCarHorsepower: number = 0;
  newCarCombustion: string = "";
  newCarPrice: number = 0;
  // value = 'Clear me';

  // changeText(): void {
  //   this.text = "Ich habe mit Click die Variable verandert";
  // }

  // showMoreButtons(): void {
  //   this.showSecondRow = true;
  // }
  // showLessButtons(): void {
  //   this.showSecondRow = false;
  // }
  getCars() {
    this.carsService.getCars().subscribe(result => {
      this.carsFromDB = result;
    });
  }

  addCar() {
    let newCar = {
      brand: this.newCarBrand,
      model: this.newCarModel,
      yearOfRegistration: this.newcarYearOfRegistration,
      kilometers: this.newCarKilometers,
      horsepower: this.newCarHorsepower,
      combustion: this.newCarCombustion,
      price: this.newCarPrice
    }
    this.carsService.addCar(newCar);
  }

}