import { TicketMaker } from './TicketMaker'
import { Triple } from './Triple'

export function ticketMakerFunc(): void {
  console.log('Start ticketMakerFunc Func')
  for (let i = 0; i < 10; i++) {
    console.log(TicketMaker.getNextTicketNumber())
  }
  for (let i = 0; i < 10; i++) {
    console.log(TicketMaker.getInstance())
  }
  console.log('End ticketMakerFunc Func')
}

export function tripleFunc(): void {
  // const objects: Triple[] = [
  //   Triple.getInstance(0),
  //   Triple.getInstance(1),
  //   Triple.getInstance(2),
  //   Triple.getInstance(3),
  //   Triple.getInstance(4),
  // ]
  //
  // for (let i = 0; i < objects.length; i++) {
  //   for (let j = 0; j < objects.length; j++) {
  //     if (objects[i] === objects[j]) {
  //       console.log(`${i}と${j}は同じインスタンス`)
  //     } else {
  //       console.log(`${i}と${j}は同じインスタンスではない`)
  //     }
  //   }
  // }

  for (let i = 0; i < 9; i++) {
    const obj = Triple.getInstance(i % 3)
    console.log(obj.toString())
  }
}
