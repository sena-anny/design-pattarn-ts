export class Singleton {
  private static singleton: Singleton = new Singleton()
  private constructor() {
    console.log('インスタンス生成しました')
  }
  static getInstance(): Singleton {
    return this.singleton
  }
}
