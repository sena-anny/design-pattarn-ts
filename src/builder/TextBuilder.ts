import { Builder } from './Builder'

export class TextBuilder extends Builder {
  private text = ''
  makeTitle(title: string): void {
    this.text += '====================\n'
    this.text += `『 ${title} 』`
    this.text += '\n'
  }
  makeString(str: string): void {
    this.text += `■ ${str}\n`
    this.text += '\n'
  }
  makeItems(item: string[]): void {
    for (let i = 0; i < item.length; i++) {
      this.text += `・ ${item[i]} \n`
    }
    this.text += '\n'
  }
  close(): void {
    this.text += '====================\n'
  }
  getResult(): string {
    return this.text
  }
}
