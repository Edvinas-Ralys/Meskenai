import { BooksDataProvider } from "./components/books/BooksData"
import BooksList from "./components/books/BooksList"
import './books.scss'
import Top from "./components/books/Top"

function App() {
  return (
  <BooksDataProvider>
    <section>
        <div className="container">
          <Top />
            <BooksList />
        </div>
    </section>
  </BooksDataProvider>
  )
}

export default App
