import { Col, Container, Row } from "react-bootstrap";
import { useState } from "react";
import TableActionRequired from "./Tables/ActionRequired";
import SearchInput from "../Shared/SearchInput/index";
import { actionRequired } from "../../pages/mokeDB";
import FilterSwitches from "./FilterSwitches/index";
import CustomPagination from "../Shared/Pagination";
import TableTicketList from "./Tables/TicketList";
import style from "./styles.module.css";

export default function TicketListLayout() {
  const { data } = actionRequired;
  const [ticketsList, setTicketsList] = useState(data);

  return (
    <Col className={style.container}>
      <Container fluid className='p-0'>
        <Row>
          <Row className={style.title} style={{ marginBottom: 18, marginLeft: 1 }}>
            Action required
          </Row>
          <TableActionRequired data={data} />
        </Row>
        <Row>
          <Col xxl={{ span: 1 }} xs={{ span: 2 }} className={style.title} style={{ marginTop: 5 }}>
            Ticket list
          </Col>
          <Col xxl={{ span: 3 }} xs={{ span: 6 }}>
            <SearchInput data={data} setTicketsList={setTicketsList} />
          </Col>
          <Col xxl={{ span: 8 }} className={style.switch_wrapper}>
            <FilterSwitches data={data} setTicketsList={setTicketsList} />
          </Col>
        </Row>
        <Row style={{ marginTop: 8 }}>
          <TableTicketList data={ticketsList} />
        </Row>
        <CustomPagination />
      </Container>
    </Col>
  );
}
