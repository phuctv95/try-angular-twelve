import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'cat',
    loadChildren: () => import('./modules/cat/cat.module').then(m => m.CatModule),
  },
  {
    path: 'dog',
    loadChildren: () => import('./modules/dog/dog.module').then(m => m.DogModule),
  },
  {
    path: '', pathMatch: 'full', redirectTo: 'cat',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
