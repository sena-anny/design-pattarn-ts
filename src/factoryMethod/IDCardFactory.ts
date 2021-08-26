import { Factory } from './Factory'
import { Product } from './Product'
import { IDCard } from './IDCard'

export class IDCardFactory extends Factory {
  private owners: Map<number, string>[] | undefined
  private cardNumber = 0

  protected createProduct(owner: string): Product {
    return new IDCard(new Map().set(this.getCardNumber(), owner))
  }

  protected registerProduct(product: Product): void {
    this.owners?.push((product as IDCard).getOwner())
  }

  getOwners(): Map<number, string>[] {
    return this.owners || []
  }

  private getCardNumber(): number {
    this.cardNumber++
    return this.cardNumber
  }
}
