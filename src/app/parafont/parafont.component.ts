import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parafont',
  templateUrl: './parafont.component.html',
  styleUrls: ['./parafont.component.css']
})
export class ParafontComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  x:number=1;
  y:number=300;
  hi(){
    this.x+=100;
  }
  bye(){
    this.y-=100;
  }
}
