import { Component, OnInit } from '@angular/core';
import { Triangles } from 'src/app/triangle';


@Component({
  selector: 'app-triangle',
  templateUrl: './triangle.component.html',
  styleUrls: ['./triangle.component.css']
})
export class TriangleComponent implements OnInit {
 triangle!: Triangles[];
  constructor() {
    this.triangle = [
      {
        name: "triangle1",
        height: 3,
        base: 4,
        side1:4,
        side3: 6

      },
      {
        name: "triangle2",
        height: 6,
        base: 4,
        side1: 7,
        side3: 6

      },
      {
        name: "triangle3",
        height: 4,
        base: 15,
        side1: 15,

        side3: 15

      }
    ]
   }

  ngOnInit(): void {
  }

}
