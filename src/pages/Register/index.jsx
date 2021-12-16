import { Container, Row, Col, Image, Card } from "react-bootstrap";
import cn from "classnames";
import UserRegistrationForm from "../../Components/UserRegistrationForm";
import logo from "../../icons/Logo.svg";
import style from "./styles.module.css";

export default function Register() {
  return (
    <Container fluid className={style.wrapper}>
      <Container>
        <Row>
          <Col className={style.wrapper_logo}>
            <Image className={cn("img-fluid", style.logo)} src={logo} alt='shoplab' />
            <Col className={style.wrapper_form}>
              <Card>
                <Card.Body>
                  <Card.Title className={style.heading}>Welcome to</Card.Title>
                  <Card.Subtitle className={style.sub_heading}>Shoplab ticketing system</Card.Subtitle>
                  <UserRegistrationForm />
                </Card.Body>
              </Card>
            </Col>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
