import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { TeatcherComponent } from './Pages/teatcher/teatcher.component';
import { ClassesComponent } from './Pages/classes/classes.component';
import { CardComponent } from './UI/card/card.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'teatch', component: TeatcherComponent },
  { path: 'study', component:  ClassesComponent},
  { path: 'feed', component:  CardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
