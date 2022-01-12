import { Icon } from "@iconify/react/dist/iconify";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import cn from "classnames";
import style from "./styles.module.css";

export default function SummaryCard({ header, quantity, color, color_link, icon }) {
  return (
    <Col className={style.wrapper_summary}>
      <Link className={cn(style.link_summary, color_link)} to='/ticket_list'>
        <Row style={{ marginBottom: 4 }}>
          <Col>{header}</Col>
        </Row>
        <Row style={{ minHeight: 76 }}>
          <Col className={cn(style.quantity_summary, color)}>{quantity}</Col>
          <Col style={{ paddingTop: 13, textAlign: "end" }}>
            <Icon icon={icon} className={color} style={{ fontSize: 46 }} />
          </Col>
        </Row>
      </Link>
    </Col>
  );
}
