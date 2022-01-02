import { sortByNumbers, sortAlphabetically, sortByDate } from "../../../../../utils/helpersFunction";
import style from "../../../../TicketList/styles.module.css";
import TheadItem from "../../TheadItem";

export default function TableContentThead({ data, currentFilter, setCurrentFilter, flag, setFlag }) {
  return (
    <thead className={style.background}>
      <tr>
        <TheadItem content='Ticket ID' currentFilter={currentFilter} field='ticket_id' sortFunction={sortByNumbers} data={data} flag={flag} setFlag={setFlag} setCurrentFilter={setCurrentFilter} />
        <TheadItem content='Ticket Name' currentFilter={currentFilter} field='ticket_name' sortFunction={sortAlphabetically} data={data} flag={flag} setFlag={setFlag} setCurrentFilter={setCurrentFilter} />
        <TheadItem content='Approver' currentFilter={currentFilter} field='approver' sortFunction={sortAlphabetically} data={data} flag={flag} setFlag={setFlag} setCurrentFilter={setCurrentFilter} />
        <TheadItem content='Priority' currentFilter={currentFilter} field='priority' sortFunction={sortAlphabetically} data={data} flag={flag} setFlag={setFlag} setCurrentFilter={setCurrentFilter} />
        <TheadItem content='Complexity' currentFilter={currentFilter} field='complexity' sortFunction={sortByNumbers} data={data} flag={flag} setFlag={setFlag} setCurrentFilter={setCurrentFilter} />
        <TheadItem content='Date Created' currentFilter={currentFilter} field='date_created' sortFunction={sortByDate} data={data} flag={flag} setFlag={setFlag} setCurrentFilter={setCurrentFilter} />
        <TheadItem content='Status' currentFilter={currentFilter} field='status' sortFunction={sortAlphabetically} data={data} flag={flag} setFlag={setFlag} setCurrentFilter={setCurrentFilter} />
        <th style={{ width: 38 }}></th>
      </tr>
    </thead>
  );
}
