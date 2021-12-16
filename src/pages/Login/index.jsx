import UserAuthorizationForm from "../../Components/Forms/UserAuthorizationForm";
import { wrapper_form, wrapper_button } from "./styles.module.css";
import BackgroundOfForms from "../../Components/BackgroundOfForms";

export default function Login() {
  return <BackgroundOfForms form={<UserAuthorizationForm margin={wrapper_button} />} padding={wrapper_form} />;
}
