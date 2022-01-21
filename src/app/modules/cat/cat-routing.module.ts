import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RandomCatShowcaseComponent } from './components/random-cat-showcase/random-cat-showcase.component';

const routes: Routes = [
  {
    path: '', component: RandomCatShowcaseComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatRoutingModule { }
