import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  url='/api';
  constructor(private http: HttpClient) {
    this.getMovies()
   }

 
  getMovies()
  {
    return this.http.get(this.url);
  }

  getMovie(id:string){
    return this.http.get(this.url+'/'+id);
  }

  saveMovie(Movie:Movie){
    return this.http.post(this.url, Movie);

  }

  deleteMovie(id:string){
    return this.http.delete(this.url+'/'+id);
  }

  updateMovie(id:string, Movie:Movie){
    return this.http.put(this.url+'/'+id, Movie);
  }

}

export interface Movie{
  mov_id:string;
  mov_title?:string;
  mov_year?:number;
  mov_time?:number;
  mov_lang?:string;
  mov_dt_rel?:string;
  mov_rel_country?:string;
}
