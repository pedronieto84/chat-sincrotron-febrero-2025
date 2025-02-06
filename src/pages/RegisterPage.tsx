import { Link } from "react-router-dom";
import LoginComponent from "../components/LoginComponent";

function RegisterPage() {
  const formSubmitted = (response) => {
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
