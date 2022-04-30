import { Component, OnInit, ViewChild } from '@angular/core';
import { AllCandidateService } from 'src/app/services/all-candidate.service';

@Component({
  selector: 'app-candidate-list',
  templateUrl: './candidate-list.component.html',
  styleUrls: ['./candidate-list.component.css']
})


export class CandidateListComponent implements OnInit {
  
  
  data:any;
  allCandidateData:any;
  allCandidateStringifiedData:any;
  totalRecords:number | undefined;
  page:number=1
  responsive:boolean = true
  stringifiedData: any;
  parsedJson: any; 
  access_token: any; 

  constructor(private candidate:AllCandidateService) {}

  ngOnInit(): void {

    this.candidate.getData_accesstoken().subscribe(data=>{
      this.data = data;
      //console.log(data);
      this.stringifiedData = JSON.stringify(this.data);  
      this.parsedJson = JSON.parse(this.stringifiedData);  
      this.access_token = this.parsedJson['data']['access_token'];
      localStorage.setItem('userToken',this.access_token);
      });

      this.candidate.getData_allCandidateList().subscribe(data=>{
        console.log(data)
        this.allCandidateData = data;
        this.stringifiedData = JSON.stringify(this.allCandidateData);
        this.parsedJson = JSON.parse(this.stringifiedData);
        this.allCandidateStringifiedData = this.parsedJson['data']['candidates']; 
      console.log(this.allCandidateStringifiedData) })

  }



 
}
