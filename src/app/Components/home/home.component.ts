import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { ApiserviceService, Movie } from 'src/app/services/apiservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  //varibale
  ListMovie: Movie[] = [];

  constructor(private service:ApiserviceService,private router:ActivatedRoute,
    private routerlink:Router) { }

  ngOnInit(): void {
    this.listMovie();
  }
title = ''
searchMovies(){
  console.log(this.title)
  this.service.searchMovies(this.title).subscribe(
    res => {
      this.ListMovie=<any>res;
      console.log(res)
    },
    err => console.log(err)
  )
}
  fixDate(date:string) {
    const newDate:string[] = date.split('-')
    return [newDate[2].split('T')[0], newDate[1], newDate[0]].join('-')
  }

  listMovie()
  {
    this.service.getMovies().subscribe(
      res=>{
        this.ListMovie=<any>res;
      },
      err => console.log(err)
    );
  }


  

  delete(id:string)
  {
    this.service.deleteMovie(id).subscribe(
      res=>{
        this.listMovie();
      },
      err=> console.log(err)
      );
  }

  update(id:string){
    this.routerlink.navigate(['/update/'+id]);
  }
}
