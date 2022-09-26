import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {RestoServiceService} from '../resto-service.service'

@Component({
  selector: 'app-add-resto',
  templateUrl: './add-resto.component.html',
  styleUrls: ['./add-resto.component.css']
})
export class AddRestoComponent implements OnInit {

  constructor(private resto:RestoServiceService) { }

    addResto =new FormGroup({
      name : new FormControl(''),
      email : new FormControl(''),
      address : new FormControl('')
    });

    alertBox:boolean = false;
    
  ngOnInit(): void {
  }

  collectResto(){
    this.resto.postList(this.addResto.value).subscribe((result)=>{
      // console.warn(result);
      this.alertBox = true;
    });

    this.addResto.reset({})
  }

  alertBoxClose(){
    this.alertBox =false;
  }

  required(input:any) 
  {
    if (input.value.length == 0)
     { 
        alert("message");  	
        return false; 
     }  	
     return true; 
   } 


}
