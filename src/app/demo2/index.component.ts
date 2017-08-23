import { Component } from '@angular/core';

@Component({
  selector: 'app-demo2',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
})
export class Demo2Component {
  name: string = 'demo2';

  content: string = '这是demo2';

  childValue: number = 111;

  childName: string = '子组件name';

  changeMsg: string;

  buttonChickMsg: string;

  countChange($event: number) {
    this.changeMsg = `子组件change事件触发，值是：${$event}`;
  }

  childButton(msg) {
    console.log(event); // 事件对象;
    console.log(msg);
    this.buttonChickMsg = `按钮点击事件：${msg.name}, ${msg.time}`;
  }
}
