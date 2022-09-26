import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { RestoServiceService } from '../resto-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  addNewUser =new FormGroup({
    name : new FormControl(''),
    email : new FormControl(''),
    password : new FormControl('')
  });

  constructor(private resto:RestoServiceService) { }

  ngOnInit(): void {
  }

  collectNewUser(){
console.warn(this.addNewUser.value);

    this.resto.registerNewUser(this.addNewUser.value).subscribe((result)=>{
      console.log(result);
      
    })
  }

  // collectNewUser(){

  // }


}
