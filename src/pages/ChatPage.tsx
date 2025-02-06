import ChatComponent from "../components/ChatComponent";
import{ useParams} from "react-router-dom"


function ChatPage() {

    const {id} = useParams();
    return (

        <>
        <h1>{id}</h1>
        <ChatComponent />
      </>)
}

export default ChatPage;