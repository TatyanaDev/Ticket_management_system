import { Container, Row } from "react-bootstrap";
import Sidebar from "../Shared/Sidebar";
import Header from "../Shared/Header";

export default function Layout({ activePageTitle, children }) {
  return (
    <Container fluid>
      <Header activePageTitle={activePageTitle} />
      <Row>
        <Sidebar />
        {children}
      </Row>
    </Container>
  );
}
