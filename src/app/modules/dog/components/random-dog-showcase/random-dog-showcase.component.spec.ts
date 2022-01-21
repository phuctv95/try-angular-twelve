import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomDogShowcaseComponent } from './random-dog-showcase.component';

describe('RandomDogShowcaseComponent', () => {
  let component: RandomDogShowcaseComponent;
  let fixture: ComponentFixture<RandomDogShowcaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RandomDogShowcaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RandomDogShowcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
