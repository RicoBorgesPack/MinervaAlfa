import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import {AngularFireModule} from '@angular/fire';
import{environment} from '../environments/environment'
import { HttpBackend, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'
import {WebcamModule} from 'ngx-webcam';

import {MatIconModule} from '@angular/material/icon';
import {MatCardModule, MatCard} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './Pages/home/home.component';
import { TeacherFormComponent } from './Pages/teatcher/teatcher.component';
import { CarrouselComponent } from './UI/carrousel/carrousel.component';
import { ClassesComponent } from './Pages/classes/classes.component';
import { ModelComponent } from './Pages/model/model.component';
import { PostboxComponent } from './UI/postbox/postbox.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    TeacherFormComponent,
    CarrouselComponent,
    ClassesComponent,
    ModelComponent,
    PostboxComponent
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
    MatCheckboxModule,
    HttpClientModule,
    FormsModule,
    WebcamModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
