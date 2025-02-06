import { Link } from "react-router-dom";
import LoginComponent from "../components/LoginComponent";
import { FormValues } from "../types/globalTypes";
import { auth } from "./../hooks/firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";



function LoginPage() {

    const formSubmitted = async (response: FormValues) => {

        const userCredential = await signInWithEmailAndPassword(auth, response.email, response.password);
        console.log("User logged in:", userCredential.user.uid);
        // Crear un usuario en firebase AUthentication

        console.log('capturo desde login page el response', response);
    }
  return (
    <>
    <h1>LOGIN PAGE</h1>
      <LoginComponent formSubmitted={formSubmitted} type={'login'} />
      <Link className="nav-link btn" to="/register">Crear cuenta</Link>
      
    </>
  );
}

export default LoginPage;
