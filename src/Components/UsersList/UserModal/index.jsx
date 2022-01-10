import { Button, Col, Form, Modal } from "react-bootstrap";
import { Formik } from "formik";
import cn from "classnames";
import * as Yup from "yup";
import style from "./styles.module.css";
import FormItem from "./FormItem";

export default function UserModal({ show, handleClose, title, userRole = "", userEmail = "", userFirstName = "", userLastName = "" }) {
  const validationSchema = Yup.object().shape({
    role: Yup.string().required("Role is required"),
    email: Yup.string().trim().email('Must contain @ and "."').required("Email is required"),
    firstName: Yup.string().trim().max(30, "First Name must not be more than 30 characters long!").required("First Name is required!"),
    lastName: Yup.string().trim().max(30, "Last Name must not be more than 30 characters long!").required("Last Name is required!"),
  });

  const initialValues = {
    role: userRole,
    email: userEmail,
    firstName: userFirstName,
    lastName: userLastName,
  };

  const onSubmit = (values) => {
    console.log(values);
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton className='p-4 m-2 align-items-start border-bottom-0'>
        <Modal.Title className={style.title}>
          {title}
          <Col className={style.subtitle}>To invite new user, enter the email below.</Col>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className='p-4 m-2 pt-0 mt-0'>
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
          {(formik) => (
            <Form noValidate onSubmit={formik.handleSubmit}>
              <Form.Label className={style.label}>Role</Form.Label>
              <Form.Select name='role' className={cn("mb-2", style.select, formik.values.role && style.selected)} isValid={formik.touched.role && !formik.errors.role} isInvalid={formik.touched.role && formik.errors.role} {...formik.getFieldProps("role")}>
                <option>Please select a role</option>
                <option value='Approver'>Approver</option>
                <option value='Client'>Client</option>
                <option value='Moderator'>Moderator</option>
                <option value='Admin'>Admin</option>
                <option value='Global admin'>Global admin</option>
              </Form.Select>
              <FormItem name='email' type='email' placeholder='Please enter valid email' formik={formik} label='Email' />
              <FormItem name='firstName' type='text' placeholder='First Name' formik={formik} label='First Name' limit='30' />
              <FormItem name='lastName' type='text' placeholder='Last Name' formik={formik} label='Last Name' limit='30' />
              <Col className='d-flex flex-nowrap pt-4'>
                <Button variant='outline-primary' className={cn("w-100 me-3 text-uppercase", style.button_outline)} onClick={handleClose}>
                  Cancel
                </Button>
                <Button variant='primary' type='submit' className={cn("w-100 text-uppercase", style.button_primary)}>
                  Invite
                </Button>
              </Col>
            </Form>
          )}
        </Formik>
      </Modal.Body>
    </Modal>
  );
}
