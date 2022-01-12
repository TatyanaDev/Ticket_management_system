import { Modal, Row } from "react-bootstrap";
import style from "./styles.module.css";

export default function Header({ title, description = "" }) {
  return (
    <Modal.Header closeButton className={style.header}>
      <Modal.Title className={style.title}>
        {title}
        {description && <Row className={style.description}>{description}</Row>}
      </Modal.Title>
    </Modal.Header>
  );
}
