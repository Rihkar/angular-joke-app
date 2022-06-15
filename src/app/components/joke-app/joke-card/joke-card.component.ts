import { Component, EventEmitter, Input, Output } from '@angular/core';
import { JokeType } from 'src/app/modules/jokeApp.modules';

@Component({
  selector: 'app-joke-card',
  templateUrl: './joke-card.component.html',
  styleUrls: ['./joke-card.component.scss']
})
export class JokeCardComponent  {
@Input() 
joke?:JokeType
@Output()
deleteJokeEvent = new EventEmitter<number>()
deleteJoke():void{
  this.deleteJokeEvent.emit()
}
showAnswer = false
toggleShowAnswer(){
this.showAnswer = !this.showAnswer
}

}
