import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JokeOutputComponent } from './joke-output.component';

describe('JokeOutputComponent', () => {
  let component: JokeOutputComponent;
  let fixture: ComponentFixture<JokeOutputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JokeOutputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JokeOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
