import { Container, Row, Col, Button, Table, Image } from "react-bootstrap";
import { Icon } from "@iconify/react/dist/iconify";
import { Link } from "react-router-dom";
import { useState } from "react";
import { sortTicketId, sortTicketName, sortApprover, sortResolvedDate } from "./ sortingFunctions";
import CreateNewTicketModal from "../../Components/Dashboard/CreateNewTicketModal";
import SummaryCard from "../../Components/Dashboard/SummaryCard";
import progress from "../../icons/dashboard/progress.svg";
import Sidebar from "./../../Components/Shared/Sidebar";
import { ticketSummaryCard, tickets } from "./mokeDB";
import Header from "../../Components/Shared/Header";
import check from "../../icons/dashboard/check.svg";
import info from "../../icons/dashboard/info.svg";
import style from "./styles.module.css";
import cn from "classnames";

export default function Dashboard() {
  const [recentActivityShow, setRecentActivityShow] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  const [flag, setFlag] = useState(false);

  const { data: summary } = ticketSummaryCard;
  const { data } = tickets;

  return (
    <Container fluid>
      <Header activePageTitle='Dashboard' />

      <Row className={style.test}>
        <Sidebar />

        <Col className={style.container_dashboard_content}>
          <Container className={style.wrapper_dashboard} fluid>
            <Row>
              <Col className={style.ticket_summary}>Ticket Summary</Col>
              <Col className={style.wrapper_button_create_ticket}>
                <Button variant='primary' onClick={() => setModalShow(true)} className={style.button_create_ticket}>
                  <Icon icon='gridicons:plus-small' className={style.icon_plus} />
                  Create New Ticket
                </Button>
                <CreateNewTicketModal show={modalShow} onHide={() => setModalShow(false)} />
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
                          <Col>Ticket ID</Col>
                          <Col className={cn(style.arrow_thead, flag && style.arrow_thead_active)} onClick={() => sortTicketId({ data, flag, setFlag })}>
                            <Icon icon='ep:arrow-up-bold' />
                          </Col>
                        </Row>
                      </th>
                      <th className={cn(style.wrapper_thead_item, style.width_2)}>
                        <Row>
                          <Col>Ticket Name</Col>
                          <Col className={cn(style.arrow_thead, flag && style.arrow_thead_active)} onClick={() => sortTicketName({ data, flag, setFlag })}>
                            <Icon icon='ep:arrow-up-bold' />
                          </Col>
                        </Row>
                      </th>
                      <th className={cn(style.wrapper_thead_item, style.width_3)}>
                        <Row>
                          <Col>Approver</Col>
                          <Col className={cn(style.arrow_thead, flag && style.arrow_thead_active)} onClick={() => sortApprover({ data, flag, setFlag })}>
                            <Icon icon='ep:arrow-up-bold' />
                          </Col>
                        </Row>
                      </th>
                      <th className={cn(style.wrapper_thead_item, style.width_3)}>
                        <Row>
                          <Col>Resolved date</Col>
                          <Col className={cn(style.arrow_thead, flag && style.arrow_thead_active)} onClick={() => sortResolvedDate({ data, flag, setFlag })}>
                            <Icon icon='ep:arrow-up-bold' />
                          </Col>
                        </Row>
                      </th>
                      <th className={style.empty}></th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((ticket) => (
                      <>
                        <tr key={ticket.ticket_id} className={style.wrapper_tbody}>
                          <td className={cn(style.wrapper_tbody_item, style.content)}>{ticket.ticket_id}</td>
                          <td className={cn(style.wrapper_tbody_item, style.gray)}>{ticket.ticket_name}</td>
                          <td className={cn(style.wrapper_tbody_item, style.gray)}>
                            <Row className={style.wrapper_tbody_image}>
                              <Col className={style.tbody_image}>
                                <Image src={ticket.src} />
                              </Col>
                              <Col className={style.wrapper_tbody_approver}>{ticket.approver}</Col>
                            </Row>
                          </td>
                          <td className={cn(style.wrapper_tbody_item, style.content)}>{ticket.resolved_date}</td>
                          <td className={style.wrapper_arrow_tbody}>
                            <Icon className={style.arrow_tbody} icon='ep:arrow-down-bold' />
                          </td>
                        </tr>

                        <tr className={style.wrapper_thead_inner}>
                          <th className={style.wrapper_thead_item_inner}>Ticket description</th>
                          <th></th>
                          <th className={cn(style.wrapper_thead_item_inner, style.text_end)}>Submitted date</th>
                          <th className={cn(style.wrapper_thead_item_inner, style.text_end)}>Followup Ticket</th>
                          <th></th>
                        </tr>

                        <tr className={style.wrapper_tbody_inner}>
                          <td colSpan='2' className={style.wrapper_tbody_item_inner}>
                            {ticket.ticket_description}
                          </td>
                          <td className={cn(style.wrapper_tbody_item_inner, style.text_end)}>{ticket.submitted_date}</td>
                          <td className={cn(style.wrapper_tbody_item_inner, style.text_end)}>
                            <Button onClick={() => setModalShow(true)} className={style.button_add_ticket}>
                              <Icon icon='gridicons:plus-small' className={style.icon_plus_add} />
                              Add ticket
                            </Button>
                          </td>
                          <td></td>
                        </tr>
                      </>
                    ))}
                  </tbody>
                </Table>
              </Col>
            </Row>

            <Row>
              <Col className={style.wrapper_button_recent_activity}>
                <Button className={style.button_recent_activity} variant='danger'>
                  <Row>
                    <Col className={style.wrapper_arrow_button}>
                      <Icon icon='fluent:arrow-right-12-filled' rotate='270deg' className={style.arrow_button} />
                    </Col>
                    <Col className={style.recent_activity}>Recent activity</Col>
                    <Col className={style.value_recent_activity}>{summary.action_required}</Col>
                  </Row>
                </Button>
              </Col>
            </Row>
          </Container>
        </Col>

        <Col className={style.recent_activity}>
          <Row>
            <Col></Col>
            <Col> Recent activity</Col>
            <Col>
              <Link className={style.link_ticket_list} to='/ticket_list'>
                See all
                <Icon icon='ep:arrow-right-bold' className={style.arrow_see_all} />
              </Link>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
