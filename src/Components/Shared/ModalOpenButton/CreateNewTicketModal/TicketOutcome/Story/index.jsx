import { Form, Modal, Stack } from "react-bootstrap";
import HeadingWithTooltipDown from "../../../../HeadingWithTooltipDown";
import TextEditor from "../../../../TextEditor";
import style from "../styles.module.css";
import Loader from "../Loader";
import Steps from "../../Steps";

export default function Story({ activeStep, outcome, setOutcome, resources, setResources, files, setFiles }) {
  return (
    <Modal.Body className='p-0' style={{ marginBottom: 42 }}>
      <Steps activeStep={activeStep} />
      <Stack gap={2}>
        <Form.Group className='mb-2'>
          <Form.Label className={style.label} htmlFor='expected_outcome'>
            <HeadingWithTooltipDown tooltip='Expected Outcome' title='Expected Outcome' />
          </Form.Label>
          <TextEditor limit='3000' value={outcome} setValue={setOutcome} />
        </Form.Group>

        <Form.Group className='mb-2'>
          <Form.Label className={style.label}>
            <HeadingWithTooltipDown tooltip='Resources' title='Resources' />
          </Form.Label>
          <Form.Control type='text' placeholder='Please provide link to the source file if any.' className={style.input} value={resources} onChange={(e) => setResources(e.target.value)} />
        </Form.Group>

        <Loader files={files} setFiles={setFiles} />
      </Stack>
    </Modal.Body>
  );
}
