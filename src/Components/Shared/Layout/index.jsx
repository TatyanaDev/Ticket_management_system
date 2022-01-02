import { Container, Row } from "react-bootstrap";
import Sidebar from "../Sidebar";
import Header from "../Header";

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
