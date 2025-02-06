import ChatComponent from "../components/ChatComponent";
import{ useParams} from "react-router-dom"
import { Message } from "../types/globalTypes";


function ChatPage() {

    const {id} = useParams();
    return (

        <>
        <h1>{id}</h1>
        <ChatComponent />
      </>
      )
}

export default ChatPage;