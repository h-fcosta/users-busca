import { Navbar, Nav, Container } from "react-bootstrap";
import vivo from "../vivo.png";

function Header() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
          <img
            src={vivo}
            width="50"
            alt="logo"
            className="d-inline-block align-middle"
          />{" "}
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
