import { Icon } from "@iconify/react/dist/iconify";
import { Col, Row } from "react-bootstrap";
import cn from "classnames";
import style from "../../../../../TicketList/styles.module.css";

export default function TheadItem({ content, currentFilter, sortFunction, data, flag, setFlag, setCurrentFilter, field }) {
  return (
    <th className={style.wrapper_column_name}>
      <Row>
        <Col>{content}</Col>
        <Col className={cn(style.wrap_icon, currentFilter === field && style.arrow_thead_active)} onClick={() => sortFunction({ data, flag, setFlag, setCurrentFilter, field })}>
          <Icon icon='ep:arrow-up-bold' className={style.icon} />
        </Col>
      </Row>
    </th>
  );
}
