import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './components/about/about.component';
import { LogoComponent } from './components/logo/logo.component';
import { DataService } from 'src/app/services/data.service';



@NgModule({
  declarations: [
    AboutComponent,
    LogoComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LogoComponent,
  ],
  providers: [
    DataService
  ],
})
export class SharedModule { }
