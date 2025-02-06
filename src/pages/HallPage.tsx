import { useEffect } from 'react';
import { Link } from 'react-router-dom'
import { auth, db } from '../hooks/firebaseConfig';
import { collection,  onSnapshot } from "firebase/firestore";

function HallPage() {


    useEffect(() => {
         // Referencia a la colección "users"
         const usersCollection = collection(db, "users");

         // Suscribirse a los cambios en Firestore
         const unsubscribe = onSnapshot(usersCollection, (snapshot) => {
             const usersData = snapshot.docs.map((doc) => ({
                 id: doc.id,
                 ...doc.data(),
             }));
             const quitoMiUsuario = usersData.filter((user) => user.id !== auth.currentUser?.uid);
             console.log('curr user', quitoMiUsuario);
             //setLoading(false);
             //setUsers(quitoMiUsuario);
             
         });
 
         // Cleanup: Desuscribirse al desmontar el componente
         return () => unsubscribe();
    }, [])

    const handleButtonClick = async () => {
        console.log('handle')
      };

    const users = [
        {
        id: 1,
        email: "asdfasfd"
}]
  
  return (
    <>
      <div className="d-flex justify-content-center align-items-center">
        <div className="container">
          <ul className="list-group">
            {users && users.map((user) => (
              <li key={user.id} className="list-group-item">
                <Link
                  to={`/chat-room/${user.id}`}
                >
                  {user.email}
                </Link>
              </li>
            ))}
          </ul>
          <div className="d-flex justify-content-center mt-3">
            <a href="/" onClick={handleButtonClick}>
              Salir
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default HallPage;
