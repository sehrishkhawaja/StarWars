import { Component, OnInit } from '@angular/core';
import { PeopleService } from 'src/service/people.servce';
import { NavBarService } from 'src/service/navBar.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {
  constructor(
    public peopleService: PeopleService,
    public navBarService: NavBarService
  ) {}
  peopleData: any;

  ngOnInit() {
    this.peopleData = this.peopleService.getPeople();
    this.navBarService.broadcastLoginChange('people');
  }

  public sendPeopleDetail(people) {
    this.peopleService.setPeopleDetail(people);
  }
}
