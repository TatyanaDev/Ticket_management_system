import { Col, Form } from "react-bootstrap";
import style from "./styles.module.css";

export default function FormItem({ label, placeholder, type, name, formik }) {
  return (
    <Form.Group as={Col} className='mb-3 ps-3 pe-3'>
      <Form.Label className={style.label}>{label}</Form.Label>
      <Form.Control name={name} type={type} placeholder={placeholder} className={style.input} isInvalid={formik.touched[name] && formik.errors[name]} {...formik.getFieldProps(name)} />
      {formik.touched[name] && formik.errors[name] && <Form.Control.Feedback type='invalid'>{formik.errors[name]}</Form.Control.Feedback>}
    </Form.Group>
  );
}
