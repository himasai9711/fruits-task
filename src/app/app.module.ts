import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FruitsComponent } from './MyComponents/fruits/fruits.component';
import { AddingComponent } from './MyComponents/adding/adding.component';
import { FormsModule } from '@angular/forms';
import { TriangleComponent } from './MyComponents/triangle/triangle.component';

@NgModule({
  declarations: [
    AppComponent,
    FruitsComponent,
    AddingComponent,
    TriangleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
