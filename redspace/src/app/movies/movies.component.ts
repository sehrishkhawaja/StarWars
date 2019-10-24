import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/service/movies.service';
import { NavBarService } from 'src/service/navBar.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  public movieData: any;

  constructor(
    public movieService: MovieService,
    public navBarService: NavBarService
  ) {}

  ngOnInit() {
    this.movieData = this.movieService.getMovie();
    this.navBarService.broadcastLoginChange('Movie');
  }
  public sendMovieDetail(movie) {
    this.movieService.setMovieDetail(movie);
  }
}
