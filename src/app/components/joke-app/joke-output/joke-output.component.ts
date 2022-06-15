import { Component, EventEmitter, Input, Output } from '@angular/core';
import { JokeType } from 'src/app/modules/jokeApp.modules';



@Component({
  selector: 'app-joke-output',
  templateUrl: './joke-output.component.html',
  styleUrls: ['./joke-output.component.scss']
})
export class JokeOutputComponent {
  @Input() 
  jokes?:JokeType[] ;
  @Output() 
  deleteJokeEvent = new EventEmitter<number>()
  deleteJoke(jokeToDeleteI: number):void{
    this.deleteJokeEvent.emit(jokeToDeleteI);
  }


}
