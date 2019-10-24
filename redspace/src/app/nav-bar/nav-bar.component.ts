import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/service/movies.service';
import { NavBarService } from 'src/service/navBar.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  public title: any;
  constructor(public navBarService: NavBarService) {}

  ngOnInit() {
    this.navBarService.name.subscribe(val => {
      this.title = val;
    });
  }
}
