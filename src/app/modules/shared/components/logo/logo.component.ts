import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss']
})
export class LogoComponent implements OnInit {

  constructor(private dataService: DataService) {
    console.log(`LogoComponent: ${dataService.data1}`);
  }

  ngOnInit(): void {
  }

}
