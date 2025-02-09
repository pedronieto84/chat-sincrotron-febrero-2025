import ChatComponent from "../components/ChatComponent";
import{ useParams} from "react-router-dom"
import { Message } from "../types/globalTypes";
import {db} from '../hooks/firebaseConfig';
import { collection, addDoc } from "firebase/firestore";
import { handleMessageFunction } from "../types/globalTypes";




function ChatPage() {

    const {id} = useParams();

    

    const handleSendMessage: handleMessageFunction = async (message:Message) => {
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