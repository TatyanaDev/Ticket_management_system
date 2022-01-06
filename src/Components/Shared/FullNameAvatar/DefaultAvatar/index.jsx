import { Col } from "react-bootstrap";
import style from "./styles.module.css";

export default function DefaultAvatar({ userName, styles }) {
  return (
    <Col xs='auto' className={style[styles]}>
      {userName && userName.match(/[A-Z]/g).join("")}
    </Col>
  );
}
