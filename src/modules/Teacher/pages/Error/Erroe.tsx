import './Error.css'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Erroe = () => {
  return (
    <Container  className="notFound">
        <h1>404</h1>
        <p>Not Found</p>
        <Link to='/' replace={true}>
        going back to safety??
        </Link>
    </Container>
  )
}

export default Erroe