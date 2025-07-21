import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router";

export default function Header() {
  return (
    <>
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Nav className="ms-auto">
            <Nav.Link href="/">Accueil</Nav.Link>
            <Nav.Link href="/categorie/vetements">Vêtements</Nav.Link>
            <Nav.Link href="/categorie/chaussures">Chaussures</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
