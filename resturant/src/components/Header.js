 
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {FaSearch,FaBars} from 'react-icons/fa'

// import {GiHamburgerMenu} from 'react-icons/fa'

function Header(){

    return(
      <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">
        <svg width="32" height="32" class="hic6U" viewBox="0 0 32 32" version="1.1" aria-labelledby="unsplash-home" aria-hidden="false"><title id="unsplash-home">Unsplash Home</title><path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z"></path></svg>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2 search_bar"
              aria-label="Search"
            />

 

            {/* <FaSearch size="2em"/> */}

            <Nav.Link href="#action1">Explore</Nav.Link>
            <Nav.Link href="#action2">Adverties</Nav.Link>
            <Nav.Link href="#">Blog</Nav.Link>


          </Nav>
          <Form className="d-flex">
            <Nav.Link href="#" className="text-secondary font_14">Log in</Nav.Link>
            <Nav.Link href="#" className="px-0 text-secondary font_14">/</Nav.Link>
            <Nav.Link href="#" className="text-secondary font_14">Sign up</Nav.Link>
            <Button variant="outline-secondary" className="shadow-none font_14 me-3">Submit a photo</Button>

            <FaBars size="1.5em" className="mt-2 text-secondary"/>

          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}
export default Header