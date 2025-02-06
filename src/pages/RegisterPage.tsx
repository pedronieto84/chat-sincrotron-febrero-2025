import { Link } from "react-router-dom";
import LoginComponent from "../components/LoginComponent";
import { FormValues } from "../types/globalTypes";

function RegisterPage() {
  const formSubmitted = (response: FormValues) => {
    console.log('capturo desde register page el response', response);
}
  return (
    <>
      <h1>Register Page</h1>
      <LoginComponent
        formSubmitted={formSubmitted}
        type={"register"}
       />
      <Link className="nav-link btn" to="/">Ya tengo  cuenta</Link>
    </>
  );
}

export default RegisterPage;
