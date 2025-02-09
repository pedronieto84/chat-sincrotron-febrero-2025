import { useState, useEffect, useRef } from "react";
import { Message, handleMessageFunction } from "./../types/globalTypes";
import { auth, db } from "./../hooks/firebaseConfig";
import {collection, onSnapshot, query, orderBy} from "firebase/firestore";
import {useParams} from "react-router-dom";

function ChatComponent({ handleConexionMessage }: { handleConexionMessage: handleMessageFunction }) {

  const { id } = useParams();
  const [messages, setMessages] = useState<Message[]>([]); // Almacena los mensajes
  const [inputText, setInputText] = useState<string>(""); // Almacena el texto del input

  const chatContainerRef = useRef(null) as any

  // Función para manejar el envío de mensajes
  const handleSendMessage = () => {
    console.log("handleSendMessage", inputText);
    if (inputText.trim() !== "") {
      // El mensaje
      const mensajeActual = {
        text: inputText,
        sender: auth.currentUser?.uid as string,
        date: new Date().getTime(),
      };
      
      handleConexionMessage(mensajeActual);
      setInputText(""); // Limpiar el input después de enviar

      // Hacer el scroll down

      if (chatContainerRef.current) {
        chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
      }
    }
  };


// UseEffect que va a a escuhar los cambios en los mensajes

useEffect(() => {

// Creo el observable
 // Referencia a la colección "chats/id/chatroom"

 // Preparo la sintaxis para hacer una query que ordene por el campo date
 // Crear la consulta con `orderBy` para ordenar por fecha
 
 const chatRoomCollection = collection(db, `/chats/${id}/chatroom` );
 const conversationQuery = query(chatRoomCollection, orderBy("date", "asc")); 

 // Query 

 // Suscribirse a los cambios en Firestore
 const unsubscribe = onSnapshot(conversationQuery, (snapshot) => {

   const conversationMessages = snapshot.docs.map((doc) => ({
       ...doc.data(),
   }));

   setMessages(conversationMessages as Message[]);
   console.log('conversation messages', conversationMessages);

 })
     
  
return () => {unsubscribe()}

},[messages])


  return (
    <>
      <h1>CHatCOmponent</h1>

      <div className="container mt-5">
        <div className="card">
          <div className="card-header bg-primary text-white">Chat</div>
          <div
            className="card-body"
            style={{ height: "400px", overflowY: "scroll" }}
            ref={chatContainerRef}
          >
            {/* Mostrar mensajes */}
            {messages && messages.map((message, index) => (
              <div
                key={index}
                className={`d-flex justify-content-${
                  (message.sender === auth.currentUser?.uid)? "end" : "start"
                } mb-2`}
              >
                <div
                  className={`alert ${
                    message.sender === "user"
                      ? "alert-primary"
                      : "alert-secondary"
                  }`}
                  style={{ maxWidth: "70%" }}
                >
                  {message.text}
                </div>
              </div>
            ))}
          </div>
          <div className="card-footer">
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Escribe un mensaje..."
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
              />
              <button className="btn btn-primary" onClick={handleSendMessage}>
                Enviar
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ChatComponent;
