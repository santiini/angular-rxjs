/**
 * 路由管理文件
 */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// 组件引入;
import { Demo1Component } from './demo1/index.component';
import { Demo2Component } from './demo2/index.component';
import { Demo3Component } from './demo3/index.component';
import { Demo4Component } from './demo4/index.component';


// 定义路由对象
const appRoutes: Routes = [
  { path: '', component: Demo1Component },
  { path: 'demo1', component: Demo1Component },
  { path: 'demo2', component: Demo2Component },
  { path: 'demo3', component: Demo3Component },
  { path: 'demo4', component: Demo4Component },
];

// 把路由融入到NgModel 模块之中
@NgModule({
  imports: [ RouterModule.forRoot(appRoutes) ],
  // exports是必须的，因为它可以是组件 router-outlet 被识别;
  exports: [ RouterModule ],
})
export class AppRouterModel {}
