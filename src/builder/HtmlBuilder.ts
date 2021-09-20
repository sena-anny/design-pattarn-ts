import { Builder } from './Builder'
import { writeFileSync } from 'fs'

export class HtmlBuilder extends Builder {
  private filename = ''
  private body = ''
  makeTitle(title: string): void {
    this.filename = `${title}.html`
    this.body += `<html><head><title>${title}</title></head><body>`
    this.body += `<h1>${title}</h1>`
  }
  makeString(str: string): void {
    this.body += `<p>${str}</p>`
  }
  makeItems(item: string[]): void {
    this.body += '<ul>'
    for (let i = 0; i < item.length; i++) {
      this.body += `<li>${item[i]}</li>`
    }
    this.body += '</ul>'
  }
  close(): void {
    this.body += '</body></html>'
    try {
      writeFileSync(this.filename, this.body)
    } catch (e) {
      console.error(e)
    }
  }
  getResult(): string {
    return this.filename
  }
}
