import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-random-cat-showcase',
  templateUrl: './random-cat-showcase.component.html',
  styleUrls: ['./random-cat-showcase.component.scss']
})
export class RandomCatShowcaseComponent implements OnInit {

  imgSrc = null;
  isGettingCat = false;

  constructor(private http: HttpClient, private dataService: DataService) {
    console.log(`RandomCatShowcaseComponent: ${dataService.data1}`);
  }

  ngOnInit(): void {
    this.getRandomCatPhoto();
  }

  getRandomCatPhoto() {
    this.isGettingCat = true;
    this.http
      .get<any>('https://aws.random.cat/meow')
      .subscribe(res => {
        this.imgSrc = res.file;
      });
  }

  onLoadImgCompleted() {
    this.isGettingCat = false;
  }

}
