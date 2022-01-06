import { Col, Container, Nav } from "react-bootstrap";
import { Icon } from "@iconify/react/dist/iconify";
import cn from "classnames";
import { user_list } from "./NavItem/styles.module.css";
import style from "./styles.module.css";
import NavItem from "./NavItem";

export default function Sidebar({ minimize, toggleMinimize }) {
  return (
    <Container className={cn(style.container_sidebar, "p-0 m-0 d-flex flex-column justify-content-between", minimize || style.container)}>
      <Nav className='flex-column'>
        <NavItem content='Dashboard' icon='bx:bx-home' href='/dashboard' minimize={minimize} padding={style.dash_sett_link} />

        {minimize || <Col className={style.section_title}>Ticket</Col>}

        <NavItem content='Ticket History' icon='icon-park-outline:log' href='/ticket_history' minimize={minimize} padding={style.item_link} />

        <NavItem content='Ticket List' icon='bx:bx-book' href='/ticket_list' minimize={minimize} padding={style.item_link} />

        <NavItem content='Recent Activity' icon='feather:activity' href='/recent_activity' minimize={minimize} padding={style.item_link} />

        {minimize || <Col className={style.section_title}>Users</Col>}

        <NavItem content='Users List' icon='uil:users-alt' href='/users_list' minimize={minimize} padding={style.user_list_link} font={user_list} />
      </Nav>

      <Nav className='flex-column'>
        <NavItem content='Settings' icon='ic:baseline-settings' href='/settings' minimize={minimize} padding={style.dash_sett_link} />
        <Col className={style.toggle} onClick={toggleMinimize}>
          <Icon icon='fluent:caret-left-24-filled' className={cn(style.icon, minimize && style.icon_rotate)} />
          {minimize || "Minimize"}
        </Col>
      </Nav>
    </Container>
  );
}
