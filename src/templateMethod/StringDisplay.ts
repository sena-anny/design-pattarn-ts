import { AbstractDisplay } from './AbstractDisplay'

export class StringDisplay extends AbstractDisplay {
  private readonly word: string
  constructor(s: string) {
    super()
    this.word = s
  }

  close(): void {
    this.printLine()
  }

  open(): void {
    this.printLine()
  }

  print(): void {
    process.stdout.write(`|${this.word}|\n`)
  }

  private printLine() {
    process.stdout.write('+')
    for (let i = 0; i < this.word.length; i++) {
      process.stdout.write('-')
    }
    process.stdout.write('+\n')
  }
}
