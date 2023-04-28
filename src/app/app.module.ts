import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FirstComponent } from './first/first.component';

import {MatListModule} from '@angular/material/list';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatInputModule} from '@angular/material/input'
import {MatIconModule} from '@angular/material/icon'
import {FormsModule} from '@angular/forms'
import {FirestoreModule} from '@angular/fire/firestore'
import {FirebaseAppModule, initializeApp, provideFirebaseApp} from '@angular/fire/app'
import {config} from './config';
import { CarsComponent } from './cars/cars.component';
import { WelcomeComponent } from './welcome/welcome.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    CarsComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDividerModule,
    MatListModule,
    MatTableModule,
    MatIconModule,
    MatInputModule,
    FormsModule,
    FirestoreModule,
    FirebaseAppModule,
    provideFirebaseApp(()=>initializeApp(config.firebase)),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
