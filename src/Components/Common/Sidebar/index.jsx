import { Col, Container, Nav, Row } from "react-bootstrap";
import { Icon } from "@iconify/react/dist/iconify";
import { useState } from "react";
import cn from "classnames";
import { user_list } from "./NavItem/styles.module.css";
import style from "./styles.module.css";
import NavItem from "./NavItem/index";

export default function Sidebar() {
  const [minimize, setMinimize] = useState(false);

  return (
    <Row>
      <Container className={cn(style.container_sidebar, ` ${minimize && style.container_sidebar_min}`)}>
        <Nav defaultActiveKey='/dashboard' className='flex-column'>
          <NavItem content='Dashboard' icon='bx:bx-home' href='/dashboard' minimize={minimize} padding={style.dash_sett_link} />

          {minimize || <Row className={style.section_title}>Ticket</Row>}

          <NavItem content='Ticket History' icon='icon-park-outline:log' href='/ticket_history' minimize={minimize} padding={style.item_link} />

          <NavItem content='Ticket List' icon='bx:bx-book' href='/ticket_list' minimize={minimize} padding={style.item_link} />

          <NavItem content='Recent Activity' icon='feather:activity' href='/recent_activity' minimize={minimize} padding={style.item_link} />

          {minimize || <Row className={style.section_title}>Users</Row>}

          <NavItem content='Users List' icon='uil:users-alt' href='/user_list' minimize={minimize} padding={style.user_list_link} font={user_list} />
        </Nav>

        <Container className={style.wrapper}>
          <Nav defaultActiveKey='/settings' className='flex-column'>
            <NavItem content='Settings' icon='ic:baseline-settings' href='/settings' minimize={minimize} padding={style.dash_sett_link} />
          </Nav>

          <Col className={style.toggle} onClick={() => setMinimize(!minimize)}>
            <Icon icon='fluent:caret-left-24-filled' className={cn(style.icon, ` ${minimize && style.icon_rotate}`)} />
            {minimize || "Minimize"}
          </Col>
        </Container>
      </Container>
    </Row>
  );
}
