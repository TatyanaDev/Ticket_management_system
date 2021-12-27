import { Row, Col, Image } from "react-bootstrap";
import cn from "classnames";
import OpenTableRow from "./TableContentContainer/OpenTableRow";
import TableContentContainer from "./TableContentContainer";
import style from "./styles.module.css";

export default function TableContentActionRequired({ ticket }) {
  return (
    <TableContentContainer
      tableContent={
        <>
          <td className={cn(style.wrapper_tbody_item, style.content)}>{ticket.ticket_id}</td>
          <td className={cn(style.wrapper_tbody_item, style.gray)}>{ticket.ticket_name}</td>
          <td className={cn(style.wrapper_tbody_item, style.gray)}>
            <Row className='ms-1'>
              <Col className={cn(style.tbody_image, "p-0")}>
                <Image src={ticket.src} />
              </Col>
              <Col className='ps-4'>{ticket.approver}</Col>
            </Row>
          </td>
          <td className={cn(style.wrapper_tbody_item, style.content)}>{ticket.resolved_date}</td>
        </>
      }
      openTableRow={<OpenTableRow ticket={ticket} />}
    />
  );
}
