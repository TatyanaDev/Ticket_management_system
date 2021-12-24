import { Container, Row, Col, Button, Table, Image } from "react-bootstrap";
import { Icon } from "@iconify/react/dist/iconify";
import { Link } from "react-router-dom";
import { useState } from "react";
import { sortTicketId, sortTicketName, sortApprover, sortResolvedDate } from "../sortingFunctions";
import TableContentActionRequired from "../../Components/Dashboard/TableContentActionRequired";
import { ticketSummaryCard, tickets, recentActivityTickets } from "./mokeDB";
import ModalOpenButton from "../../Components/Dashboard/ModalOpenButton";
import SummaryCard from "../../Components/Dashboard/SummaryCard";
import progress from "../../icons/dashboard/progress.svg";
import Sidebar from "./../../Components/Shared/Sidebar";
import Header from "../../Components/Shared/Header";
import check from "../../icons/dashboard/check.svg";
import info from "../../icons/dashboard/info.svg";
import style from "./styles.module.css";
import cn from "classnames";

export default function Dashboard() {
  const [recentActivityShow, setRecentActivityShow] = useState(false);
  const [currentFilter, setCurrentFilter] = useState(null);
  const [flag, setFlag] = useState(false);

  const { data: recentActivity } = recentActivityTickets;
  const { data: summary } = ticketSummaryCard;
  const { data } = tickets;

  return (
    <Container fluid>
      <Header activePageTitle='Dashboard' />

      <Row>
        <Sidebar />
        {/* 
        <Col className={style.text}> */}

        <Col className={style.container_dashboard_content}>
          <Container className={cn(style.wrapper_dashboard, recentActivityShow && style.wrapper_dashboard_active)} fluid>
            <Row>
              <Col className={style.ticket_summary}>Ticket Summary</Col>
              <Col className={style.wrapper_button_create_ticket}>
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
              <Col className={style.ticket_history}>Ticket history</Col>
              <Col className={style.wrapper_link_ticket_list}>
                <Link className={style.link_ticket_list} to='/ticket_list'>
                  See all
                  <Icon icon='ep:arrow-right-bold' className={style.arrow_see_all} />
                </Link>
              </Col>
            </Row>

            <Row>
              <Col>
                <Table className={style.wrapper_table}>
                  <thead>
                    <tr className={style.wrapper_thead}>
                      <th className={cn(style.wrapper_thead_item, style.width_1)}>
                        <Row>
                          <Col className={style.content_thead}>Ticket ID</Col>
                          <Col className={cn(style.arrow_thead, currentFilter === "ticketId" && style.arrow_thead_active)} onClick={() => sortTicketId({ data, flag, setFlag, setCurrentFilter })}>
                            <Icon icon='ep:arrow-up-bold' />
                          </Col>
                        </Row>
                      </th>
                      <th className={style.wrapper_thead_item}>
                        <Row>
                          <Col className={style.content_thead}>Ticket Name</Col>
                          <Col className={cn(style.arrow_thead, currentFilter === "ticketName" && style.arrow_thead_active)} id='ticketName' onClick={() => sortTicketName({ data, flag, setFlag, setCurrentFilter })}>
                            <Icon icon='ep:arrow-up-bold' />
                          </Col>
                        </Row>
                      </th>
                      <th className={cn(style.wrapper_thead_item, style.width_2)}>
                        <Row>
                          <Col className={style.content_thead}>Approver</Col>
                          <Col className={cn(style.arrow_thead, currentFilter === "approver" && style.arrow_thead_active)} id='approver' onClick={() => sortApprover({ data, flag, setFlag, setCurrentFilter })}>
                            <Icon icon='ep:arrow-up-bold' />
                          </Col>
                        </Row>
                      </th>
                      <th className={cn(style.wrapper_thead_item, style.width_3)}>
                        <Row>
                          <Col className={style.content_thead}>Resolved date</Col>
                          <Col className={cn(style.arrow_thead, currentFilter === "resolvedDate" && style.arrow_thead_active)} id='resolvedDate' onClick={() => sortResolvedDate({ data, flag, setFlag, setCurrentFilter })}>
                            <Icon icon='ep:arrow-up-bold' />
                          </Col>
                        </Row>
                      </th>
                      <th className={style.empty}></th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((ticket) => (
                      <TableContentActionRequired ticket={ticket} key={ticket.ticket_id} />
                    ))}
                  </tbody>
                </Table>
              </Col>
            </Row>

            <Row>
              <Col className={style.wrapper_button_recent_activity}>
                <Button className={cn(style.button_recent_activity, recentActivityShow && style.button_recent_activity_active)} variant='danger' onClick={() => setRecentActivityShow(true)}>
                  <Row>
                    <Col className={style.wrapper_arrow_button}>
                      <Icon icon='fluent:arrow-up-12-filled' className={style.arrow_button} />
                    </Col>
                    <Col className={style.recent_activity}>Recent activity</Col>
                    <Col className={style.value_recent_activity}>{summary.action_required}</Col>
                  </Row>
                </Button>
              </Col>
            </Row>
          </Container>
        </Col>

        {/* <div className={style.rc}> */}

        <Col className={cn(style.recent_activity_block, recentActivityShow && style.recent_activity_block_active, style.rc)}>
          <Row>
            <Col className={style.button_recent_activity_block} onClick={() => setRecentActivityShow(false)}>
              <Icon icon='fluent:arrow-down-12-filled' className={style.arrow_button_block} />
              Recent Activity
            </Col>
            <Col className={style.wrapper_link_ticket_list_block}>
              <Link className={style.link_ticket_list} to='/recent_activity'>
                See all
                <Icon icon='ep:arrow-right-bold' className={style.arrow_see_all_block} />
              </Link>
            </Col>
          </Row>

          {recentActivity.map((ticket) => (
            <Container key={ticket.ticket_id} className={cn(style.wrapper_recent_activity_ticket, ticket.type === "Take Action" && style.border_take_action)}>
              <Row>
                <Col className={style.icon_recent_activity_ticket}>
                  <Image src={ticket.src} />
                </Col>
                <Col>
                  <Row className={cn(style.wrapper_recent_activity_ticket_name, ticket.type === "Take Action" ? style.design_ticket_color_ticket_name : style.take_action_color_ticket_name)}>{ticket.ticket_name}</Row>
                  <Row className={cn(style.wrapper_recent_activity_ticket_type, ticket.type === "Design ticket" ? style.background_design_ticket : style.background_take_action)}>{ticket.type}</Row>
                </Col>
              </Row>

              <Row>
                <Col className={style.content_recent_activity_ticket}>{ticket.type === "Design ticket" ? `${ticket.user_name} submitted a new ticket "${ticket.ticket_name}".` : `${ticket.user_name} asked a new question: "${ticket.question}" on ${ticket.on} ticket.`}</Col>
              </Row>
              <Row>
                <Col className={style.date_recent_activity_ticket}>{ticket.submitted_date}</Col>
                <Col className={style.wrapper_review_link}>
                  <Link className={cn(style.link_ticket_list, style.review_link, ticket.type === "Design ticket" ? style.color_reviev_link_design_ticket : style.color_reviev_link_take_action)} to='#'>
                    Review
                    <Icon icon='ep:arrow-right-bold' className={style.arrow_see_all_block} />
                  </Link>
                </Col>
              </Row>
            </Container>
          ))}
        </Col>

        {/* </div> */}
        {/* </Col> */}
      </Row>
    </Container>
  );
}
