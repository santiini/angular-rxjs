import { Component, OnInit } from '@angular/core';

import { User, Theme } from '../app.interface';

@Component({
  selector: 'app-demo3',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class Demo3Component implements OnInit {
  title = 'demo3-新用户';
  content = '这是demo3';
  user: User;

  genders = [{ value: 'F', display: '女'}, { value: 'M', display: '男'}];

  roles = [{ value: 'admin', display: '管理员'}, { value: 'user', display: '普通用户'} ];

  themes: Theme[] = [
    { backgroundColor: 'black', fontColor: 'white', display: '黑色' },
    { backgroundColor: 'white', fontColor: 'black', display: '白色' },
    { backgroundColor: 'grey', fontColor: 'white', display: '灰色' },
  ];

  topics = [
    { value: 'game', display: '游戏' },
    { value: 'tech', display: '科技' },
    { value: 'life', display: '生活' },
  ];

  hobbies = [
    { value: 'reading', display: '看书' },
    { value: 'music', display: '听歌' },
    { value: 'movie', display: '电影' }
  ];

  provinces = [
    {pk: 1, pv: '北京'},
    {pk: 16, pv: '福建'},
  ];

  citieData = [
    { pk: 1, ck: 72, cv: '朝阳区' }, { pk: 1, ck: 2800, cv: '海淀区' },
    { pk: 1, ck: 2801, cv: '西城区' }, { pk: 16, ck: 1303, cv: '福州市'},
    { pk: 16, ck: 1315, cv: '厦门市' }, { pk: 16, ck: 1332, cv: '泉州市'},
  ];

  cities = this.citieData.filter(city => city.pk === 16);

  ngOnInit(): void {
    this.user = {
      name: '',
      gender: this.genders[0].value,
      role: this.roles[1].value,
      theme: this.themes[0],
      isActive: false,
      hobbies: { 'music': true },
      topics: [ this.topics[1].value],
      province: 16,
      city: 1315
    };
  }
}
