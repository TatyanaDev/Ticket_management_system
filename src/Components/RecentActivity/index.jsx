import { Container, Row, Col } from "react-bootstrap";
import { useState } from "react";
import cn from "classnames";
import ActivityHistoryList from "./ActivityHistoryList";
import UnreadActivityList from "./UnreadActivityList";
import { recentActivity } from "../../utils/mokeDB";
import PaginatedItems from "../Shared/Pagination";
import SearchBar from "../Shared/SearchBar";
import style from "./styles.module.css";

export default function RecentActivityLayout() {
  const { data } = recentActivity;
  const [ticketsListActivityHistory, setTicketsListActivityHistory] = useState(data);
  const [ticketsListUnreadActivity, setTicketsListUnreadActivity] = useState(data);

  return (
    <Col className='p-0' style={{ backgroundColor: "#f8f9fa" }}>
      <SearchBar data={data} setTicketsList={setTicketsListUnreadActivity} />
      <Container fluid className={style.wrapper_tickets_blocks}>
        <Row className={cn(style.title, "ms-0 me-0 mb-2")}>Unread Activity</Row>
        <UnreadActivityList data={ticketsListUnreadActivity} />
        <Row className={cn(style.title, "pt-4 ms-0 mb-2")}>Activity History</Row>
        <ActivityHistoryList data={ticketsListActivityHistory} />
        <PaginatedItems itemsPerPage={3} data={data} setTicketsList={setTicketsListActivityHistory} />
      </Container>
    </Col>
  );
}
