import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {AngularFireModule} from '@angular/fire';
import{environment} from '../environments/environment'
import { HttpBackend, HttpClientModule } from '@angular/common/http';

import {MatIconModule} from '@angular/material/icon';
import {MatCardModule, MatCard} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './UI/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './Pages/home/home.component';
import { TeacherFormComponent } from './Pages/teatcher/teatcher.component';
import { CarrouselComponent } from './UI/carrousel/carrousel.component';
import { ClassesComponent } from './Pages/classes/classes.component';
import { FeedComponent } from './UI/card/card.component';
import { TeatcherListComponent } from './UI/teatcher-list/teatcher-list.component';
import { ModelComponent } from './Pages/model/model.component';
import { ModelListComponent } from './UI/model-list/model-list.component';
import { HourComponent } from './UI/hour/hour.component';
import { PostboxComponent } from './UI/postbox/postbox.component';
import { CameraComponent } from './UI/camera/camera.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    TeacherFormComponent,
    CarrouselComponent,
    ClassesComponent,
    FeedComponent,
    TeatcherListComponent,
    ModelComponent,
    ModelListComponent,
    HourComponent,
    PostboxComponent,
    CameraComponent
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
    AngularFireModule.initializeApp(environment.firebaseConfig),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
