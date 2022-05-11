import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adding',
  templateUrl: './adding.component.html',
  styleUrls: ['./adding.component.css']
})
export class AddingComponent implements OnInit {
  num1!: number;
  num2!: number;
  sum!:number;
  constructor() {

   }

  ngOnInit(): void {
    
  }
  onSubmit(){
     this.sum = this.num1 + this.num2
      

  }

}
