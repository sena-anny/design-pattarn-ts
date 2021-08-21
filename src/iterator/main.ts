import { BookShelf } from './BookShelf'
import { Book } from './Book'
import { IteratorInter } from './Iterator'

export function iteratorFunc() {
  const bookShelf: BookShelf = new BookShelf()
  bookShelf.appendBook(new Book('Around the World in 80 Days'))
  bookShelf.appendBook(new Book('Bible'))
  bookShelf.appendBook(new Book('Cinderella'))
  bookShelf.appendBook(new Book('Daddy-Long-Legs'))
  const it: IteratorInter = bookShelf.iterator()
  while (it.hasNext()) {
    const book: Book = it.next()
    console.log(book.getName())
  }
}
