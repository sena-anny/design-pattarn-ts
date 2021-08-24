export class Banner {
  private message: string
  constructor(s: string) {
    this.message = s
  }
  showWithParen(): void {
    console.log(`(${this.message})`)
  }
  showWithAster(): void {
    console.log(`*${this.message}*`)
  }
}
