import { signOut } from 'firebase/auth';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

function Navigation() {
  const [user] = useAuthState(auth)
  // console.log(user);
  const handleSignOut = () =>{
    signOut(auth);
}
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Link to="/">One Step Solution</Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link to="/">Home</Link>
            <Link to="/services">Services</Link>
            <Link to="/blog">Blog</Link>
          </Nav>
         <span style={{color: 'white'}}>{user?.email}</span>
          <Nav>
          {user ? <Button onClick={handleSignOut}>Sign Out</Button> :
          <Link  onClick={handleSignOut} eventKey={2} to="/login">Login</Link>
        }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;