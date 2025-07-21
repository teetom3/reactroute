import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, NavLink } from "react-router";
import "../assets/header.css";

export default function Header() {
  return (
    <>
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Nav className="ms-auto">
            <NavLink to="/">Accueil</NavLink>
            <NavLink to="/categorie/vetements">Vêtements</NavLink>
            <NavLink to="/categorie/chaussures">Chaussures</NavLink>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
