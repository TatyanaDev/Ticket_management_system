import { Container, Row, Col, Button } from "react-bootstrap";
import Sidebar from "./../../Components/Common/Sidebar";
import style from "./styles.module.css";

export default function Dashboard() {
  return (
    <Container fluid>
      <Row>header</Row>
      <Row>
        <Col sm={2} md={2} lg={2} xl={2} xxl={2} className={style.wrapper_sidebar}>
          <Sidebar />
        </Col>
        <Col>
          <Container>
            <Row> Ticket Summary</Row>
            <Row>
              <Col>Action Required</Col>
              <Col>Ticket in Progress</Col>
              <Col>To be Released</Col>
            </Row>
            <Row>Ticket history</Row>
            <Row></Row>
          </Container>
        </Col>
      </Row>
      <Row>{/* <Button>Recent activity</Button> */}</Row>
    </Container>
  );
}
