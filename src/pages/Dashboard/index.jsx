import { Container, Row, Col, Button } from "react-bootstrap";
import { Icon } from "@iconify/react/dist/iconify";
import { Link } from "react-router-dom";
import { useState } from "react";
import CreateNewTicketModal from "../../Components/Dashboard/CreateNewTicketModal";
import Sidebar from "./../../Components/Common/Sidebar";
import Header from "../../Components/Common/Header";
import progress from "../../icons/progress.svg";
import check from "../../icons/check.svg";
import info from "../../icons/info.svg";
import style from "./styles.module.css";

import SummaryCard from "../../Components/Dashboard/SummaryCard";

export default function Dashboard() {
  const [recentActivityShow, setRecentActivityShow] = useState(false);
  const [modalShow, setModalShow] = useState(false);

  return (
    <Container fluid>
      <Header />

      <Row>
        <Col sm={2} md={2} lg={2} xl={2} xxl={2} className={style.wrapper_sidebar}>
          <Sidebar />
        </Col>

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
              <SummaryCard header='Action Required' quantity='10' color={style.info} src={info} />

              <SummaryCard header='Tickets In Progress' quantity='10' color={style.progress} src={progress} />

              <SummaryCard header='To be Released' quantity='10' color={style.check} src={check} />
            </Row>

            <Row>
              <Col className={style.ticket_history}>Ticket history</Col>
              <Col className={style.wrapper_link_ticket_list}>
                <Link className={style.link_ticket_list} to='/ticket_list'>
                  See all
                </Link>
              </Col>
            </Row>
            <Row>
              <Col>test</Col>
            </Row>
            <Row>
              <Col className={style.wrapper_button_recent_activity}>
                <Button className={style.button_recent_activity} variant='danger'>
                  <Row>
                    <Col className={style.wrapper_arrow_button}>
                      <Icon icon='fluent:arrow-right-12-filled' rotate='270deg' className={style.arrow_button} />
                    </Col>
                    <Col className={style.recent_activity}>Recent activity</Col>
                    <Col className={style.value_recent_activity}>5</Col>
                  </Row>
                </Button>
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
  );
}
