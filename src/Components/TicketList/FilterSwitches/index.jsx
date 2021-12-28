import { Button, ButtonGroup } from "react-bootstrap";
import { useState } from "react";
import cn from "classnames";
import style from "./styles.module.css";

export default function FilterSwitches({ filteringHandler }) {
  const [activeFilter, setActiveFilter] = useState("All");

  const switches = ["All", "Backlog", "Estimation", "Scheduled", "In Progress", "On Hold", "Pending", "Completed"];

  const handleFilterSwitchClick = (e) => {
    setActiveFilter(e.target.id);
    filteringHandler(e);
  };

  return (
    <ButtonGroup aria-label='Basic example' size='sm' className={style.switches}>
      {switches.map((title) => (
        <Button variant='light' key={title} id={title} onClick={handleFilterSwitchClick} className={cn(style.switch, activeFilter.includes(title) && style.switch_active)}>
          {title}
        </Button>
      ))}
    </ButtonGroup>
  );
}
