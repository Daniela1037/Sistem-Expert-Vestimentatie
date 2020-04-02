import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  @Input() result;
  resultImgUrl: string = '';

  constructor() { }

  ngOnInit(): void {
    console.log(this.result)
    this.resultImgUrl = `../../../assets/images/${this.result}.jpg`;
  }

}
