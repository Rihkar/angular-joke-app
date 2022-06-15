import { Component } from '@angular/core';
import { JokeType } from 'src/app/modules/jokeApp.modules';

@Component({
  selector: 'app-joke-app',
  templateUrl: './joke-app.component.html',
  styleUrls: ['./joke-app.component.scss'],
})
export class JokeAppComponent {
  jokes: JokeType[] = [
    {
      question: 'what do you call a depressed programmer?',
      answer: 'rihards',
    },
  ];
  addJoke(joke: JokeType) {
    this.jokes = [...this.jokes, joke];
  }
  deleteJoke( jokeToDeleteI: number) {
   this.jokes = this.jokes.filter((_, jokeI: number) => jokeToDeleteI !== jokeI);
  }
}
