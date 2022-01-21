import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RandomDogShowcaseComponent } from './components/random-dog-showcase/random-dog-showcase.component';

const routes: Routes = [
  {
    path: '', component: RandomDogShowcaseComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DogRoutingModule { }
