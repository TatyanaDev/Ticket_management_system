import { Col, Form, Row } from "react-bootstrap";
import cn from "classnames";
import style from "./styles.module.css";

export default function PriorityRange({ priority, setPriority }) {
  return (
    <>
      <Form.Label htmlFor='Priority' className={cn("form-label", style.label)}>
        Ticket Priority
      </Form.Label>
      <Row className='m-0 p-0 align-items-center mb-1'>
        <Col className='ps-0 pe-1'>
          <Row className={style.priority}>
            <Col xs='auto' className='ps-0'>
              Lowest
            </Col>
            <Col xs='auto' className='pe-0'>
              Highest
            </Col>
          </Row>
          <Row className={style.wrapper_range}>
            <Form.Range role='progressbar' className={cn("form-range col", style.range_input)} list='priority' min='1' max='5' step='1' id='Priority' onChange={({ target }) => setPriority(target.value)} value={priority} />
            {priority > 1 && <Col className={style.color} style={{ width: `${(priority - 1) * 25}%` }} />}
          </Row>

          <datalist className={style.scale} id='priority'>
            <option className='ps-1 p-0' label='1'>
              1
            </option>
            <option className='p-0'>2</option>
            <option className='p-0'>3</option>
            <option className='p-0'>4</option>
            <option className='ps-0 pe-1'>5</option>
          </datalist>
        </Col>

        <Col xs='auto' className={style.range_value}>
          {priority}
        </Col>
      </Row>
    </>
  );
}
