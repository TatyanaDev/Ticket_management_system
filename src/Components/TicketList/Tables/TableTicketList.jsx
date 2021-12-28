import { Table } from "react-bootstrap";
import { useState } from "react";
import TableContentTicketList from "./TableContentTicketList";
import TableHeaders from "../../Shared/TableHeaders";
import style from "../styles.module.css";

export default function TableTicketList({ tickets }) {
  const [sortedTickets, setSortedTickets] = useState(null);
  const [activeSorting, setActiveSorting] = useState("");

  const tableColumnNames = ["Ticket ID", "Ticket Name", "Approver", "Priority", "Complexity", "Date Created", "Status"];

  return (
    <Table responsive>
      <thead className={style.background}>
        <tr>
          {tableColumnNames.map((columnName, i) => (
            <TableHeaders key={i} columnName={columnName} setSortedData={setSortedTickets} data={tickets} activeSorting={activeSorting} setActiveSorting={setActiveSorting} />
          ))}
          <th />
        </tr>
      </thead>
      <tbody className={style.background}>
        {tickets.length ? (
          (sortedTickets || tickets).map((ticket) => <TableContentTicketList ticket={ticket} key={ticket.id} />)
        ) : (
          <tr>
            <td colSpan='8'>Not Found</td>
          </tr>
        )}
      </tbody>
    </Table>
  );
}
