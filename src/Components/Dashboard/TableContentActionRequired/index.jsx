import { Row, Col, Image } from "react-bootstrap";
import cn from "classnames";
import OpenTableRow from "./TableContentContainer/OpenTableRow";
import style from "../../../pages/Dashboard/styles.module.css";
import TableContentContainer from "./TableContentContainer";

export default function TableContentActionRequired({ ticket }) {
  return (
    <TableContentContainer
      tableContent={
        <>
          <td className={cn(style.wrapper_tbody_item, style.content)}>{ticket.ticket_id}</td>
          <td className={cn(style.wrapper_tbody_item, style.gray)}>{ticket.ticket_name}</td>
          <td className={cn(style.wrapper_tbody_item, style.gray)}>
            <Row className={style.wrapper_tbody_image}>
              <Col className={style.tbody_image}>
                <Image src={ticket.src} />
              </Col>
              <Col className={style.wrapper_tbody_approver}>{ticket.approver}</Col>
            </Row>
          </td>
          <td className={cn(style.wrapper_tbody_item, style.content)}>{ticket.resolved_date}</td>
        </>
      }
      openTableRow={<OpenTableRow ticket={ticket} />}
    />
  );
}
