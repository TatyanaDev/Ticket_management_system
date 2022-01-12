import { Button, OverlayTrigger, Tooltip } from "react-bootstrap";
import { Icon } from "@iconify/react/dist/iconify";
import cn from "classnames";
import style from "./styles.module.css";

export default function HeadingWithTooltipDown({ tooltip, title }) {
  return (
    <OverlayTrigger placement='bottom' overlay={<Tooltip id='button-tooltip-2'>{tooltip}</Tooltip>}>
      {({ ref, ...triggerHandler }) => (
        <Button variant='light' {...triggerHandler} className={cn("d-inline-flex align-items-center p-0", style.wrapper)}>
          <span className='me-1'>{title}</span>
          <Icon ref={ref} icon='entypo:info-with-circle' />
        </Button>
      )}
    </OverlayTrigger>
  );
}
