import { Navigate, Route, Routes } from "react-router-dom"
import HomePage from "./pages/home-page"
import MainLayout from "./components/main-layout"

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout><HomePage/></MainLayout>}/>
      <Route path="*" element={<Navigate to="/"/>}/>
    </Routes>
  )
}

export default App
