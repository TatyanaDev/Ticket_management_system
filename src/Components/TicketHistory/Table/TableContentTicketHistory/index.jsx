import { Table } from "react-bootstrap";
import { useState } from "react";
import DropdownTableRow from "../../../Shared/DropdownTableRow";
import TableContentThead from "../../Table/TableContentThead";
import TableContentContainer from "./TableContentContainer";
import OpenTableRow from "./OpenTableRow";
import style from "./styles.module.css";

export default function TicketHistoryTable({ data }) {
  const [currentFilter, setCurrentFilter] = useState(null);
  const [flag, setFlag] = useState(false);

  return (
    <Table className={style.background}>
      <TableContentThead data={data} currentFilter={currentFilter} setCurrentFilter={setCurrentFilter} flag={flag} setFlag={setFlag} />
      <tbody>
        {data.map((ticket) => (
          <DropdownTableRow key={ticket.ticket_id} tableRow={<TableContentContainer ticket={ticket} />}>
            <OpenTableRow description={ticket.ticket_description} date={ticket.submitted_date} />
          </DropdownTableRow>
        ))}
      </tbody>
    </Table>
  );
}
