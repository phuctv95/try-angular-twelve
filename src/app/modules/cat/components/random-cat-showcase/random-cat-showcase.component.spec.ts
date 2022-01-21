import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomCatShowcaseComponent } from './random-cat-showcase.component';

describe('RandomCatShowcaseComponent', () => {
  let component: RandomCatShowcaseComponent;
  let fixture: ComponentFixture<RandomCatShowcaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RandomCatShowcaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RandomCatShowcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
