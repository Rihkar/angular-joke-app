import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { JokeType } from 'src/app/modules/jokeApp.modules';

@Component({
  selector: 'app-joke-input',
  templateUrl: './joke-input.component.html',
  styleUrls: ['./joke-input.component.scss']
})
export class JokeInputComponent implements OnInit{
  jokeForm: FormGroup = this.fb.group({});

  @Output() addJokeEvent = new EventEmitter<JokeType>()

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.buildForm()
  }
  addJoke() {
    this.jokeForm.markAllAsTouched()
   if(this.jokeForm.valid){
    this.addJokeEvent.emit(this.jokeForm.value)
   }
   console.log(this.jokeForm.value);
   
  }

  buildForm() {
    this.jokeForm = this.fb.group({
      question: ['', Validators.required],
      answer: ['', Validators.required],
    });
  }
}
