import { Print } from './Print'
import { PrintBanner } from './PrintBanner'

export function adopterFunc(): void {
  const print: Print = new PrintBanner('Hello')
  print.printStrong()
  print.printWeak()
}
