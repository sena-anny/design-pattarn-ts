import { BookShelf } from './BookShelf'
import { Book } from './Book'
import { IteratorInter } from './Iterator'

export class BookShelfIterator implements IteratorInter {
  private bookShelf: BookShelf
  private index: number
  constructor(bookShelf: BookShelf) {
    this.bookShelf = bookShelf
    this.index = 0
  }
  hasNext(): boolean {
    if (this.index < this.bookShelf.getLength()) {
      return true
    } else {
      return false
    }
  }

  next(): Book {
    const book: Book = this.bookShelf.getBookAt(this.index)
    this.index++
    return book
  }
}
