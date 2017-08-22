import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
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

@NgModule({
  // 组件声明;
  declarations: [
    AppComponent,
    Demo1Component,
    Demo2Component,
    Demo3Component,
    Demo4Component
  ],
  // imports数组中应该只有NgModule类。不要放置其它类型的类。
  imports: [
    BrowserModule,
    // 路由规则的定义 -- RouterModule.forRoot方法
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }, // <-- debugging purposes only
    ),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
