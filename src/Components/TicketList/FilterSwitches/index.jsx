import { Button, ButtonGroup } from "react-bootstrap";
import { useState } from "react";
import cn from "classnames";
import style from "./styles.module.css";

export default function FilterSwitches({ data, setTicketsList }) {
  const [activeFilter, setActiveFilter] = useState("All");

  const switches = [...new Set(data.map((ticket) => ticket.status))].slice();
  switches.unshift("All");

  const handleFilterSwitchClick = ({ target }) => {
    setTicketsList(data.filter((ticket) => target.id === "All" || ticket.status.includes(target.id)));
    setActiveFilter(target.id);
  };

  return (
    <ButtonGroup size='sm' className={style.switches}>
      {switches.map((title) => (
        <Button variant='light' key={title} id={title} onClick={handleFilterSwitchClick} className={cn(style.switch, activeFilter.includes(title) && style.switch_active)}>
          {title}
        </Button>
      ))}
    </ButtonGroup>
  );
}
