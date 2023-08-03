import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Navber from "./components/navber/Navber";
import About from "./pages/About";
import Academic from "./pages/Academic";
import Admission from "./pages/Admission";
import Contact from "./pages/Contact";
import Gellery from "./pages/Gellery";
import Home from "./pages/Home";
import Notice from "./pages/Notice";



function App() {
  const Layout = () => {
    return (
      <div className="">
        <Navber />
        {/* container  */}
        <div className="">
          <Outlet />
        </div>
        <Footer />
      </div>
    )
  }

  // all routes components  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "about",
          element: <About />
        },
        {
          path: "academic",
          element: <Academic />
        },
        {
          path: "admission",
          element: <Admission />
        },
        {
          path: "contact",
          element: <Contact />
        },
        {
          path: "gallery",
          element: <Gellery />
        },
        {
          path: "notice",
          element: <Notice />
        },
      ],
    },
  ]);


  return  <RouterProvider router={router} />
}

export default App
