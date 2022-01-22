import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './modules/shared/components/about/about.component';

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
    path: 'about', component: AboutComponent
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
