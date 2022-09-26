import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { RestoServiceService } from '../resto-service.service';

@Component({
  selector: 'app-update-resto',
  templateUrl: './update-resto.component.html',
  styleUrls: ['./update-resto.component.css']
})
export class UpdateRestoComponent implements OnInit {

  editRestoObj:any;

  alertBox:boolean =false;

  editResto =new FormGroup({
    name : new FormControl(''),
    email : new FormControl(''),
    address : new FormControl('')
  });

  constructor(private router :ActivatedRoute,
    private resto :RestoServiceService) { }

  ngOnInit(): void {
    this.resto.getCurrentResto(this.router.snapshot.params['id']).subscribe((result)=>{
      this.editRestoObj = result
        this.editResto =new FormGroup({
        name : new FormControl(this.editRestoObj['name']),
        email : new FormControl(this.editRestoObj['email']),
        address : new FormControl(this.editRestoObj['address'])
        });
  })
  }

  updateResto(){
    console.warn(this.editResto.value);
    this.resto.updateResto(this.router.snapshot.params['id'],this.editResto.value).
    subscribe((result)=>{
      console.warn(result);
      this.alertBox =true;

    })
  }

  alertBoxClose(){
    this.alertBox =false;
  }


}
