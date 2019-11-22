import { Component, OnInit } from '@angular/core';




@Component({
  selector: 'app-my-table',
  templateUrl: './my-table.component.html',
  styleUrls: ['./my-table.component.css']
  
})
export class MyTableComponent implements OnInit {

  isMenuOpen: boolean = false;
  
  
  
  constructor() { }
  
  onClickMe(){
    this.isMenuOpen = !this.isMenuOpen;
  }

  ngOnInit() {
    
  }

}
