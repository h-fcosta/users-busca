import React, { useState } from "react";
import {
  Container,
  Table,
  Button,
  FormControl,
  Row,
  Col,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import axios from "axios";
import UserDetails from "./components/UserDetails.js";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";

function App() {
  const [userBusca, setUserBusca] = useState("");
  const [loading, setLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    buscaUsers();
  }

  async function buscaUsers() {
    setLoading(true);

    const res = await axios.get(`https://api.github.com/users/${userBusca}`);

    let data = res.data;

    setLoading(false);
    setUserBusca(data);
  }

  return (
    <Container>
      <Header />
      <p></p>
      <Row className="center">
        <Col xs="10" md="11">
          <FormControl
            className="input"
            value={userBusca}
            placeholder="Usuário do Github"
            onChange={(e) => setUserBusca(e.target.value)}
          />
        </Col>
        <Col xs="2" md="1">
          <Button className="button" onClick={handleSubmit} variant="primary">
            {loading ? "Buscando..." : "Busca"}
          </Button>
        </Col>
      </Row>
      <p></p>
      <Table variant="dark" striped bordered hover>
        <thead>
          <tr className="text-center align-middle">
            <th colSpan="5">Resultado da Busca</th>
          </tr>
          <tr className="text-center align-middle">
            <th>Avatar</th>
            <th>Usuário Github</th>
            <th>Nome</th>
            <th>E-mail</th>
            <th>Localização</th>
          </tr>
        </thead>
        <UserDetails details={userBusca} loading={loading} />
      </Table>
      <Footer />
    </Container>
  );
}
export default App;
