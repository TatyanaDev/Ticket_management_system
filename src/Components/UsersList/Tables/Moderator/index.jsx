import { Table } from "react-bootstrap";
import { useState } from "react";
import DropdownTableRow from "../../../Shared/DropdownTableRow";
import TableContentThead from "./TableContentThead";
import OpenTableRow from "./OpenTableRow";
import style from "./styles.module.css";
import TableRow from "./TableRow";

export default function Moderator({ usersList }) {
  const [currentFilter, setCurrentFilter] = useState(null);
  const [flag, setFlag] = useState(false);

  return (
    <Table className={style.background}>
      <TableContentThead data={usersList} currentFilter={currentFilter} setCurrentFilter={setCurrentFilter} flag={flag} setFlag={setFlag} />
      <tbody>
        {usersList.map((user) =>
          user.ticket.length ? (
            <DropdownTableRow key={user.id} tableRow={<TableRow user={user} />}>
              <OpenTableRow tickets={user.ticket} />
            </DropdownTableRow>
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
