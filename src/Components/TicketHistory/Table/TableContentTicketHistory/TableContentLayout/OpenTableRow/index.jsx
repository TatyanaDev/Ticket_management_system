import { Icon } from "@iconify/react/dist/iconify";
import { Button, Table } from "react-bootstrap";
import cn from "classnames";
import style from "./styles.module.css";

export default function OpenTableRow({ description, date }) {
  return (
    <Table responsive>
      <thead>
        <tr className={style.title}>
          <th colSpan='4' className='ps-3 pe-3'>
            Ticket description
          </th>

          <th className='text-nowrap pe-3' style={{ textAlign: "end" }}>
            Submitted date
          </th>

          <th className='text-nowrap pe-3'>Action</th>
        </tr>
      </thead>

      <tbody>
        <tr className={cn("align-middle", style.text)}>
          <td colSpan='4' className='w-100 ps-3 pe-3' style={{ maxWidth: 800 }}>
            {description}
          </td>

          <td className='text-nowrap pe-3' style={{ verticalAlign: "top" }}>
            {date}
          </td>

          <td className='text-nowrap pe-3 pt-1 pb-1' style={{ verticalAlign: "top" }}>
            <Button variant='outline-primary' className={style.button_outline}>
              Go to ticket
              <Icon icon='ph:caret-right-bold' className={style.icon_caret_right} />
            </Button>
          </td>
        </tr>
      </tbody>
    </Table>
  );
}
