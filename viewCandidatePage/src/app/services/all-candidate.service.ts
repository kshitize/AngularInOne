import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AllCandidateService {
  data:any;
  stringifiedData: any;
  parsedJson: any; 
  access_token: any; 


  constructor(private http:HttpClient) {
   }

  

  getData_accesstoken(){
    //console.log('in service getData_accesstoken')
    let url = 'https://api.futuretechconsulting.in/v0/login'
    const headers = { 'content-type': 'application/json'}  
    let body = {
      "email":"jondoes@gmail.com",
      "password":"dsdsdasdsa",
      "role":"TA"
    }
    let stringbody = JSON.stringify(body);
    return this.http.post(url,
    {
      "email":"jondoes@gmail.com",
      "password":"dsdsdasdsa",
      "role":"TA"
    })
  }


  getData_allCandidateList(){
    let url = 'https://api.futuretechconsulting.in/v0/auth/candidate?page=1&limit=10';
    return this.http.get(url,{headers: new HttpHeaders({'Authorization': 'Bearer '+ localStorage.getItem('userToken')})});
  }


}
