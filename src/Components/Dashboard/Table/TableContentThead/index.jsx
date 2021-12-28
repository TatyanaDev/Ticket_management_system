import { sortTicketId, sortTicketName, sortApprover, sortResolvedDate } from "../../../../pages/sortingFunction";
import style from "./styles.module.css";
import TheadItem from "../TableContentThead/TheadItem";

export default function TableContentThead({ data, currentFilter, setCurrentFilter, flag, setFlag }) {
  return (
    <thead>
      <tr className={style.wrapper_thead}>
        <TheadItem currentFilter={currentFilter} current='ticketId' sortFunction={sortTicketId} data={data} flag={flag} setFlag={setFlag} setCurrentFilter={setCurrentFilter} width={style.width_1} />
        <TheadItem currentFilter={currentFilter} current='ticketName' sortFunction={sortTicketName} data={data} flag={flag} setFlag={setFlag} setCurrentFilter={setCurrentFilter} />
        <TheadItem currentFilter={currentFilter} current='approver' sortFunction={sortApprover} data={data} flag={flag} setFlag={setFlag} setCurrentFilter={setCurrentFilter} width={style.width_2} />
        <TheadItem currentFilter={currentFilter} current='resolvedDate' sortFunction={sortResolvedDate} data={data} flag={flag} setFlag={setFlag} setCurrentFilter={setCurrentFilter} width={style.width_3} />
        <th style={{ width: 38 }}></th>
      </tr>
    </thead>
  );
}
