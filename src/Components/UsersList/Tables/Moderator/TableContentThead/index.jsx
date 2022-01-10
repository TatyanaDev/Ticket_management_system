import { sortAlphabetically, sortByUserRole } from "../../../../../utils/helpersFunction";
import TheadItem from "../../../../Shared/TheadItem";
import style from "../../../styles.module.css";

export default function TableContentThead({ data, currentFilter, setCurrentFilter, flag, setFlag }) {
  return (
    <thead className={style.background_thead_items}>
      <tr>
        <TheadItem content='First Name' currentFilter={currentFilter} field='ticket_name' sortFunction={sortAlphabetically} data={data} flag={flag} setFlag={setFlag} setCurrentFilter={setCurrentFilter} />
        <TheadItem content='Last Name' currentFilter={currentFilter} field='last_name' sortFunction={sortAlphabetically} data={data} flag={flag} setFlag={setFlag} setCurrentFilter={setCurrentFilter} />
        <TheadItem content='Email' currentFilter={currentFilter} field='email' sortFunction={sortAlphabetically} data={data} flag={flag} setFlag={setFlag} setCurrentFilter={setCurrentFilter} />
        <TheadItem content='User Role' currentFilter={currentFilter} field='user_role' sortFunction={sortByUserRole} data={data} flag={flag} setFlag={setFlag} setCurrentFilter={setCurrentFilter} />
        <TheadItem content='Total Ticket' currentFilter={currentFilter} field='total_ticket' sortFunction={sortAlphabetically} data={data} flag={flag} setFlag={setFlag} setCurrentFilter={setCurrentFilter} />
        <th style={{ width: 38 }}></th>
        <th style={{ width: 38 }}></th>
      </tr>
    </thead>
  );
}
