import { Row } from "react-bootstrap";
import cn from "classnames";
import FullNameAvatar from "../../../../Components/Shared/FullNameAvatar";
import OpenTableRow from "./TableContentContainer/OpenTableRow";
import TableContentContainer from "./TableContentContainer";
import style from "./styles.module.css";

export default function TableContentTicketHistory({ ticket }) {
  return (
    <TableContentContainer
      tableContent={
        <>
          <td className={cn(style.wrapper_tbody_item, style.content)}>{ticket.ticket_id}</td>
          <td className={cn(style.wrapper_tbody_item, style.gray)}>{ticket.ticket_name}</td>
          <td className={cn(style.wrapper_tbody_item, style.gray)}>
            <Row className='ms-1'>
              <FullNameAvatar userName={ticket.approver} src={ticket.src} styles='primary_24' />
            </Row>
          </td>
          <td className={cn(style.wrapper_tbody_item, style.content)}>{ticket.resolved_date}</td>
        </>
      }
      openTableRow={<OpenTableRow ticket={ticket} />}
    />
  );
}
