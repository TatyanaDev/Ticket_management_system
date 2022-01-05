import { Table } from "react-bootstrap";
import { useState } from "react";
import TableContentThead from "../../Table/TableContentThead";
import TableContentLayout from "./TableContentLayout";
import style from "./styles.module.css";

export default function TicketHistoryTable({ data }) {
  const [currentFilter, setCurrentFilter] = useState(null);

  const [flag, setFlag] = useState(false);

  return (
    <Table className={style.background}>
      <TableContentThead data={data} currentFilter={currentFilter} setCurrentFilter={setCurrentFilter} flag={flag} setFlag={setFlag} />
      <tbody>
        {data.map((ticket) => (
          <TableContentLayout ticket={ticket} />
        ))}
      </tbody>
    </Table>
  );
}
