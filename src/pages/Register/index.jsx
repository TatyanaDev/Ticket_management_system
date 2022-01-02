import UserRegistrationForm from "../../Components/BackgroundOfForms/Forms/UserRegistrationForm";
import BackgroundOfForms from "../../Components/BackgroundOfForms";
import { wrapper_form, wrapper_button } from "./styles.module.css";

export default function Register() {
  return <BackgroundOfForms form={<UserRegistrationForm margin={wrapper_button} />} padding={wrapper_form} />;
}
