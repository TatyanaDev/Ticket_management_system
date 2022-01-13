import { Form } from "react-bootstrap";
import cn from "classnames";
import style from "./styles.module.css";

export default function FormikSelect({ name, formik, placeholder, options, onChange = () => {} }) {
  const handleOnChange = (e) => {
    formik.getFieldProps(name).onChange(e);
    onChange();
  };

  return (
    <Form.Select name={name} className={cn(style.select, formik.values[name] && style.selected)} isValid={formik.touched[name] && !formik.errors[name]} isInvalid={formik.touched[name] && formik.errors[name]} {...formik.getFieldProps(name)} onChange={handleOnChange}>
      <option value=''>{placeholder}</option>
      {options.map((option) => (
        <option key={option.id} value={option.value}>
          {option.value}
        </option>
      ))}
    </Form.Select>
  );
}
