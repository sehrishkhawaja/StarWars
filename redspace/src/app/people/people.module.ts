import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeopleComponent } from './people.component';
import { Routes, RouterModule } from '@angular/router';
import { PeopleDetailComponent } from './people-detail/people-detail.component';
import { MatListModule, MatIconModule } from '@angular/material';
export const routes: Routes = [
  {
    path: '',
    component: PeopleComponent
  },
  {
    path: 'peopleDetail',
    component: PeopleDetailComponent
  }
];

@NgModule({
  declarations: [PeopleComponent, PeopleDetailComponent],
  imports: [
    CommonModule,
    MatListModule,
    MatIconModule,
    RouterModule.forChild(routes)
  ]
})
export class PeopleModule {}
