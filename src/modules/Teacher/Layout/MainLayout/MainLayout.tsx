import './MainLayout'
import { Container } from 'react-bootstrap'
import { Outlet } from 'react-router-dom'
import Header from '../../common/Header/Header'

const MainLayout = () => {
  return (
    <Container>
      <Header />
      <div className="wrapper">
        <Outlet/>
      </div>
      {/* <Footer /> */}
    </Container>
  )
}

export default MainLayout