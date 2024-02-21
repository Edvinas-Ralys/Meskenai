import { AuthorsProvider } from "../../Contexts/Authors"
import Layout from "./Layout"


function Index() {
  return (
    <AuthorsProvider>
          <Layout />
    </AuthorsProvider>
  )
}

export default Index
