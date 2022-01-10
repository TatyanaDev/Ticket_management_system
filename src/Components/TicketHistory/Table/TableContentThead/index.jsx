import { sortByNumbers, sortAlphabetically, sortByDate } from "../../../../utils/helpersFunction";
import TheadItem from '../../../Shared/TheadItem'
import style from "./styles.module.css";

export default function TableContentThead({ data, currentFilter, setCurrentFilter, flag, setFlag }) {
  return (
    <thead>
      <tr className={style.wrapper_thead}>
        <TheadItem content='Ticket ID' currentFilter={currentFilter} field='ticket_id' sortFunction={sortByNumbers} data={data} flag={flag} setFlag={setFlag} setCurrentFilter={setCurrentFilter} />
        <TheadItem content='Ticket Name' currentFilter={currentFilter} field='ticket_name' sortFunction={sortAlphabetically} data={data} flag={flag} setFlag={setFlag} setCurrentFilter={setCurrentFilter} />
        <TheadItem content='Approver' currentFilter={currentFilter} field='approver' sortFunction={sortAlphabetically} data={data} flag={flag} setFlag={setFlag} setCurrentFilter={setCurrentFilter} />
        <TheadItem content='Resolved Date' currentFilter={currentFilter} field='resolved_date' sortFunction={sortByDate} data={data} flag={flag} setFlag={setFlag} setCurrentFilter={setCurrentFilter} />
        <TheadItem content='Followup ticket' currentFilter={currentFilter} field='followup_ticket' sortFunction={sortByNumbers} data={data} flag={flag} setFlag={setFlag} setCurrentFilter={setCurrentFilter} />
        <th style={{ width: 38 }}></th>
      </tr>
    </thead>
  );
}
