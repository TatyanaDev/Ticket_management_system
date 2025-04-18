import { Col, Form, Row } from "react-bootstrap";
import cn from "classnames";
import style from "../styles.module.css";

export default function FormItem({ label, placeholder, type, name, formik, limit = null }) {
  return (
    <Form.Group className='mb-2'>
      <Form.Label className={style.label} htmlFor={name}>
        {label}
      </Form.Label>
      <Form.Control name={name} type={type} placeholder={placeholder} className={cn("mb-1", style.input)} isValid={formik.touched[name] && !formik.errors[name]} isInvalid={formik.touched[name] && formik.errors[name]} {...formik.getFieldProps(name)} />
      <Row className='flex-nowrap'>
        {formik.touched[name] && formik.errors[name] && (
          <Form.Control.Feedback type='invalid' className='flex-shrink-1 d-block'>
            {formik.errors[name]}
          </Form.Control.Feedback>
        )}
        {limit && (
          <Col className={cn("text-end", style.text)}>
            {formik.values[name].length}/{limit}
          </Col>
        )}
      </Row>
    </Form.Group>
  );
}
