import { Item } from './Item'
import { writeFileSync } from 'fs'

export abstract class Page {
  protected title: string
  protected author: string
  protected content: Item[] = []
  protected constructor(title: string, author: string) {
    this.title = title
    this.author = author
  }
  add(item: Item): void {
    this.content.push(item)
  }
  abstract makeHTML(): string
  output(): void {
    const filename = `${this.title}.html`
    writeFileSync(filename, this.makeHTML())
    console.log(`${filename}を生成しました`)
  }
}
