import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import { auth } from '../hooks/firebaseConfig';

import { fetchUsersObservable } from '../store/actions';

import { User } from '../types/globalTypes';
import { getIdOfChatRoomFromIds } from '../hooks/getIdOfChatRoomFromIds';
import { useDispatch } from 'react-redux';

function HallPage() {

    const dispatch = useDispatch()

    const [users] = useState<User[]>([]);


    useEffect(() => {
     
      const unsubscribe = dispatch(fetchUsersObservable());
 
         // Cleanup: Desuscribirse al desmontar el componente
         return () => {
          if(unsubscribe) {
            console.log('me he UNSUBSCRIBED', unsubscribe);
            unsubscribe();
          }
         }
    }, [dispatch])

    const handleButtonClick = async () => {
        console.log('handle')
      };

 
  
  return (
    <>
      <div className="d-flex justify-content-center align-items-center">
        <div className="container">
          <ul className="list-group">
            {users && users.map((user) => (
              <li key={user.id} className="list-group-item">
                <Link
                  to={`/chat-room/${getIdOfChatRoomFromIds(auth.currentUser?.uid as string, user.id)}`}
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
