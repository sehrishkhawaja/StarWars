import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LandingpageComponent } from './landingpage/landingpage.component';

const routes: Routes = [
  {
    path: 'landingpage',
    component: LandingpageComponent
  },
  {
    path: 'landingpage/people',
    loadChildren: './people/people.module#PeopleModule'
  },
  {
    path: 'landingpage/movies',
    loadChildren: './movies/movies.module#MoviesModule'
  },
  {
    path: 'landingpage/planets',
    loadChildren: './planets/planets.module#PlanetsModule'
  },
  {
    path: '',
    redirectTo: '/landingpage',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
