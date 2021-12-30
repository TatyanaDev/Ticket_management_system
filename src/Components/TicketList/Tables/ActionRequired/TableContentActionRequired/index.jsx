import { Col, Image, Row } from "react-bootstrap";
import TableContentContainer from "../../TableContentContainer";
import { styleSelection } from "../../../../../utils/helpersFunction";
import task from "../../../../../icons/ticketList/task.svg";
import bug from "../../../../../icons/ticketList/bug.svg";
import OpenTableRow from "../../OpenTableRow";
import style from "../../../styles.module.css";

export default function TableContentActionRequired({ ticket }) {
  return (
    <TableContentContainer
      tableContent={
        <>
          <td className={style.wrapper_tbody_item}>
            <Image src={ticket.type === "bug" ? bug : task} />
          </td>

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

          <td className={style.wrapper_tbody_item}>{ticket.date_created}</td>

          <td className={style.wrapper_tbody_item} style={{ textAlign: "start" }}>
            <Row className={styleSelection(ticket.status)}>{ticket.status}</Row>
          </td>
        </>
      }
      openTableRow={<OpenTableRow ticket={ticket} description={<Col>Action Required - {ticket.type === "bug" ? "On hold" : "Dev asked a question"}</Col>} rightDescription='Action' />}
    />
  );
}
