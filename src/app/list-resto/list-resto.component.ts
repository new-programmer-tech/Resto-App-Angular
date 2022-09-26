import { Component, OnInit } from '@angular/core';
import { RestoServiceService } from '../resto-service.service';

@Component({
  selector: 'app-list-resto',
  templateUrl: './list-resto.component.html',
  styleUrls: ['./list-resto.component.css']
})
export class ListRestoComponent implements OnInit {

  list:any;
  constructor(private api :RestoServiceService) { }

  ngOnInit(): void {
    this.getAllResto();
    
  }

  getAllResto(){
    this.api.getList().subscribe({
      next:(res)=> {
        console.log(res);
        this.list =res;
      },
      error:()=>{
        alert("Error while fetching data")
      }
    })
  }

  deletResto(id:any){
    this.api.deletResto(id).subscribe({
      next:(res)=>{
        alert("Deleted");
        this.getAllResto();
      }
    })
  }

}
