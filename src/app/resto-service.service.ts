import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class RestoServiceService {

  url = "http://localhost:3000/restaurants";
  userUrl ="http://localhost:3000/newUser";

  constructor(private http: HttpClient) { }

  getList(){
    return this.http.get(this.url);
  }

  postList(data:any){
    // console.log(data);
    return this.http.post(this.url,data)
  }

  deletResto(id:any){
    return this.http.delete(`${this.url}/${id}`);
  }

  getCurrentResto(id:any){
    return this.http.get(`${this.url}/${id}`);
  }

  updateResto(id:any,data:any){
    return this.http.put(`${this.url}/${id}`, data);
  }

  registerNewUser(data:any){
    return this.http.post(`${this.userUrl}`, data);
  }
  
}
