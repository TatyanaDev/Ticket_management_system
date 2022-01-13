import { Col, Form, Modal, Stack } from "react-bootstrap";
import HeadingWithTooltipDown from "../../../../HeadingWithTooltipDown";
import TextEditor from "../../../../TextEditor";
import style from "../styles.module.css";
import Steps from "../../Steps";

export default function Bug({ activeStep, ticketDescription, setTicketDescription, issue, setIssue, outcome, setOutcome }) {
  return (
    <Modal.Body className='p-0' style={{ marginBottom: 42 }}>
      <Steps activeStep={activeStep} />
      <Stack gap={2}>
        <Form.Group className='mb-2'>
          <Form.Label className={style.label} htmlFor='user_story'>
            <HeadingWithTooltipDown tooltip='Ticket Description' title='Ticket Description' />
          </Form.Label>
          <TextEditor limit='3000' value={ticketDescription} setValue={setTicketDescription} />
        </Form.Group>

        <Form.Group className='mb-2'>
          <Form.Label className={style.label}>
            <HeadingWithTooltipDown tooltip='Describe the Issue' title='Describe the Issue' />
          </Form.Label>
          <Form.Control as='textarea' className={style.textarea} value={issue} onChange={(e) => setIssue(e.target.value)} />
          <Col className={style.limit}>{issue.length}/3000</Col>
        </Form.Group>

        <Form.Group className='mb-2'>
          <Form.Label className={style.label}>
            <HeadingWithTooltipDown tooltip='Expected Outcome' title='Expected Outcome' />
          </Form.Label>
          <TextEditor limit='3000' value={outcome} setValue={setOutcome} />
        </Form.Group>
      </Stack>
    </Modal.Body>
  );
}
