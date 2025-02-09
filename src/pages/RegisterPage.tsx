import { Link, useNavigate } from "react-router-dom";
import LoginComponent from "../components/LoginComponent";
import { FormValues } from "../types/globalTypes";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../hooks/firebaseConfig";
import { doc, setDoc } from "firebase/firestore";
import { User } from "../types/globalTypes";
// Imports para redux
import { useDispatch } from "react-redux";
import { register } from "./../store/actions";

function RegisterPage() {

  const navigate = useNavigate();
  const dispatch = useDispatch(); // Instancio el dispatch
  
  const formSubmitted = async (response: FormValues) => {

    // Creo el usuario con firebase auth
    const userRegistered = await createUserWithEmailAndPassword(auth, response.email, response.password);
    
    // Creo el objeto que voy  a insertar
    const user: User = {id: userRegistered.user.uid, email: userRegistered.user.email as string};
    
    // Insertar el objeto en la BBDD
    await setDoc(doc(db, "users", user.id ), { 
      email: response.email, id: user.id 
    });

    // Navegar a hall page
    if(userRegistered.user.uid){
      // Navego alHall
      // Una vez registrado, debo "dispatch" la accion REGISTER
      dispatch( register(user) );
      navigate('/hall');
      return
    }
    // navego a RegisterPage
    navigate('/register');

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
