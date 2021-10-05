import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ApiserviceService} from '../services/apiservice.service';
import {ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  constructor(private service:ApiserviceService,private router:ActivatedRoute) { }
  errorMsg:any;
  successMsg:any;
  getparamId:any;

  ngOnInit(): void {
    // console.log(this.router.snapshot.paramMap.get('id'),'getid'),
    this.getparamId=this.router.snapshot.paramMap.get('id');
    console.log(this.getparamId);
    
    if(this.getparamId){
      this.service.getSingleData(this.getparamId).subscribe((res)=>{
        console.log(res,'res3==>')
        this.userForm.patchValue({  
        "mov_title":res.mov_title,
        'mov_dt_rel':res.mov_dt_rel,
        'mov_rel_country':res.mov_rel_country,
        'mov_lang':res.mov_lang
          
        });
    });

    }

    
  }
  userForm=new FormGroup({
    "mov_title":new FormControl('',Validators.required),
    'mov_dt_rel':new FormControl('',Validators.required),
    'mov_rel_country':new FormControl('',Validators.required),
    'mov_lang':new FormControl('',Validators.required)

  });
  userSubmit() {
   if(this.userForm.valid){
     console.log(this.userForm.value)
     this.service.createData(this.userForm.value).subscribe((res)=>{
       console.log(res,'res4===>')
       this.userForm.reset();
       this.successMsg='Movie added';
       console.log(this.successMsg)
     })
   }
   else
   {
     this.errorMsg='All field is required!'
   }
  }
  userUpdate(){

    if(this.userForm.valid){
      this.service.updateData(this.userForm.value,this.getparamId).subscribe((res)=>{
        console.log(res,'req');
        this.successMsg='Movie updated';
        
      })
    }else{
      this.errorMsg='All field is required!'
    }
  }
}
