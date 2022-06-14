import { Item } from './Item'

export abstract class Tray extends Item {
  protected tray: Item[] = []
  protected constructor(caption: string) {
    super(caption)
  }
  add(item: Item): void {
    this.tray.push(item)
  }
}
