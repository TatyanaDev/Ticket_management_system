import { Col, Container, Row, Stack } from "react-bootstrap";
import { useState } from "react";
import cn from "classnames";
import TableActionRequired from "./Tables/TableActionRequired";
import TableTicketList from "./Tables/TableTicketList";
import SearchInput from "../Shared/SearchInput/index";
import FilterSwitches from "./FilterSwitches/index";
import CustomPagination from "../Shared/Pagination";
import style from "./styles.module.css";

export default function TicketList({ tickets = [] }) {
  const [ticketsList, setTicketsList] = useState(tickets);

  const filteringHandlerByStatus = (e) => {
    setTicketsList(tickets.filter((ticket) => e.target.id === "All" || ticket.status.includes(e.target.id)));
  };

  return (
    <Container fluid className={style.container}>
      <Stack gap={3}>
        <Row className={cn("title", style.title)}>Action required</Row>
        <Row>
          <TableActionRequired tickets={tickets} />
        </Row>
        <Row>
          <Col xxl={{ span: 1 }} xs={{ span: 2 }} className='title'>
            Ticket list
          </Col>
          <Col xxl={{ span: 3 }} xs={{ span: 6 }}>
            <SearchInput data={tickets} onSearch={setTicketsList} />
          </Col>
          <Col xxl={{ span: 8 }} className={style.switch_wrapper}>
            <FilterSwitches filteringHandler={filteringHandlerByStatus} />
          </Col>
        </Row>
        <Row>
          <TableTicketList tickets={ticketsList} />
        </Row>
        <Row>
          <CustomPagination />
        </Row>
      </Stack>
    </Container>
  );
}
