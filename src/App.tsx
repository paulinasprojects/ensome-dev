import { Navigate, Route, Routes } from "react-router-dom"
import HomePage from "@/pages/home-page"
import MainLayout from "@/components/main-layout"
import ServicesPage from "./pages/services-page"
import SingleServiceDetailsPage from "./pages/single-service-page"
import AboutUsPage from "./pages/about-us-page"
import SolutionsPage from "./pages/solutions-page"
import OurTeamPage from "./pages/our-team-page"

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout><HomePage/></MainLayout>}/>
      <Route path="/about-us" element={<MainLayout><AboutUsPage/></MainLayout>}/>
      <Route path="/solutions" element={<MainLayout><SolutionsPage/></MainLayout>}/>
      <Route path="/services" element={<MainLayout><ServicesPage/></MainLayout>}/>
      <Route path="/our-team" element={<MainLayout><OurTeamPage/></MainLayout>}/>
      <Route path="/services/:id" element={<MainLayout><SingleServiceDetailsPage/></MainLayout>}/>
      <Route path="*" element={<Navigate to="/"/>}/>
    </Routes>
  )
}

export default App
