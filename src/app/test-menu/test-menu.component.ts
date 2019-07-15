import { Component, OnInit } from '@angular/core';
import { Ques } from './test-ques/mock'
import { Questions } from './test-ques/test-ques.component';

@Component({
  selector: 'app-test-menu',
  templateUrl: './test-menu.component.html',
  styleUrls: ['./test-menu.component.css']
})
export class TestMenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

export class Tests {
  question: Questions[];
  id:number;
  name:string;
}


