import { Component } from '@angular/core';
import { MovieService } from './movie.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name= 'Fergal Feeney';
  number= 'S00221135';
 movies={};

 constructor(private movieService: MovieService) {}

 ngOnInit() {
this.movies = this.movieService.getMovies();
console.log(this.movies);
 }
}
