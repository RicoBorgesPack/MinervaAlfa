import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { TeacherFormComponent } from './Pages/teatcher/teatcher.component';
import { ClassesComponent } from './Pages/classes/classes.component';
import { FeedComponent } from './UI/card/card.component';
import { ModelComponent } from './Pages/model/model.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'teach', component: TeacherFormComponent },
  { path: 'study', component:  ClassesComponent},
  { path: 'feed', component:  FeedComponent},
  { path: 'model', component:  ModelComponent},
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
