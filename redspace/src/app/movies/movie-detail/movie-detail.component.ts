import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/service/movies.service';
import { NavBarService } from 'src/service/navBar.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {
  public movieDetail: any;
  constructor(
    public movieService: MovieService,
    public navBarService: NavBarService
  ) {}

  ngOnInit() {
    this.movieDetail = this.movieService.getMovieDetail();
    this.navBarService.broadcastLoginChange(this.movieDetail.title);
  }
}
