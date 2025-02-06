import { Link, useNavigate } from "react-router-dom";
import LoginComponent from "../components/LoginComponent";
import { FormValues } from "../types/globalTypes";
import { auth } from "./../hooks/firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";



function LoginPage() {

    const navigate = useNavigate();

    const formSubmitted = async (response: FormValues) => {

        const userCredential = await signInWithEmailAndPassword(auth, response.email, response.password);
        console.log("User logged in:", userCredential.user.uid);
        
        if(userCredential.user.uid){
          // Navego alHall
          console.log('tengo el uid', userCredential.user.uid);
          navigate('/hall');
          return
        }
        // navego a RegisterPage
        navigate('/register');
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
