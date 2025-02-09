import { useState, useRef } from "react";
import { Message, handleMessageFunction } from "./../types/globalTypes";
import { auth } from "./../hooks/firebaseConfig";


function ChatComponent({ handleConexionMessage, messages }: { handleConexionMessage: handleMessageFunction, messages: Message[] }) {


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
