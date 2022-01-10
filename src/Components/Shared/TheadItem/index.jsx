import { Icon } from "@iconify/react/dist/iconify";
import { Col, Row } from "react-bootstrap";
import cn from "classnames";
import style from "./styles.module.css";

export default function TheadItem({ content, currentFilter, sortFunction, data, flag, setFlag, setCurrentFilter, field, width }) {
  return (
    <th className={cn(style.wrapper_column_name, width)}>
      <Row>
        <Col>{content}</Col>
        <Col className={cn(style.wrap_icon, currentFilter === field && style.arrow_thead_active)} onClick={() => sortFunction({ data, flag, setFlag, setCurrentFilter, field })}>
          <Icon icon='ep:arrow-up-bold' />
        </Col>
      </Row>
    </th>
  );
}
