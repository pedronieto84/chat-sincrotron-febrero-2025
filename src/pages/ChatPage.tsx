import ChatComponent from "../components/ChatComponent";
import { useParams } from "react-router-dom"
import { IStore, Message } from "../types/globalTypes";
import { db } from '../hooks/firebaseConfig';
import { collection, addDoc } from "firebase/firestore";
import { handleMessageFunction } from "../types/globalTypes";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMessagesObservable } from '../store/actions';



function ChatPage() {

    const { id } = useParams()
    const dispatch = useDispatch()
    const messages = useSelector((state: IStore) => state.messages)

    const handleSendMessage: handleMessageFunction = async (message: Message) => {
        console.log('capturo el mensaje del hijo desde el padre', message);
        // Insercion del mensaje en la base de datos
        await addDoc(collection(db, `chats/${id}/chatroom`), message);
    }

    useEffect(() => {
        const unsubscribe = dispatch(fetchMessagesObservable(id as string) as any);
        // Cleanup: Desuscribirse al desmontar el componente
        return () => {
            if (unsubscribe) {
                console.log('me he UNSUBSCRIBED', unsubscribe);
                unsubscribe();
            }
        }
    }, [dispatch, id])


    return (

        <>
            <h1>{id}</h1>
            <ChatComponent
                handleConexionMessage={handleSendMessage}
                messages={messages}
            />
        </>
    )
}

export default ChatPage;