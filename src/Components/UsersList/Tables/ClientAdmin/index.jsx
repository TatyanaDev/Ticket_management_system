import { Table } from "react-bootstrap";
import { useState } from "react";
import TableContentThead from "./TableContentThead";
import style from "./styles.module.css";
import TableRow from "./TableRow";

export default function ClientAdmin({ usersList}) {
  const [currentFilter, setCurrentFilter] = useState(null);
  const [flag, setFlag] = useState(false);

  return (
    <Table className={style.background}>
      <TableContentThead data={usersList} currentFilter={currentFilter} setCurrentFilter={setCurrentFilter} flag={flag} setFlag={setFlag} />
      <tbody>
        {usersList.map((user) => (
          <TableRow key={user.id} user={user} />
        ))}
      </tbody>
    </Table>
  );
}
