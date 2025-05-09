import { Table } from "react-bootstrap";
import { useState } from "react";
import TableContentThead from "./TableContentThead";
import TableRow from "./DropdownTableRow/TableRow";
import DropdownTableRow from "./DropdownTableRow";
import style from "../../styles.module.css";

export default function Moderator({ usersList }) {
  const [currentFilter, setCurrentFilter] = useState(null);
  const [flag, setFlag] = useState(false);

  return (
    <Table className={style.background}>
      <TableContentThead data={usersList} currentFilter={currentFilter} setCurrentFilter={setCurrentFilter} flag={flag} setFlag={setFlag} />
      <tbody>
        {usersList.map((user) =>
          user.ticket.length ? (
            <DropdownTableRow key={user.id} user={user} />
          ) : (
            <tr key={user.id} className={style.table_row}>
              <TableRow user={user} />
            </tr>
          )
        )}
      </tbody>
    </Table>
  );
}
