import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RandomCatShowcaseComponent } from './components/random-cat-showcase/random-cat-showcase.component';
import { MatButtonModule } from '@angular/material/button';
import { CatRoutingModule } from './cat-routing.module';
import { DataService } from 'src/app/services/data.service';



@NgModule({
  declarations: [
    RandomCatShowcaseComponent
  ],
  imports: [
    CommonModule,
    CatRoutingModule,
    MatButtonModule,
  ],
  providers: [DataService]
})
export class CatModule { }
