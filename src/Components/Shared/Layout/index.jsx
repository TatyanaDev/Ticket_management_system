import { Col, Container, Row } from "react-bootstrap";
import { useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";

export default function Layout({ children }) {
  const [minimize, setMinimize] = useState(false);

  return (
    <Container fluid className='min-vh-100 d-flex flex-column'>
      <Header userName='Battulga Enkhtur' />

      <Row className='flex-nowrap flex-fill' style={{ backgroundColor: "var(--bs-gray-100)" }}>
        <Col xs='auto' className='p-0'>
          <Sidebar minimize={minimize} toggleMinimize={() => setMinimize(!minimize)} />
        </Col>

        <Col>
          <Row>{children}</Row>
        </Col>
      </Row>
    </Container>
  );
}
