import { Navbar, Nav } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Link from "next/link";

const BlogNavbar = () => {
  return (
    <Navbar className="fj-navbar fj-nav-base" bg="transparent" expand="lg">
      <Container>
        <Navbar.Brand className="fj-navbar-brand">
          <Link href="/">Riko Airlan Ramadhan</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end">
          <Nav className="ml-auto">
            <Nav.Link
              as={() => (
                <Link href="/" className="fj-navbar-item fj-navbar-link">
                  Home
                </Link>
              )}
            />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default BlogNavbar;
