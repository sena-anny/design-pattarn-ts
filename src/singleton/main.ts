import { Singleton } from './Singleton'

export function singletonFunc(): void {
  console.log('Start Singleton Func')
  const obj1 = Singleton.getInstance()
  const obj2 = Singleton.getInstance()
  // const obj3 = new Singleton()
  if (obj1 === obj2) {
    console.log('obj1とobj2は同じインスタンスです')
  } else {
    console.log('obj1とobj2は同じインスタンスではありません')
  }
  console.log('End Singleton Func')
}
