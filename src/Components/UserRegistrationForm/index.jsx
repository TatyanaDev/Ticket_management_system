import { Link } from "react-router-dom";
import { Form, Field } from "formik";
import style from "./styles.module.css";

export default function UserRegistrationForm({ errors, touched }) {
  return (
    <Form>
      <article className={style.input_container}>
        <label className={style.label}>Email </label>
        <Field className={style.input} name='email' autoFocus={true} />
        {errors.email && touched.email && <p className={style.error}>{errors.email}</p>}
      </article>

      <article className={style.input_container}>
        <label className={style.label}>Create Password </label>
        <Field className={style.input} name='createPassword' type='password' />
        {errors.createPassword && touched.createPassword && <p className={style.error}>{errors.createPassword}</p>}
      </article>

      <article className={style.input_container}>
        <label className={style.label}>Repeat Password</label>
        <Field className={style.input} name='repeatPassword' type='password' />
        {errors.repeatPassword && touched.repeatPassword && <p className={style.error}>{errors.repeatPassword}</p>}
      </article>

      <nav>
        <ul>
          <li>
            <button className={style.button} type='submit'>
              Create account
            </button>
          </li>
          <li className={style.wrapper_link_login}>
            <span>Already have an account? </span>
            <Link className={style.link_login} to='/login'>
              Login here
            </Link>
          </li>
        </ul>
      </nav>
    </Form>
  );
}
