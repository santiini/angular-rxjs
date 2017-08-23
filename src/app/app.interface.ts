/**
 * 数据接口
 */
export interface User {
  name: string; // 名字
  age?: number; // 年龄
  gender?: string; // 性别;
  role?: string; // 角色
  theme?: Theme; // 主题
  isActive?: boolean; // 是否激活
  hobbies?: { [key: string]: boolean }; // 爱好
  topics?: string[]; // 话题
  province: number; // 省
  city: number; // 市
}

export interface Theme {
  display: string; // 显示文本
  backgroundColor: string; // 背景色
  fontColor: string; // 字体颜色
}
