import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JokeAppComponent } from './components/joke-app/joke-app.component';
import { JokeInputComponent } from './components/joke-app/joke-input/joke-input.component';
import { JokeOutputComponent } from './components/joke-app/joke-output/joke-output.component';
import { JokeCardComponent } from './components/joke-app/joke-card/joke-card.component';

@NgModule({
  declarations: [
    AppComponent,
    JokeAppComponent,
    JokeInputComponent,
    JokeOutputComponent,
    JokeCardComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
