/**
 * 公共类
 */
export class Food {
  // 方式2： TypeScript 提供的简写形式 —— 用构造函数的参数直接定义属性。
  constructor(
    public id: number,
    public name: string
  ) {}
}
