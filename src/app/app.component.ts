import { Component } from '@angular/core';
import { data } from './baza_de_cunostinte';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  renderResults: boolean = false;
  questions = data;
  activeQuestion: any = this.questions[0];

  constructor() {
  }

  printQuestions(): string {
    return JSON.stringify(this.questions, null, 2);
  }

  submitQuestions(): void {
    this.renderResults = true;
  }

  nextQuestion(): void {
    this.activeQuestion = this.activeQuestion.next[this.activeQuestion.answer];
  }
}
