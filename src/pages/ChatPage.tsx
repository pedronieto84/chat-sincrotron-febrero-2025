import ChatComponent from "../components/ChatComponent";
import{ useParams} from "react-router-dom"
import { Message } from "../types/globalTypes";


function ChatPage() {

    const handleSendMessage = (message:Message) => {
        console.log('capturo el mensaje del hijo desde el padre', message );
    }

    // UseEffect tiene que cargar mensajes y inseratarlos

    const {id} = useParams();
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