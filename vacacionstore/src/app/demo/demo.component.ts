import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {

  title = 'vacacionstore';
  projects=['inseminacion','engorde','lecheria']
  power=10;
  ngOnInit(){
    
  }
  addItem(){
    this.projects.push('new item')
  }
  deleteItem(index:number){
    this.projects.splice(index,1)

  }
}
