import { Button, Row, Table } from "react-bootstrap";
import { Icon } from "@iconify/react/dist/iconify";
import cn from "classnames";
import { styleSelection } from "../../../../../../utils/helpersFunction";
import style from "./styles.module.css";

export default function OpenTableRow({ tickets }) {
  return (
    <Table responsive>
      <thead>
        <tr className={style.head}>
          <th className='ps-3 pe-3' style={{ width: "15%" }}>
            Ticket Name
          </th>
          <th className='pe-3'>Ticket description</th>
          <th className='pe-3' style={{ width: "15%" }}>
            Ticket Status
          </th>
          <th className='pe-3'>Followup Ticket</th>
        </tr>
      </thead>
      <tbody>
        {tickets.map((ticket) => (
          <tr key={ticket.id} className={cn("align-middle", style.body)}>
            <td className='pe-3 ps-3' style={{ verticalAlign: "top" }}>
              {ticket.name}
            </td>
            <td className='pe-3' style={{ minWidth: 650 }}>
              {ticket.description}
            </td>
            <td className='pe-3' style={{ verticalAlign: "top" }}>
              <Row className={cn(styleSelection(ticket.status), "m-0")} style={{ fontSize: 14, liheHeight: 24 }}>
                {ticket.status}
              </Row>
            </td>
            <td className='text-nowrap pe-3 pt-1 pb-1' style={{ verticalAlign: "top" }}>
              <Button variant='outline-primary' className={style.button_outline}>
                Go to ticket
                <Icon icon='ph:caret-right-bold' style={{ fontSize: 20 }} />
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
