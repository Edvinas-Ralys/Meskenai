import { AuthProvider } from "./Context/Auth"
import { RouterProvider } from "./Context/Router"
import "./Styles/app.scss"

function App() {
  return (
    <AuthProvider>
      <RouterProvider></RouterProvider>
    </AuthProvider>
  )
}

export default App
