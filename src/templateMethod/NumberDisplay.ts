import { AbstractDisplay } from './AbstractDisplay'

export class NumberDisplay extends AbstractDisplay {
  private num: number
  constructor(i: number) {
    super()
    this.num = i
  }
  close(): void {
    process.stdout.write('>>\n')
  }

  open(): void {
    process.stdout.write('<<')
  }

  print(): void {
    process.stdout.write(this.num.toString())
  }
}
