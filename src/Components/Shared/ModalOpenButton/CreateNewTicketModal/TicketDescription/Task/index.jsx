import { Form, Modal, Stack } from "react-bootstrap";
import HeadingWithTooltipDown from "../../../../HeadingWithTooltipDown";
import TextEditor from "../../../../TextEditor";
import style from "../styles.module.css";
import Steps from "../../Steps";

export default function Task({ activeStep, setTicketDescription, ticketDescription, outcome, setOutcome }) {
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
            <HeadingWithTooltipDown tooltip='Expected Outcome' title='Expected Outcome' />
          </Form.Label>
          <TextEditor limit='3000' value={outcome} setValue={setOutcome} />
        </Form.Group>
      </Stack>
    </Modal.Body>
  );
}
