import { Navigate, Route, Routes } from "react-router-dom"
import HomePage from "@/pages/home-page"
import MainLayout from "@/components/main-layout"
import ServicesPage from "./pages/services-page"
import SingleServiceDetailsPage from "./pages/single-service-page"
import AboutUsPage from "./pages/about-us-page"
import SolutionsPage from "./pages/solutions-page"
import OurTeamPage from "./pages/our-team-page"
import ContactUsPage from "./pages/contact-us-page"
import FaqPage from "./pages/faq-page"
import SingleSolutionPage from "./pages/single-solution-page"
import SingleTeamMemberPage from "./pages/single-team-member-page"
import { SecondLayout } from "./components/second-layout"
import HomeV1Page from "./pages/home-v1-page"

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout><HomePage/></MainLayout>}/>
      <Route path="/about-us" element={<MainLayout><AboutUsPage/></MainLayout>}/>
      <Route path="/solutions" element={<MainLayout><SolutionsPage/></MainLayout>}/>
      <Route path="/services" element={<MainLayout><ServicesPage/></MainLayout>}/>
      <Route path="/our-team" element={<MainLayout><OurTeamPage/></MainLayout>}/>
      <Route path="/contact-us" element={<MainLayout><ContactUsPage/></MainLayout>}/>
      <Route path="/faq" element={<MainLayout><FaqPage/></MainLayout>}/>
      <Route path="/services/:id" element={<MainLayout><SingleServiceDetailsPage/></MainLayout>}/>
      <Route path="/solutions/:id" element={<MainLayout><SingleSolutionPage/></MainLayout>}/>
      <Route path="/our-team/member/:id" element={<MainLayout><SingleTeamMemberPage/></MainLayout>}/>
      <Route path="/home-v1" element={<SecondLayout><HomeV1Page/></SecondLayout>}/>
      <Route path="*" element={<Navigate to="/"/>}/>
    </Routes>
  )
}

export default App
