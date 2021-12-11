import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {
  viewflag:boolean=false;
  updateflag:boolean=false;
  onclicked:any;
  constructor() { }
  namelist=[{name:"Vijay",age:"10"},{name:"Ram",age:"20"}];
  view(i:number){
    this.onclicked=this.namelist[i];
    this.viewflag=true;
    this.updateflag=false;
  }
  update(i:number){
    this.onclicked=this.namelist[i];
    this.viewflag=false;
    this.updateflag=true;
  }
  delete(i:number){
    this.onclicked=this.namelist[i];
    this.viewflag=false;
    this.updateflag=false;
  }
  ngOnInit(): void {
  }
}