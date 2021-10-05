import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {


  constructor(private _http:HttpClient,
              
    ) { }
  // connect frontend to backend
  apiUrl='  https://movie-crud-mean-api.herokuapp.com/api/';

  //get all data

  getMovies():Observable<any>
  {
    return this._http.get(`${this.apiUrl}`);
  };
  //create data
  addMovie(movie:Movie):Observable<any>
  {
    return this._http.post(`${this.apiUrl}`,movie);
  };

  // delete data
  deleteMovie(id:any):Observable<any>
  {
    return this._http.delete(`${this.apiUrl}/${id}`)
  };

    // update data
    updateMovie(movie:Movie,id:any):Observable<any>
    {
      return this._http.put(`${this.apiUrl}/${id}`,movie)
    }


    //get single data
    getOneMovie(id:any):Observable<any>
    {
      
      return this._http.get(`${this.apiUrl}/${id}`)
    }
  
    //search for movie name
    searchMovies(name:string):Observable<any>
    {
      return this._http.get(`${this.apiUrl}movie/${name}`);
    }

}

export interface Movie{
  mov_id?:string;
  mov_title?:string;
  mov_year?:number;
  mov_time?:number;
  mov_lang:string;
  mov_dt_rel:string;
  mov_rel_country:string
}