import { Factory } from './Factory'
import { IDCardFactory } from './IDCardFactory'
import { Product } from './Product'

export function factoryMethodFunc(): void {
  const factory: Factory = new IDCardFactory()
  const card1: Product = factory.create('KJ')
  const card2: Product = factory.create('YJ')
  card1.use()
  card2.use()
}
