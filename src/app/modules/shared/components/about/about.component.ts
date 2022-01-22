import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(private dataService: DataService) {
    console.log(`AboutComponent: ${dataService.data1}`);
  }

  ngOnInit(): void {
  }

}
