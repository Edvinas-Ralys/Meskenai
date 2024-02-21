import { HeroesProvider } from "../../Contexts/Heroes"
import Layout from "./Layout"


function Index() {
  return (
    <HeroesProvider>
          <Layout />
    </HeroesProvider>
  )
}

export default Index
