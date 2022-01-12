import { Icon } from "@iconify/react/dist/iconify";
import { Col, Row } from "react-bootstrap";
import FullNameAvatar from "../../../../../Components/Shared/FullNameAvatar";
import { styleSelection } from "../../../../../utils/helpersFunction";
import TableContentContainer from "../../TableContentContainer";
import style from "../../../styles.module.css";
import OpenTableRow from "../../OpenTableRow";

export default function TableContentActionRequired({ ticket }) {
  return (
    <TableContentContainer
      tableContent={
        <>
          <td className={style.wrapper_tbody_item}>{ticket.type === "bug" ? <Icon icon='carbon:warning-filled' style={{ fontSize: 24, color: "var(--bs-red)" }} /> : <Icon icon='bi:question-circle-fill' style={{ fontSize: 24, color: "var(--gray-800-color)" }} />}</td>

          <td className={style.wrapper_tbody_item} style={{ color: "#1c1c28" }}>
            {ticket.ticket_id}
          </td>

          <td className={style.wrapper_tbody_item} style={{ textAlign: "start" }}>
            {ticket.ticket_name}
          </td>

          <td className={style.wrapper_tbody_item}>
            <Row>
              <FullNameAvatar userName={ticket.approver} src={ticket.src} styles='primary_24' />
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
