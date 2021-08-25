import React, { useState } from "react";
import { Container, Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import axios from "axios";
import UserDetails from "./components/UserDetails.js";

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
    console.log(data);
  }

  return (
    <Container>
      <form>
        <input
          className="input"
          value={userBusca}
          placeholder="Usuário do Github"
          onChange={(e) => setUserBusca(e.target.value)}
        />
        <button className="button" onClick={handleSubmit}>
          {loading ? "Buscando..." : "Busca"}
        </button>
      </form>
      <Table>
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Usuário Github</th>
            <th>Nome</th>
            <th>E-mail</th>
            <th>Localização</th>
          </tr>
        </thead>
        <UserDetails details={userBusca} loading={loading} />
      </Table>
    </Container>
  );
}
export default App;
