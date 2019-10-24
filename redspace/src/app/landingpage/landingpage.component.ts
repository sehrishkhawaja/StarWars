import { Component, OnInit } from '@angular/core';
import { NavBarService } from 'src/service/navBar.service';

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.scss']
})
export class LandingpageComponent implements OnInit {
  public people = 'People';
  public movies = 'Movies';
  public planets = 'Planets';

  constructor(public navBarService: NavBarService) {}

  ngOnInit() {
    this.navBarService.broadcastLoginChange('Star Wars Explorer');
  }
}
