import { Outlet } from 'react-router-dom'
import { Header } from '../components/Header'
import { Navbar } from '../components/Navbar'

const TemplateAppHome: React.FC = () => {
  return(
    <>
      <Header />
      <Navbar />
      <Outlet />
    </>
  )
}

export { TemplateAppHome }