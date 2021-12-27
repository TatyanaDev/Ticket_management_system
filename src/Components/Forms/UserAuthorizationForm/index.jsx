import { Button, Container, Row, Col, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { Formik } from "formik";

import * as Yup from "yup";
import style from "../styles.module.css";

export default function UserAuthorizationForm({ margin }) {
  const navigate = useNavigate();

  const validationSchema = Yup.object().shape({
    email: Yup.string().trim().email('Must contain @ and "."').required("Email is required!"),
    password: Yup.string().trim().min(6, "Password has to be longer than 6 characters!").required("Password is required!"),
    rememberMe: Yup.boolean(),
  });

  const initialValues = {
    email: "",
    password: "",
    rememberMe: false,
  };

  const checkUser = async (values, formikBag) => {
    console.log(values);
    formikBag.resetForm();
    navigate("/dashboard");
    try {
    } catch (err) {}
  };

  return (
    <>
      <Formik validationSchema={validationSchema} onSubmit={checkUser} initialValues={initialValues}>
        {({ handleSubmit, handleChange, values, touched, errors }) => (
          <Form noValidate onSubmit={handleSubmit}>
            <Row>
              <Form.Group as={Col} className='p-0'>
                <Form.Label className='mb-0' style={{ color: "#6c757d" }}>
                  Email
                </Form.Label>
                <Form.Control className={style.input} type='text' name='email' value={values.email} onChange={handleChange} isValid={touched.email && !errors.email} isInvalid={errors.email} />
                <Form.Control.Feedback className='p-0' type='invalid' tooltip>
                  {errors.email}
                </Form.Control.Feedback>
              </Form.Group>
            </Row>

            <Row>
              <Form.Group as={Col} className='p-0'>
                <Form.Label className='mb-0' style={{ color: "#6c757d" }}>
                  Password
                </Form.Label>
                <Form.Control className={style.input} type='password' name='password' value={values.password} onChange={handleChange} isValid={touched.password && !errors.password} isInvalid={errors.password} />
                <Form.Control.Feedback className='p-0' type='invalid' tooltip>
                  {errors.password}
                </Form.Control.Feedback>
              </Form.Group>
            </Row>

            <Row>
              <Col>
                <Form.Group>
                  <Form.Check className={style.remember_me} name='rememberMe' label='Remember me' onChange={handleChange} />
                </Form.Group>
              </Col>

              <Col style={{ textAlign: "end" }}>
                <Link className={style.link_forgot_password} to='/login'>
                  Forgot Password?
                </Link>
              </Col>
            </Row>

            <Row className={margin} style={{ width: 350 }}>
              <Button className={style.button} type='submit'>
                Login
              </Button>
            </Row>
          </Form>
        )}
      </Formik>

      <Container>
        <Row>
          <Col className={style.before_link} xxl={7}>
            Dont have an account?
          </Col>

          <Col className='p-0' style={{ textAlign: "start" }}>
            <Link className={style.link_login} to='/'>
              Join free today
            </Link>
          </Col>
        </Row>
      </Container>
    </>
  );
}
