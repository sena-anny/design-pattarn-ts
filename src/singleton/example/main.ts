import { TicketMaker } from './TicketMaker'

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
