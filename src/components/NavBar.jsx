import CartWidget from "./CartWidget"
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const NavBar = () => {
  return (
    <div>
        
      <br />
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="src\assets\images\logo.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            Ecommerce
          </Navbar.Brand>
            <CartWidget/>
        </Container>
      </Navbar>
      
        
    </div>
  )
}


export default NavBar