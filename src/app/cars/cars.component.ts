import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { CarsService } from '../Services/cars.service';
import { Car } from '../Models/cars';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent {
  constructor(private carsService: CarsService) {

  }
  displayedColumns: string[] = ['brand', 'model', 'yearOfRegistration', 'kilometers','horsepower','combustion','price'];

  carsFromDB: Car[] = [];
  dataSource = new MatTableDataSource<Car>(this.carsFromDB);

  ngOnInit(){
    this.getCars();
  }

  getCars() {
    this.carsService.getCars().subscribe(result => {
      this.dataSource.data = result;
    });
  }
}
