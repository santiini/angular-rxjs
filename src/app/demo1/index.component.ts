import { Component } from '@angular/core';

import { Food } from '../common';

@Component({
  selector: 'app-demo1',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class Demo1Component {
  // 1. 变量赋值的方式初始化组件; 2. 使用构造函数来声明和初始化属性
  title = 'demo1 title';
  foodList = [
    new Food(1, '大米'),
    new Food(2, '饺子'),
    new Food(3, '煎饼'),
    new Food(4, '面条'),
  ];
  myHobby = this.foodList[0];
}
