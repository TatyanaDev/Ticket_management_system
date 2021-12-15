import { useNavigate } from "react-router-dom";
import { Formik } from "formik";
import cn from "classnames";
import * as Yup from "yup";
import UserAuthorizationForm from "../../Components/UserAuthorizationForm";
import logo from "../../icons/Logo.svg";
import style from "./styles.module.css";

export default function Login() {
  const navigate = useNavigate();

  const initialValues = {
    email: "",
    password: "",
    checked: false,
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().trim().email('Must contain @ and "."').required("Email is required"),
    password: Yup.string().trim().min(6, "Password has to be longer than 6 characters!").required("Password is required!"),
    checked: Yup.boolean(),
  });

  const checkUser = async (values, formikBag) => {
    try {
      navigate("/dashboard");
    } catch (err) {}
  };

  return (
    <section className={style.wrapper}>
      <article className={cn(style.container, "container")}>
        <article className={style.wrapper_logo}>
          <img className={style.logo} src={logo} alt='shoplab' />
          <article className={style.wrapper_form}>
            <h1 className={style.heading}>Welcome to</h1>
            <h2 className={style.sub_heading}>Shoplab ticketing system</h2>
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={checkUser} children={UserAuthorizationForm} />
          </article>
        </article>
      </article>
    </section>
  );
}
