import { Button, Col, Modal } from "react-bootstrap";
import { Icon } from "@iconify/react/dist/iconify";
import style from "./styles.module.css";
import ModalHeader from "../Header";

export default function TicketSubmitted({ handleOnClickClose }) {
  return (
    <>
      <ModalHeader title='Ticket Submitted' />
      <Modal.Body className={style.body}>
        <Icon icon='bi:send-check-fill' className={style.icon_success} />
        <Col xs='auto' className={style.title}>
          Successful
        </Col>
        <Col xs='auto' className={style.description}>
          Your ticket has been submitted successfully! Moderator will notify you shortly.
        </Col>
      </Modal.Body>
      <Modal.Footer className={style.footer}>
        <Button variant='primary' className={style.button_primary} onClick={handleOnClickClose}>
          Close
        </Button>
      </Modal.Footer>
    </>
  );
}
