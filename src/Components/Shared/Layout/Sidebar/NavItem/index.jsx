import { Link, useLocation } from "react-router-dom";
import { Icon } from "@iconify/react/dist/iconify";
import { Nav } from "react-bootstrap";
import cn from "classnames";
import style from "./styles.module.css";

export default function NavItem({ content, icon, href, minimize, padding, font }) {
  const { pathname } = useLocation();

  return (
    <Nav.Item className={cn(style.nav_link, pathname === href && style.nav_link_active)}>
      <Link to={href} className={cn(style.link, padding, font)}>
        <Icon icon={icon} className={style.icon} />
        {minimize || content}
      </Link>
    </Nav.Item>
  );
}
