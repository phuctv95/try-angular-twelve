import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'try-angular-twelve';
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
