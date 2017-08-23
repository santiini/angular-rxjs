/**
 * 子组件之内
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';

interface BookMark {
  name: string;
  time: string;
}

@Component({
  selector: 'app-child1',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
})
export class Child1Component {
  title = 'child demo1';
  // 组件输入属性 -- 相当于vue的props
  @Input() count: number = 1;

  // 修改传入的属性名 和 组件内的属性名 -- tips: 不推荐修改，因为回导致组件内出现两个同属性名;
  // @Input('name') childName: string = '待定';
  @Input() name: string = '待定';

  private childName: string = '其他属性';

  // 组件的输出属性, 利用eventEmitter -- 相当于 vue中的子组件的 $emmit(eventName, params)
  // @Output() change: EventEmitter<number> = new EventEmitter<number>();
  // tips: 为了双向绑定 --  输出属性名称变更： change -> countChange
  @Output() countChange: EventEmitter<number> = new EventEmitter<number>();

  // emit参数: number
  // @Output() buttonChick: EventEmitter<string> = new EventEmitter<string>();
  // emit参数: any
  @Output() buttonChick: EventEmitter<BookMark> = new EventEmitter<BookMark>();

  increment() {
    this.count++;
    this.countChange.emit(this.count);
  }

  decrement() {
    this.count--;
    this.countChange.emit(this.count);
  }

  triggerClickButton() {
    // this.buttonChick.emit(this.name);
    const mark = {
      name: 'sunxt', time: '2017-08-23'
    };
    this.buttonChick.emit(mark);
  }
}
