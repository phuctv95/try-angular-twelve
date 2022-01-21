import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-random-cat-showcase',
  templateUrl: './random-cat-showcase.component.html',
  styleUrls: ['./random-cat-showcase.component.scss']
})
export class RandomCatShowcaseComponent implements OnInit {

  imgSrc = null;
  isGettingCat = false;

  constructor(private http: HttpClient) {}

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
