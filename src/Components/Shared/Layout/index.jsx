import { Col, Container, Row } from "react-bootstrap";
import { useState} from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";

export default function Layout({ children }) {
  const [minimize, setMinimize] = useState(Boolean(JSON.parse(localStorage.getItem("minimize"))) || false);

  const toggleSidebar = () => {
    setMinimize(!minimize)
    localStorage.setItem('minimize',minimize === false ? "true" : "false");
  };

  return (
    <Container fluid className='min-vh-100 d-flex flex-column'>
      <Header userName='Battulga Enkhtur' />

      <Row className='flex-nowrap flex-fill' style={{ backgroundColor: "var(--bs-gray-100)" }}>
        <Col xs='auto' className='p-0'>
          <Sidebar minimize={Boolean(JSON.parse(minimize))} toggleMinimize={toggleSidebar} />
        </Col>

        <Col>
          <Row>{children}</Row>
        </Col>
      </Row>
    </Container>
  );
}
