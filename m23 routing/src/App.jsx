import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Home from './components/Home';
let router = createBrowserRouter(
  [
    {
      path: "/",
      element: <LandingPage />
    },
    {
      path: "/home",
      element: <Home />
    }
  ]
)
const App = () => {
  return (
    <RouterProvider router={router}>App</RouterProvider>
  )
}
export default App