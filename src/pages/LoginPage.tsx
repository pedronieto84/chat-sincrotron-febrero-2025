import { Link, useNavigate } from "react-router-dom";
import LoginComponent from "../components/LoginComponent";
import { FormValues } from "../types/globalTypes";
import { auth } from "./../hooks/firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from "react-redux";
import { login } from "./../store/actions";



function LoginPage() {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const formSubmitted = async (response: FormValues) => {

        const userCredential = await signInWithEmailAndPassword(auth, response.email, response.password);
                
        if(userCredential.user.uid){
          // Aqui debo "dispatch" la accion LOGIN
          dispatch( login({email: response.email, id: userCredential.user.uid}) );
          navigate('/hall');
          return
        }
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
