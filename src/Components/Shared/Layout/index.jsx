import { Container, Row } from "react-bootstrap";
import Sidebar from "../Sidebar";
import Header from "../Header";

export default function Layout({ children }) {
  return (
    <Container fluid>
      <Header />
      <Row>
        <Sidebar />
        {children}
      </Row>
    </Container>
  );
}
