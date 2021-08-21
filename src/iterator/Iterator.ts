import { Book } from './Book'

export interface IteratorInter {
  hasNext(): boolean
  next(): Book
}
