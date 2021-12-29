import { Container, Row, Col, Table } from "react-bootstrap";
import { Icon } from "@iconify/react/dist/iconify";
import { Link } from "react-router-dom";
import { useState } from "react";
import cn from "classnames";
import TableContentTicketHistory from "../../Components/Dashboard/Table/TableContentTicketHistory";
import { ticketSummary, ticketHistory, recentActivity } from "../../pages/mokeDB";
import ButtonRecentActivity from "../../Components/Dashboard/ButtonRecentActivity";
import TableContentThead from "../../Components/Dashboard/Table/TableContentThead";
import RecentActivityBlock from "../../Components/Dashboard/RecentActivityBlock";
import ModalOpenButton from "../../Components/Dashboard/ModalOpenButton";
import SummaryCard from "../../Components/Dashboard/SummaryCard";
import progress from "../../icons/dashboard/progress.svg";
import check from "../../icons/dashboard/check.svg";
import info from "../../icons/dashboard/info.svg";
import style from "./styles.module.css";

export default function DashboardLayout() {
  const [recentActivityShow, setRecentActivityShow] = useState(false);
  const [currentFilter, setCurrentFilter] = useState(null);
  const [flag, setFlag] = useState(false);

  const { data: activity } = recentActivity;
  const { data: summary } = ticketSummary;
  const { data } = ticketHistory;

  return (
    <Col className={cn("position-relative", "p-0")} style={{ backgroundColor: "var(--bs-gray-100)" }}>
      <Col xs={recentActivityShow ? { span: 9 } : "auto"} xxl={recentActivityShow ? { span: 10 } : "auto"} className='p-0'>
        <Container className={cn(style.wrapper_dashboard, recentActivityShow && style.wrapper_dashboard_active)} fluid>
          <Row>
            <Col className={style.ticket_summary}>Ticket Summary</Col>
            <Col style={{ textAlign: "end" }}>
              <ModalOpenButton content='Create New Ticket' styleButton={style.button_create_ticket} styleIcon={style.icon_plus} />
            </Col>
          </Row>

          <Row>
            <Col>
              <SummaryCard header='Action Required' quantity={summary.action_required} color={style.info} color_link={style.link_info} src={info} />
            </Col>

            <SummaryCard header='Tickets In Progress' quantity={summary.tickets_in_progress} color={style.progress} color_link={style.link_progress} src={progress} />

            <SummaryCard header='To be Released' quantity={summary.to_be_released} color={style.check} color_link={style.link_check} src={check} />
          </Row>

          <Row>
            <Col className={style.ticket_history} style={{ marginBottom: "14px" }}>
              Ticket history
            </Col>
            <Col style={{ textAlign: "end" }}>
              <Link className={style.link_ticket_list} to='/ticket_list'>
                See all
                <Icon icon='ep:arrow-right-bold' className={style.arrow_see_all} />
              </Link>
            </Col>
          </Row>

          <Row>
            <Col>
              <Table className={style.wrapper_table}>
                <TableContentThead data={data} currentFilter={currentFilter} setCurrentFilter={setCurrentFilter} flag={flag} setFlag={setFlag} />
                <tbody>
                  {data.map((ticket) => (
                    <TableContentTicketHistory ticket={ticket} key={ticket.ticket_id} />
                  ))}
                </tbody>
              </Table>
            </Col>
          </Row>

          <ButtonRecentActivity recentActivityShow={recentActivityShow} setRecentActivityShow={setRecentActivityShow} summary={summary} />
        </Container>
      </Col>

      {recentActivityShow && <RecentActivityBlock recentActivity={activity} recentActivityShow={recentActivityShow} setRecentActivityShow={setRecentActivityShow} />}
    </Col>
  );
}
