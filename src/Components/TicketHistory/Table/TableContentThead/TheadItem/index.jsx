import { Row, Col } from "react-bootstrap";
import { Icon } from "@iconify/react/dist/iconify";
import cn from "classnames";
import style from "./styles.module.css";

export default function TheadItem({ content, currentFilter, field, sortFunction, data, flag, setFlag, setCurrentFilter }) {
  return (
    <th className={style.wrapper_thead_item}>
      <Row>
        <Col className='pe-0'>{content}</Col>
        <Col className={cn(style.arrow_thead, "ps-0", currentFilter === field && style.arrow_thead_active)} onClick={() => sortFunction({ data, flag, setFlag, setCurrentFilter, field })}>
          <Icon icon='ep:arrow-up-bold' />
        </Col>
      </Row>
    </th>
  );
}
