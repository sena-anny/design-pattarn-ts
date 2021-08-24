import { Banner } from './Banner'
import { Print } from './Print'

export class PrintBanner extends Banner implements Print {
  constructor(s: string) {
    super(s)
  }
  printStrong(): void {
    this.showWithAster()
  }

  printWeak(): void {
    this.showWithParen()
  }
}
