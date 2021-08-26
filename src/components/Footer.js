import { Navbar, Container } from "react-bootstrap";

function Footer() {
  return (
    <Navbar bg="dark" variant="dark" className="fixed-bottom">
      <Container>
        <Navbar.Brand href="#home">Teste Vivogit</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Desenvolvido por:{" "}
            <a href="https://github.com/h-fcosta">Henrique F. Costa</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Footer;
