import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiserviceService } from '../services/apiservice.service';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.scss']
})
export class ReadComponent implements OnInit {

  constructor(private service:ApiserviceService) { 
  
  }
  readData:any;
  successMsg:any;


  ngOnInit(): void {
    this.getAllData();
  }
  // getdeleteID
  deleteID(id:any){

    this.service.deleteData(id).subscribe((res)=>{
      console.log(res,'deleted==>')
      this.successMsg='Movie deleted';
      console.log(id)

      // refresh the page
      this.service.getAllData().subscribe((res)=>{
        console.log(res,'res==>');
        this.readData=res;
        
      });
      
    })
  };


  // getData:id
  getAllData(){
    this.service.getAllData().subscribe((res)=>{
      console.log(res,'res==>');
      this.readData=res;
      
    });

  };


}
