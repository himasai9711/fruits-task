import { Component, OnInit } from '@angular/core';
import { Fruits } from 'src/app/fruits';


@Component({
  selector: 'app-fruits',
  templateUrl: './fruits.component.html',
  styleUrls: ['./fruits.component.css']
})
export class FruitsComponent implements OnInit {
  fruits!: Fruits[];

  constructor() { 
    this.fruits = [
      {
        name: 'apple',
        color:'red'
      },
      {
        name: 'mango',
        color:'yellow'
      },
      {
        name: 'grapes',
        color:'green'
      }
    ]
  }

  ngOnInit(): void {
  }

}
