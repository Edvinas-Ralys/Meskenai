import { BooksProvider } from "../../Contexts/Books"
import Layout from "./Layout"


function Index() {
  return (
    <BooksProvider>
          <Layout />
    </BooksProvider>
  )
}

export default Index
