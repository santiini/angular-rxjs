import { Component } from '@angular/core';

import { Food } from '../common';

@Component({
  selector: 'app-demo4',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class Demo4Component {
  // 1. 变量赋值的方式初始化组件; 2. 使用构造函数来声明和初始化属性
  title = 'demo4 title';
  foodList = [
    // new Food(1, '大米33'),
    // new Food(2, '饺子333'),
    // new Food(3, '煎饼33'),
    // new Food(4, '面条333'),
    { id: 1, name: '111' },
    { id: 2, name: '222' },
    { id: 3, name: '333' },
    { id: 4, name: '444' },
  ];
  myHobby = this.foodList[0];
}
