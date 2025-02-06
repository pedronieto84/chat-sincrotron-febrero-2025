import { Link } from "react-router-dom";
import LoginComponent from "../components/LoginComponent";
import { FormValues } from "../types/globalTypes";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../hooks/firebaseConfig";

function RegisterPage() {
  
  const formSubmitted = async (response: FormValues) => {

    const userRegistered = await createUserWithEmailAndPassword(auth, response.email, response.password);
    console.log('capturo desde register page el response', userRegistered.user.uid);
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
