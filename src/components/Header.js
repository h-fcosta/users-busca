import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../logo.png";

function Header() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
          <img
            src={logo}
            width="50"
            className="d-inline-block align-middle"
            alt="logo"
          ></img>{" "}
          Teste Vivo
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Header;
