import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-displaytime',
  templateUrl: './displaytime.component.html',
  styleUrls: ['./displaytime.component.css']
})
export class DisplaytimeComponent implements OnInit {

  myname:string="Vijay Prathap"
  time:Date=new Date();
  constructor() {
    setInterval(()=>{this.time=new Date();},1000);
  }
  ngOnInit(): void {
  }

}
