import { Icon } from "@iconify/react/dist/iconify";
import { Col, Row } from "react-bootstrap";
import cn from "classnames";
import style from "./styles.module.css";

const testObj = {
  "Ticket ID": "id",
  "Ticket Name": "name",
  Approver: "approver",
  Priority: "priority",
  "Date Created": "created_date",
  Status: "status",
  Complexity: "complexity",
};

export default function TableHeaders({ columnName, setSortedData, data, activeSorting, setActiveSorting }) {
  const handleColumnSortingClick = (e) => {
    if (activeSorting === e.target.id) {
      setActiveSorting(""); //remove arrow state: sorted
      setSortedData(null); //clear array of sorted data
      return;
    }
    setActiveSorting(e.target.id);
    setSortedData(
      JSON.parse(JSON.stringify(data)).sort((a, b) => {
        if (a[testObj[e.target.id]] > b[testObj[e.target.id]]) return 1;
        if (a[testObj[e.target.id]] === b[testObj[e.target.id]]) return 0;
        if (a[testObj[e.target.id]] < b[testObj[e.target.id]]) return -1;
      })
    );
  };

  return (
    <th onClick={handleColumnSortingClick} className={cn(style.column_name, activeSorting.includes(columnName) && style.active)}>
      <Row className='align-items-end'>
        <Col id={columnName}>{columnName}</Col>
        <Col className={style.wrap_icon} id={columnName}>
          <Icon icon='ph:caret-down-bold' className={style.icon} id={columnName} />
        </Col>
      </Row>
    </th>
  );
}
