import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom"
import Home from "./pages/Home/Home"
import About from "./pages/About/About"
import Services from "./pages/Services/Services"
import Contact from "./pages/Contact/Contact"
import Navbar from "./components/Navbar/Navbar"
import Footer from "./components/Footer/Footer"
import './App.css'

function Layout() {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

const router = createBrowserRouter([
  {
    path:"/",
    element:<Layout />,
    children:[
      {
        path:"/",
        element:<Home />,
      },
      {
        path:"/about",
        element:<About />,
      },
      {
        path:"/services",
        element:<Services />,
      },
      {
        path:"/contact",
        element:<Contact />,
      },
    ]
  }
])

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
