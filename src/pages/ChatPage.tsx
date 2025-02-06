import ChatComponent from "../components/ChatComponent";
import{ useParams} from "react-router-dom"
import { Message } from "../types/globalTypes";
import {db, auth} from '../hooks/firebaseConfig';
import { collection, onSnapshot, addDoc,  doc, setDoc, increment, orderBy, query  } from "firebase/firestore";




function ChatPage() {

    const {id} = useParams();

    const handleSendMessage = async (message:Message) => {
        console.log('capturo el mensaje del hijo desde el padre', message );
        // Insercion del mensaje en la base de datos


        await addDoc(collection(db, `chats/${id}/chatroom`), message);
            //const docRef = doc(db, "stats", 'globalStats');
    }

    // UseEffect tiene que cargar mensajes y inseratarlos

    
    return (

        <>
        <h1>{id}</h1>
        <ChatComponent
        handleConexionMessage={handleSendMessage}
        />
      </>
      )
}

export default ChatPage;