import { Outlet } from 'react-router-dom'
import { Header } from '../components/Header'

const TemplateAppOtherScreen: React.FC = () => {
  return(
    <>
      <Header comeBack={true} />
      <Outlet />
    </>
  )
}

export { TemplateAppOtherScreen }