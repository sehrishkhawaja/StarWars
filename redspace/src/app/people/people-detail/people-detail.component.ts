import { Component, OnInit } from '@angular/core';
import { PeopleService } from 'src/service/people.servce';
import { NavBarService } from 'src/service/navBar.service';

@Component({
  selector: 'app-people-detail',
  templateUrl: './people-detail.component.html',
  styleUrls: ['./people-detail.component.scss']
})
export class PeopleDetailComponent implements OnInit {
  public peopleData: any;
  constructor(
    public peopleService: PeopleService,
    public navBarService: NavBarService
  ) {}

  ngOnInit() {
    this.peopleData = this.peopleService.getPeopleDetail();
    this.navBarService.broadcastLoginChange(this.peopleData.name);
  }
}
