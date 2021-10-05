import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router'; 
import { ApiserviceService, Movie } from 'src/app/services/apiservice.service';


@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  movie: Movie={
    mov_id:'',
    mov_title:'',
    mov_year:0,
    mov_time:0,
    mov_lang:'',
    mov_dt_rel:'',
    mov_rel_country:'',
  };

  date = new Date().getFullYear();
  checkCounter:boolean[] = [false, false, false, false, false, false]
  
  constructor(private router:Router,
              private activeRoute:ActivatedRoute,
              private service:ApiserviceService) { }

  ngOnInit(): void {
    const mov_id = <string>this.activeRoute.snapshot.params.id;
    console.log(mov_id)
    if(mov_id){
      this.service.getOneMovie(mov_id).subscribe(
        res=>{
          this.movie = res[0];
          console.log(res[0]);
        },
        err=>console.log(err)
      );
    }
  }
  
  checkInputs(){
    const title = document.getElementById('alert-title')
    const year = document.getElementById('alert-year')
    const time = document.getElementById('alert-time')
    const lang = document.getElementById('alert-lang')
    const date = document.getElementById('alert-date')
    const country = document.getElementById('alert-country')
    const numRegex = new RegExp('^[0-9]+$');
    const letterRegex = /^[a-zA-Zñ]+$/
    const dateRegex = /^[0-9]{4}-[0-9]{2}-[0-9]{2}$/
    if (this.movie.mov_title!.length < 2) {
      this.checkCounter[0] = false
      title!.classList.add('show')
    } else {
      this.checkCounter[0] = true
      title!.classList.remove('show')
    }
    if (this.movie.mov_year!.toString().length !== 4 || this.movie.mov_year! < 1888 || this.movie.mov_year! > this.date || !numRegex.test(this.movie.mov_year!.toString())) {
      this.checkCounter[1] = false
      year!.classList.add('show')
    } else {
      this.checkCounter[1] = true
      year!.classList.remove('show')
    }
    if (!numRegex.test(this.movie.mov_time!.toString())) {
      this.checkCounter[2] = false
      time!.classList.add('show')
    } else {
      this.checkCounter[2] = true
      time!.classList.remove('show')
    }
    if (this.movie.mov_lang.length < 2 || !letterRegex.test(this.movie.mov_lang)) {
      this.checkCounter[3] = false
      lang!.classList.add('show')
    } else {
      this.checkCounter[3] = true
      lang!.classList.remove('show')
    }
    if (!dateRegex.test(this.movie.mov_dt_rel)) {
      this.checkCounter[4] = false
      date!.classList.add('show')
    } else {
      this.checkCounter[4] = true
      date!.classList.remove('show')
    }
    if (this.movie.mov_lang.length < 2 || !letterRegex.test(this.movie.mov_lang)) {
      this.checkCounter[5] = false
      country!.classList.add('show')
    } else {
      this.checkCounter[5] = true
      country!.classList.remove('show')
    }
    console.log(this.checkCounter)
    const checked = this.checkCounter.filter(check => check === true)
    if (checked.length === 6){
      this.update()
    } 
  }

  update() {

    this.service.updateMovie(this.movie, this.movie.mov_id).subscribe(
      res=>{
        console.log(res);
      },
      err=>console.log(err)
    );

    this.router.navigate(['/home']);
  }

}
