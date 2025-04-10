import { Col, Navbar, Row, Image } from "react-bootstrap";
import { Icon } from "@iconify/react/dist/iconify";
import { useLocation } from "react-router-dom";
import ProfileDropdown from "./ProfileDropdown";
import logo from "../../../../icons/Logo.svg";
import style from "./styles.module.css";

export default function Header({ userName }) {
  const location = useLocation();

  const pageNames = {
    "/dashboard": "Dashboard",
    "/ticket_history": "Ticket history",
    "/ticket_list": "Ticket list",
    "/recent_activity": "Recent Activity",
    "/users_list": "Users List",
    "/settings": "Settings",
  };

  return (
    <Row className={style.wrapper_header}>
      <Navbar className={style.background_header}>
        <Col className={style.wrapper_logo}>
          <Navbar.Brand className={style.wrapper_logo}>
            <Image src={logo} alt='Shoplab' className={style.logo} />
          </Navbar.Brand>
        </Col>

        <Col className={style.text}>{pageNames[location.pathname]}</Col>

        <Col sm={2} md={2} lg={2} xl={2} xxl={2}>
          <Row>
            <Col className={style.inner_wrapper}>
              <Icon icon='mi:notification' className={style.icon_notification} />
            </Col>

            <Col className={style.inner_wrapper}>
              <ProfileDropdown userName={userName} />
            </Col>
          </Row>
        </Col>
      </Navbar>
    </Row>
  );
}
