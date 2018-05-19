import { Component } from '@angular/core';
import {Http, Response} from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  restItems: any;
  nomeFilme = '';
  poster = '';
  UrlServicoRest = '';
  minhaApiKey = '5afb2ef00152b6cbdff413dc1d63e34d';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getRestItems();
  }

  // Read all REST Items
  getRestItems(): void {
    this.restItemsServiceGetRestItems()
      .subscribe(
        restItems => {
          this.restItems = restItems;
          console.log(this.restItems);
        }
      )
  }

  // Rest Items Service: Read all REST Items
  restItemsServiceGetRestItems() {
    return this.http
      .get<any[]>(this.UrlServicoRest)
      .pipe(map(data => data));
  }

  buscarFilme(){
    this.UrlServicoRest = 'https://api.themoviedb.org/3/search/movie?api_key='+this.minhaApiKey+'&query=' + this.nomeFilme;
    this.getRestItems();
  }
  
  getImage(caminho){
    this.poster = 'http://image.tmdb.org/t/p/w300/'+caminho;
    return this.poster;
  }
}

// query basica https://api.themoviedb.org/3/movie/'filme'
// full query https://api.themoviedb.org/3/movie/550?api_key=5afb2ef00152b6cbdff413dc1d63e34d
// api_key=5afb2ef00152b6cbdff413dc1d63e34d

//https://api.themoviedb.org/3/search/movie?api_key=5afb2ef00152b6cbdff413dc1d63e34d&query=tron

