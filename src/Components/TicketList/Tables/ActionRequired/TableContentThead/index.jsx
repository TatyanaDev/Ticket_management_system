import { sortByNumbers, sortAlphabetically, sortByDate, sortByPriority, sortByStatus } from "../../../../../utils/helpersFunction";
import style from "../../../../TicketList/styles.module.css";
import TheadItem from '../../../../Shared/TheadItem';

export default function TableContentThead({ data, currentFilter, setCurrentFilter, flag, setFlag }) {
  return (
    <thead className={style.background} style={{ color: "var(--bs-red)" }}>
      <tr>
        <th style={{ width: 44 }}></th>
        <TheadItem content='Ticket ID' currentFilter={currentFilter} field='ticket_id' sortFunction={sortByNumbers} data={data} flag={flag} setFlag={setFlag} setCurrentFilter={setCurrentFilter} />
        <TheadItem content='Ticket Name' currentFilter={currentFilter} field='ticket_name' sortFunction={sortAlphabetically} data={data} flag={flag} setFlag={setFlag} setCurrentFilter={setCurrentFilter} />
        <TheadItem content='Approver' currentFilter={currentFilter} field='approver' sortFunction={sortAlphabetically} data={data} flag={flag} setFlag={setFlag} setCurrentFilter={setCurrentFilter} />
        <TheadItem content='Priority' currentFilter={currentFilter} sortFunction={sortByPriority} data={data} flag={flag} setFlag={setFlag} setCurrentFilter={setCurrentFilter} />
        <TheadItem content='Date Created' currentFilter={currentFilter} field='date_created' sortFunction={sortByDate} data={data} flag={flag} setFlag={setFlag} setCurrentFilter={setCurrentFilter} />
        <TheadItem content='Status' currentFilter={currentFilter} sortFunction={sortByStatus} data={data} flag={flag} setFlag={setFlag} setCurrentFilter={setCurrentFilter} />
        <th style={{ width: 44 }}></th>
      </tr>
    </thead>
  );
}
