import { Component, OnInit } from '@angular/core';
import {MovieService, Movie} from '../../Services/Unit/unit.service'
import  {Router} from '@angular/router'

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})

export class AddComponent implements OnInit {

  movie: Movie={
    mov_id: '',
    mov_title: '',
    mov_year: 0,
    mov_time: 0,
    mov_lang: '',
    mov_dt_rel: '0000-00-00',
    mov_rel_country: '',
  };
  constructor(private MovieService:MovieService, private router:Router) { }

  ngOnInit(): void {
  }

  agregar(){
    // delete this.movie.mov_id;
    this.MovieService.saveMovie(this.movie).subscribe(
      res=>{
        this.router.navigate(['/home']); 
        console.log(res);     
     },
     err=> console.error(err));
     console.log(this.movie)
  }

}
