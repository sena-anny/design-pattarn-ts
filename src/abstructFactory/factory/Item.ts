export abstract class Item {
  protected caption: string
  protected constructor(caption: string) {
    this.caption = caption
  }
  abstract makeHTML(): void
}
