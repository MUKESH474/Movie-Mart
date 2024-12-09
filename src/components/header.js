import 'bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { MdLocalMovies } from "react-icons/md";
import {Link} from 'react-router-dom'
function Header(){
return (
        <Navbar expand="lg" className="hadernav">
            <Container fluid>
                <Navbar.Brand href="#"><Link to={"/"} className='navheading1'>Movie Mart</Link> <MdLocalMovies className='movicon' /></Navbar.Brand>

                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll>
                        <Nav.Link  className='navheading' ><Link to={"All/movies"} className='naveallheading me-4'>All Movies</Link></Nav.Link>    
                        <Nav.Link to='navheading' ><Link to={'/'} className='headerlink'>Home</Link></Nav.Link>
                        <Nav.Link  className='navheading'><Link to={'TopRated/movies'} className='headerlink'>Top Rated</Link></Nav.Link>
                        <Nav.Link className='navheading'><Link to={"Popular/movies"} className='headerlink'>Popular</Link></Nav.Link>
                        <Nav.Link  className='navheading'><Link to={"Upcoming/movies"} className='headerlink'>Upcoming</Link></Nav.Link>    
                    </Nav>
                    <Form className="d-flex">
                        <Form.Control
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"/>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
)
}

export default Header
