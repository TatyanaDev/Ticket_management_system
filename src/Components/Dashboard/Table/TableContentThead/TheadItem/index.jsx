import { Row, Col } from "react-bootstrap";
import { Icon } from "@iconify/react/dist/iconify";
import cn from "classnames";
import style from "./styles.module.css";

export default function TheadItem({ currentFilter, current, sortFunction, data, flag, setFlag, setCurrentFilter, width }) {
  return (
    <th className={cn(style.wrapper_thead_item, width)}>
      <Row>
        <Col className='pe-0'>Ticket ID</Col>
        <Col className={cn(style.arrow_thead, "ps-0", currentFilter === current && style.arrow_thead_active)} onClick={() => sortFunction({ data, flag, setFlag, setCurrentFilter })}>
          <Icon icon='ep:arrow-up-bold' />
        </Col>
      </Row>
    </th>
  );
}
