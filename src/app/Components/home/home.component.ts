import { Component, OnInit } from '@angular/core';
import {Movie, MovieService} from '../../Services/Unit/unit.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  ListarMovies:any=[];
  constructor(private MovieService:MovieService, private router:Router) { }

  ngOnInit(): void {
    this.listarMovies();
  }

  listarMovies()
  {
    this.MovieService.getMovies().subscribe(
      res =>{
        console.log(res)
        this.ListarMovies=<any>res;
      },
      err => console.log(err)
    );
  }

  eliminar(id:string)
  {
    this.MovieService.deleteMovie(id).subscribe(
      res=>{
        console.log('movie delete');
        this.listarMovies();
      },
      err=> console.log(err)
      );
  }

  modificar(id:string){
    this.router.navigate(['/edit/'+id])
  }

}