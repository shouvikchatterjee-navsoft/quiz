import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss'],  
  encapsulation:ViewEncapsulation.ShadowDom
})
export class QuizComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
