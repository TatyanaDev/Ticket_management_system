import { Container, Row, Col, Image, Card } from "react-bootstrap";
import cn from "classnames";
import logo from "../../icons/Logo.svg";
import style from "./styles.module.css";

export default function BackgroundOfForms({ form, padding }) {
  return (
    <Container fluid className={style.wrapper}>
      <Container>
        <Row>
          <Col className={style.wrapper_logo}>
            <Image className={cn(style.logo, "img-fluid")} src={logo} alt='shoplab' />
            <Col className={cn(style.wrapper_form, padding)}>
              <Card>
                <Card.Body>
                  <Card.Title className={style.heading}>Welcome to</Card.Title>
                  <Card.Subtitle className={style.sub_heading}>Shoplab ticketing system</Card.Subtitle>
                  {form}
                </Card.Body>
              </Card>
            </Col>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
