export class TicketMaker {
  private ticket: number
  private static ticketMaker = new TicketMaker()
  private constructor() {
    this.ticket = 1000
  }
  static getInstance(): TicketMaker {
    return this.ticketMaker
  }
  static getNextTicketNumber(): number {
    return this.ticketMaker.ticket++
  }
}
