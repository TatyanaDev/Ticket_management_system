import { Table } from "react-bootstrap";
import { useState } from "react";
import TableContentTickedList from "./TableContentTickedList";
import TableContentThead from "./TableContentThead";
import style from "../../styles.module.css";

export default function TableTicketList({ data }) {
  const [currentFilter, setCurrentFilter] = useState(null);
  const [flag, setFlag] = useState(false);

  return (
    <Table responsive className='p-0' style={{ marginBottom: 24 }}>
      <TableContentThead data={data} currentFilter={currentFilter} setCurrentFilter={setCurrentFilter} flag={flag} setFlag={setFlag} />
      <tbody className={style.background}>
        {data.map((ticket) => (
          <TableContentTickedList ticket={ticket} key={ticket.ticket_id} />
        ))}
      </tbody>
    </Table>
  );
}
