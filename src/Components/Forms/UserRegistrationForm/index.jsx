import { Button, Container, Row, Col, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Formik } from "formik";
import cn from "classnames";
import * as Yup from "yup";
import style from "../styles.module.css";

export default function UserRegistrationForm({ margin }) {
  const validationSchema = Yup.object().shape({
    email: Yup.string().trim().email('Must contain @ and "."').required("Email is required"),
    createPassword: Yup.string().trim().min(6, "Password has to be longer than 6 characters!").required("Create password is required!"),
    repeatPassword: Yup.string()
      .trim()
      .oneOf([Yup.ref("createPassword")], "Passwords are not the same!")
      .required("Repeat password is required!"),
  });

  const initialValues = {
    email: "",
    createPassword: "",
    repeatPassword: "",
  };

  const createUser = async (values, formikBag) => {
    console.log(values);
    formikBag.resetForm();
    try {
    } catch (err) {}
  };

  return (
    <>
      <Formik validationSchema={validationSchema} onSubmit={createUser} initialValues={initialValues}>
        {({ handleSubmit, handleChange, values, touched, errors }) => (
          <Form noValidate onSubmit={handleSubmit}>
            <Row>
              <Form.Group as={Col} className={style.input_container}>
                <Form.Label className={style.label}>Email</Form.Label>
                <Form.Control className={style.input} type='text' name='email' value={values.email} onChange={handleChange} isValid={touched.email && !errors.email} isInvalid={errors.email} />
                <Form.Control.Feedback type='invalid' tooltip>
                  {errors.email}
                </Form.Control.Feedback>
              </Form.Group>
            </Row>

            <Row>
              <Form.Group as={Col} className={style.input_container}>
                <Form.Label className={style.label}>Create Password </Form.Label>
                <Form.Control className={style.input} type='password' name='createPassword' value={values.createPassword} onChange={handleChange} isValid={touched.createPassword && !errors.createPassword} isInvalid={errors.createPassword} />
                <Form.Control.Feedback type='invalid' tooltip>
                  {errors.createPassword}
                </Form.Control.Feedback>
              </Form.Group>
            </Row>

            <Row>
              <Form.Group as={Col} className={style.input_container}>
                <Form.Label className={style.label}>Repeat Password</Form.Label>
                <Form.Control className={style.input} type='password' name='repeatPassword' value={values.repeatPassword} onChange={handleChange} isValid={touched.repeatPassword && !errors.repeatPassword} isInvalid={errors.repeatPassword} />
                <Form.Control.Feedback type='invalid' tooltip>
                  {errors.repeatPassword}
                </Form.Control.Feedback>
              </Form.Group>
            </Row>

            <Row className={cn(style.wrapper_button, margin)}>
              <Button className={style.button} type='submit'>
                Create account
              </Button>
            </Row>
          </Form>
        )}
      </Formik>

      <Container>
        <Row>
          <Col className={style.before_link} xxl={8}>
            Already have an account?
          </Col>

          <Col className={style.wrapper_link_login}>
            <Link className={style.link_login} to='/login'>
              Login here
            </Link>
          </Col>
        </Row>
      </Container>
    </>
  );
}
