import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  activeUsers :User[] = [{nickname: "danny"}, {nickname: "bobby"}]
  messageHistory :Message[] = [{nickname: "danny", time: "11:10", content: "Hi!"},
                              {nickname: "bobby", time: "08:33", content: "Whats up?"},
                              {nickname: "danny", time: "23:54", content: "Good, you?"}]
  registered :boolean = true
  constructor() { }

  ngOnInit(): void {
  }

  print(str :string){
    const date = new Date();
    this.messageHistory.push({nickname: "User", content: str, time: date.getHours() + ":" + date.getMinutes()})
    console.log(str)
  }

}
