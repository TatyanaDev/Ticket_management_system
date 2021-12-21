import { Row, Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import cn from "classnames";
import style from "./styles.module.css";

export default function SummaryCard({ header, quantity, color, src }) {
  return (
    <Col className={style.wrapper_summary}>
      <Link className={style.link_summary} to='/ticket_list'>
        <Row className={style.wrapper_heading_summary}>
          <Col>{header}</Col>
        </Row>
        <Row className={style.wrapper_info_summary}>
          <Col className={cn(style.quantity_summary, color)}>{quantity}</Col>
          <Col className={style.wrapper_image_summary}>
            <Image src={src} />
          </Col>
        </Row>
      </Link>
    </Col>
  );
}
