import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-random-dog-showcase',
  templateUrl: './random-dog-showcase.component.html',
  styleUrls: ['./random-dog-showcase.component.scss']
})
export class RandomDogShowcaseComponent implements OnInit {

  imgSrc = '';
  videoSrc = '';
  isGettingDog = false;

  @ViewChild('video') videoEle: ElementRef<HTMLVideoElement> | undefined;

  constructor(private http: HttpClient, private dataService: DataService) {
    console.log(`RandomDogShowcaseComponent: ${dataService.data1}`);
  }

  ngOnInit(): void {
    this.getRandomCatPhoto();
  }

  getRandomCatPhoto() {
    this.isGettingDog = true;
    this.http
      .get<any>('https://random.dog/woof.json')
      .subscribe(res => {
        if ((res.url as string).endsWith('.mp4') || (res.url as string).endsWith('.webm')) {
          this.imgSrc = '';
          this.videoSrc = res.url;
          this.videoEle?.nativeElement.load();
        } else {
          this.imgSrc = res.url;
          this.videoSrc = '';
        }
      });
  }

  onLoadMediaCompleted() {
    this.isGettingDog = false;
    if (this.videoSrc) {
      this.videoEle?.nativeElement.play();
    }
  }

}
