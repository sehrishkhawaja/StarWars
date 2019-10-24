import { Component, OnInit } from '@angular/core';
import { PlanetService } from 'src/service/planets.service';
import { NavBarService } from 'src/service/navBar.service';

@Component({
  selector: 'app-planet-detail',
  templateUrl: './planet-detail.component.html',
  styleUrls: ['./planet-detail.component.scss']
})
export class PlanetDetailComponent implements OnInit {
  public planetDetail: any;
  constructor(
    public planetService: PlanetService,
    public navBarService: NavBarService
  ) {}

  ngOnInit() {
    this.planetDetail = this.planetService.getPlanetDetail();
    this.navBarService.broadcastLoginChange(this.planetDetail.name);
  }
}
