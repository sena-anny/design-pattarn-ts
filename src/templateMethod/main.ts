import { AbstractDisplay } from './AbstractDisplay'
import { NumberDisplay } from './NumberDisplay'
import { StringDisplay } from './StringDisplay'

export function templateMethodFunc(): void {
  const d1: AbstractDisplay = new NumberDisplay(5)
  const d2: AbstractDisplay = new StringDisplay('Hello world')
  const d3: AbstractDisplay = new StringDisplay('こんにちわ')
  d1.display()
  d2.display()
  d3.display()
}
