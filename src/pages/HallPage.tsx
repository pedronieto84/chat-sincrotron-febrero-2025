import { useEffect } from 'react';
import { Link } from 'react-router-dom'
import { auth } from '../hooks/firebaseConfig';

import { fetchUsersObservable } from '../store/actions';

import { IStore } from '../types/globalTypes';
import { getIdOfChatRoomFromIds } from '../hooks/getIdOfChatRoomFromIds';
import { useDispatch, useSelector } from 'react-redux';

function HallPage() {

    const dispatch = useDispatch()

    const users = useSelector((state:IStore) => state.users);


    useEffect(() => {
     
      const unsubscribe = dispatch(fetchUsersObservable() as any);
 
         // Cleanup: Desuscribirse al desmontar el componente
         return () => {
          if(unsubscribe) {
            console.log('me he UNSUBSCRIBED', unsubscribe);
            unsubscribe();
          }
         }
    }, [dispatch])

    const logout = async () => {
        console.log('logout')
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
            <a href="/" onClick={logout}>
              Salir
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default HallPage;
