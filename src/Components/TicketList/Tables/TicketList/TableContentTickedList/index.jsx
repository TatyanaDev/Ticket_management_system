import { Col, Image, Row, ProgressBar } from "react-bootstrap";
import cn from "classnames";
import { styleSelection } from "../../../../../utils/helpersFunction";
import TableContentContainer from "../../TableContentContainer";
import style from "../../../styles.module.css";
import OpenTableRow from "../../OpenTableRow";

export default function TableContentTickedList({ ticket }) {
  return (
    <TableContentContainer
      tableContent={
        <>
          <td className={style.wrapper_tbody_item} style={{ color: "#1c1c28" }}>
            {ticket.ticket_id}
          </td>

          <td className={style.wrapper_tbody_item} style={{ textAlign: "start" }}>
            {ticket.ticket_name}
          </td>

          <td className={style.wrapper_tbody_item}>
            <Row>
              <Col className={style.wrapper_avatar}>
                <Image src={ticket.src} />
              </Col>
              <Col style={{ textAlign: "start" }}>{ticket.approver}</Col>
            </Row>
          </td>

          <td className={style.wrapper_tbody_item} style={{ textAlign: "center" }}>
            <Row className={styleSelection(ticket.priority)}>{ticket.priority}</Row>
          </td>

          <td className={cn(style.wrapper_tbody_item, style.wrapper_progress_bar)}>
            <ProgressBar now={ticket.complexity} style={{ backgroundColor: "var(--gray-100-color)" }} />
          </td>

          <td className={style.wrapper_tbody_item} style={{ color: "#1c1c28" }}>
            {ticket.date_created}
          </td>

          <td className={style.wrapper_tbody_item} style={{ textAlign: "start" }}>
            <Row className={styleSelection(ticket.status)}>{ticket.status}</Row>
          </td>
        </>
      }
      openTableRow={<OpenTableRow ticket={ticket} description={<Col>Ticket Description</Col>} rightDescription='Followup Ticket' />}
    />
  );
}
