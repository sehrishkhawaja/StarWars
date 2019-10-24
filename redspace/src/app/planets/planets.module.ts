import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlanetsComponent } from './planets.component';
import { Routes, RouterModule } from '@angular/router';
import { MatListModule, MatIconModule } from '@angular/material';
import { PlanetDetailComponent } from './planet-detail/planet-detail.component';

const routes: Routes = [
  {
    path: '',
    component: PlanetsComponent
  },
  {
    path: 'planetDetail',
    component: PlanetDetailComponent
  }
];

@NgModule({
  declarations: [PlanetsComponent, PlanetDetailComponent],
  imports: [
    CommonModule,
    MatListModule,
    MatIconModule,
    RouterModule.forChild(routes)
  ]
})
export class PlanetsModule {}
