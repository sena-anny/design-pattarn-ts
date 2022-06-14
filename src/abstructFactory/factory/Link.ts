import { Item } from './Item'

export abstract class Link extends Item {
  protected url: string
  protected constructor(caption: string, url: string) {
    super(caption)
    this.url = url
  }
}
