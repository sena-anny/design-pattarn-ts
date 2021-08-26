import { Product } from './Product'

export class IDCard extends Product {
  private readonly owner: Map<number, string>
  constructor(owner: Map<number, string>) {
    super()
    console.log(`${owner}さんのカードを作ります`)
    console.log(owner)
    this.owner = owner
  }
  use(): void {
    console.log(`${this.owner}のカードを使います`)
    console.log(this.owner)
  }
  getOwner(): Map<number, string> {
    return this.owner
  }
}
