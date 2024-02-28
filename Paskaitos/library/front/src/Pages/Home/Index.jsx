import { HomeProvider } from "../../Contexts/Home"
import Layout from "./Layout"

function Index() {
  return (
    <HomeProvider>
      <Layout />
    </HomeProvider>
  )
}

export default Index
