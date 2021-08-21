import { Aggregate } from './Aggregate'
import { Book } from './Book'
import { IteratorInter } from './Iterator'
import { BookShelfIterator } from './BookShelfIterator'

export class BookShelf implements Aggregate {
  private readonly books: Book[]
  private last = 0
  constructor() {
    this.books = []
  }
  getBookAt(index: number): Book {
    return this.books[index]
  }
  appendBook(book: Book): void {
    this.books[this.last] = book
    this.last++
  }
  getLength(): number {
    return this.last
  }
  iterator(): IteratorInter {
    return new BookShelfIterator(this)
  }
}
