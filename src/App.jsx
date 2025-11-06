import './App.css'
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Contact from './sections/Contact/Contact'
import Footer from './sections/Footer/Footer'
import MainSection from './sections/Main/MainSection'
import MoreProjects from './sections/Projects/MoreProjects'
import Projects from './sections/Projects/Projects'
import Skills from './sections/Skills/Skills'
import Certifications from './sections/Certifications/Certifications';

function RootLayout() {
  return (
    <>
      <MainSection />
      <Projects />
      <Certifications />
      <Skills />
      <Contact />
      <Footer />

      {/* Outlet = lugar donde se renderizan rutas hijas si las hay */}
      <Outlet />
    </>
  );
}

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />, // 🔹 Página principal
    },
    {
      path: "/more-projects",
      element: <MoreProjects />, // 🔹 Página de galería
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App
