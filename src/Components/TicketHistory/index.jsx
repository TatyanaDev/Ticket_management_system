import { Container } from "react-bootstrap";
import { useState } from "react";
import ModalOpenButton from "../../Components/Dashboard/ModalOpenButton";
import TicketHistoryTable from "./Table/TableContentTicketHistory";
import { ticketHistory } from "../../utils/mokeDB";
import PaginatedItems from "../Shared/Pagination";
import SearchBar from "../Shared/SearchBar";
import style from "./styles.module.css";

export default function TicketHistoryLayout() {
  const { data } = ticketHistory;
  const [ticketsList, setTicketsList] = useState(data);

  return (
    <>
      <SearchBar data={data} setTicketsList={setTicketsList} link='/dashboard'>
        <ModalOpenButton content='Create a new ticket' styleButton={style.button_create_ticket} styleIcon={style.icon_plus} />
      </SearchBar>
      <Container fluid className='pe-5 ps-5 pt-4 pb-4'>
        <TicketHistoryTable data={ticketsList} />
        <PaginatedItems itemsPerPage={6} data={data} setTicketsList={setTicketsList} />
      </Container>
    </>
  );
}
