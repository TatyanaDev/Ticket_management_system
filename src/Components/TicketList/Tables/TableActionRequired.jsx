import { Icon } from "@iconify/react/dist/iconify";
import { Col, Row } from "react-bootstrap";
import { Table } from "react-bootstrap";
import { useState } from "react";
import cn from "classnames";
import TableContentActionRequired from "./TableContentActionRequired";
// import TableHeaders from "../../Shared/TableHeaders";
import style from "../styles.module.css";

const testObj = {
  "Ticket ID": "id",
  "Ticket Name": "name",
  Approver: "approver",
  Priority: "priority",
  "Date Created": "created_date",
  Status: "status",
  Complexity: "complexity",
};


export default function TableActionRequired({ tickets }) {
  const [sortedTickets, setSortedTickets] = useState(null);
  const [activeSorting, setActiveSorting] = useState("");

  // console.log(tickets);
  // const [currentFilter, setCurrentFilter] = useState(null);
  // const [flag, setFlag] = useState(false);

  const handleColumnSortingClick = (e) => {
    if (activeSorting === e.target.id) {
      setActiveSorting(""); //remove arrow state: sorted
      setSortedTickets(null); //clear array of sorted data
      return;
    }
    setActiveSorting(e.target.id);
    setSortedTickets(
      JSON.parse(JSON.stringify(sortedTickets)).sort((a, b) => {
        if (a[testObj[e.target.id]] > b[testObj[e.target.id]]) return 1;
        if (a[testObj[e.target.id]] === b[testObj[e.target.id]]) return 0;
        if (a[testObj[e.target.id]] < b[testObj[e.target.id]]) return -1;
      })
    );
  };



  const tableColumnNames = ["Ticket ID", "Ticket Name", "Approver", "Priority", "Date Created", "Status"];

  return (
    <Table responsive>
      <thead className={style.background}>
        <tr>
          <th />
          {tableColumnNames.map((columnName, i) => (
            <th onClick={handleColumnSortingClick} className={cn(style.column_name, activeSorting.includes(columnName) && style.active)}>
              <Row className='align-items-end'>
                <Col id={columnName}>{columnName}</Col>
                <Col className={style.wrap_icon} id={columnName}>
                  <Icon icon='ph:caret-down-bold' className={style.icon} id={columnName} />
                </Col>
              </Row>
            </th>
          ))}
          <th />
        </tr>
      </thead>
      <tbody className={style.background}>
        {(sortedTickets || tickets).map((ticket) => (
          <TableContentActionRequired ticket={ticket} key={ticket.id} />
        ))}
      </tbody>
    </Table>
  );
}
