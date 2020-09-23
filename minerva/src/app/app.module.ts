import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {AngularFireModule} from '@angular/fire';
import{AngularFirestoreModule} from '@angular/fire/firestore';
import{environment} from '../environments/environment'
import { ReactiveFormsModule } from "@angular/forms";
import { FormsModule } from '@angular/forms';

import {MatIconModule} from '@angular/material/icon';
import {MatCardModule, MatCard} from '@angular/material/card';
import {MatButton, MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './UI/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './Pages/home/home.component';
import { TeatcherComponent } from './Pages/teatcher/teatcher.component';
import { CarrouselComponent } from './UI/carrousel/carrousel.component';
import { ClassesComponent } from './Pages/classes/classes.component';
import { CardComponent } from './UI/card/card.component';
import { TeatcherListComponent } from './UI/teatcher-list/teatcher-list.component';
import { ModelComponent } from './Pages/model/model.component';
import { ModelListComponent } from './UI/model-list/model-list.component';
import { HourComponent } from './UI/hour/hour.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    TeatcherComponent,
    CarrouselComponent,
    ClassesComponent,
    CardComponent,
    TeatcherListComponent,
    ModelComponent,
    ModelListComponent,
    HourComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
