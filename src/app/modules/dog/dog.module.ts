import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RandomDogShowcaseComponent } from './components/random-dog-showcase/random-dog-showcase.component';
import { MatButtonModule } from '@angular/material/button';
import { DogRoutingModule } from './dog-routing.module';



@NgModule({
  declarations: [
    RandomDogShowcaseComponent
  ],
  imports: [
    CommonModule,
    DogRoutingModule,
    MatButtonModule,
  ]
})
export class DogModule { }
