import { Component, OnInit } from '@angular/core';
import {MovieService, Movie} from '../../Services/Unit/unit.service'
import  {Router, ActivatedRoute} from '@angular/router'


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  movie: Movie={
    mov_id: '',
    mov_title: '',
    mov_year: 0,
    mov_time: 0,
    mov_lang: '',
    mov_dt_rel: '0000-00-00',
    mov_rel_country: '',
  };

  constructor(private MovieService:MovieService, 
              private router:Router,
              private activeRoute:ActivatedRoute) { }

  ngOnInit(): void {
      const id_entrada = <string>this.activeRoute.snapshot.params.id;
      console.log('id de entrada: '+id_entrada );
  
    if(id_entrada){
      this.MovieService.getMovie(id_entrada).subscribe(
        (res:any)=>{
          this.movie = res;
        },
        err=>console.log(err)
      );
    }
  }

  modificar()
  {
    this.MovieService.updateMovie(this.movie.mov_id, this.movie).subscribe(
      res=>{
        console.log(res);
      },
      err=>console.log(err)
    );
  
  this.router.navigate(['/home'])
}
}
