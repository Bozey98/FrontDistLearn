import { Component, OnInit } from '@angular/core';
import { Ques, Ans, Test1 } from './mock';

@Component({
  selector: 'app-test-ques',
  templateUrl: './test-ques.component.html',
  styleUrls: ['./test-ques.component.css']
})
export class TestQuesComponent implements OnInit {

  listQues = Ques;
  listAns = Ans;
  listTest = Test1;
  selectAns:Answers;
  x = Test1.question[1].answer
  i = 0;

  nextQue() {
    this.i++;
    if (this.i == this.listQues.length) {
      alert("It is all");
      this.i = 0;
    }
  }

  isClicked(answ:Answers) {
    console.log(Test1.question[1].answer[1].name);
    this.selectAns = answ;
    if (this.selectAns.isCorrect) {
      alert("Красава");
    }
    else {
      alert("Дебил");
    }
  }

  

 
  
  constructor() { }

  ngOnInit() {
  }

}

export class Questions {
  answer: {};
  id:number;
  name:string;
}

export class Answers {
  isCorrect: boolean;
  id: number;
  name:string;
}
