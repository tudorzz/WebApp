import { Injectable } from '@angular/core';
import{addDoc, collection, collectionData, Firestore} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Car } from '../Models/cars';

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  constructor(private fs:Firestore) { }

  getCars():Observable<Car[]>{
    const myCollection:any = collection(this.fs, 'cars');
    return collectionData(myCollection);

  }

  addCar(car:Car){
    const myCollection = collection(this.fs, 'cars')
    addDoc(myCollection, car)
  }
}