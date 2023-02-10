import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'new-movie-list';

  moviesList = [
    {id: 1, title: 'The GodFather', year: '1972', director: 'Francis Ford Coppola'},
    {id: 2, title: 'Millers Crossing', year: '1990', director: 'The Coen Brothers'},
    {id: 1, title: 'Dial M for Murder', year: '1954', director: 'Alfred Hitchcock'},
    {id: 1, title: 'Whiplash', year: '2014', director: 'Damien Chazelle'},
  ]
}
