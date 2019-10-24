import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesComponent } from './movies.component';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { MatListModule, MatIconModule } from '@angular/material';

const routes: Routes = [
  {
    path: '',
    component: MoviesComponent
  },
  {
    path: 'movieDetail',
    component: MovieDetailComponent
  }
];

@NgModule({
  declarations: [MoviesComponent, MovieDetailComponent],
  imports: [
    CommonModule,
    MatListModule,
    MatIconModule,
    RouterModule.forChild(routes)
  ]
})
export class MoviesModule {}
