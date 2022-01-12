import { Col, Form, Modal, Stack } from "react-bootstrap";
import HeadingWithTooltipDown from "../../../../HeadingWithTooltipDown";
import FormikSelect from "../../../../FormikSelect";
import FormikInput from "../../../../FormikInput";
import PriorityRange from "../../PriorityRange";
import style from "./styles.module.css";
import Steps from "../../Steps";

export default function BodyTicketInfo({ activeStep, formik, priority, setPriority }) {
  return (
    <Modal.Body className='p-0' style={{ marginBottom: 42 }}>
      <Steps activeStep={activeStep} />
      <Stack gap={2}>
        <Form.Label className={style.label}>
          <HeadingWithTooltipDown tooltip='What is your ticket type?' title='Ticket Type' />
        </Form.Label>
        <FormikSelect
          name='type'
          formik={formik}
          placeholder='What is your ticket type?'
          options={[
            { id: 1, value: "Design ticket" },
            { id: 2, value: "Take action" },
          ]}
        />
        <FormikInput name='title' type='text' placeholder='Ticket Title' formik={formik} label='Ticket Title' limit='30' />
        <PriorityRange priority={priority} setPriority={setPriority} />
        <Col className={style.description}>
          <span className={style.bold}>Note:</span>
          Choosing higher priority may require additional amount in payment.
        </Col>
      </Stack>
    </Modal.Body>
  );
}
