import { Component, OnInit } from '@angular/core';
import { PlanetService } from 'src/service/planets.service';
import { NavBarService } from 'src/service/navBar.service';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.scss']
})
export class PlanetsComponent implements OnInit {
  planetData: any;
  constructor(
    public planetService: PlanetService,
    public navBarService: NavBarService
  ) {}

  ngOnInit() {
    this.planetData = this.planetService.getPlanet();
    this.navBarService.broadcastLoginChange('Planet');
  }

  sendPlanetData(planet) {
    this.planetService.setPlanetDetail(planet);
  }
}
