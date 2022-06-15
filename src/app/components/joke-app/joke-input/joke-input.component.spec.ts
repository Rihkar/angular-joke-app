import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JokeInputComponent } from './joke-input.component';

describe('JokeInputComponent', () => {
  let component: JokeInputComponent;
  let fixture: ComponentFixture<JokeInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JokeInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JokeInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
