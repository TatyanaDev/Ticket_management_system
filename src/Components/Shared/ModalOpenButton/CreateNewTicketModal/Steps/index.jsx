import { Col, Row } from "react-bootstrap";
import cn from "classnames";
import style from "./styles.module.css";

export default function Steps({ activeStep }) {
  return (
    <Row className={style.steps}>
      <Col className={cn(style.step, activeStep === 1 && style.active, activeStep > 1 && style.completed)}>Ticket info</Col>
      <Col className={cn(style.line, activeStep > 1 && style.active_line)} />
      <Col className={cn(style.step, activeStep === 2 && style.active, activeStep > 2 && style.completed)}>Description</Col>
      <Col className={cn(style.line, activeStep > 2 && style.active_line)} />
      <Col className={cn(style.step, activeStep === 3 && style.active)}>Outcome</Col>
    </Row>
  );
}
