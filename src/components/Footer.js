import { Container, Navbar } from "react-bootstrap";

function Footer() {
  return (
    <Navbar fixed="bottom" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>Teste Vivo</Navbar.Brand>
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
