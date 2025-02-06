import { useState } from "react";

function ChatComponent() {

    const [messages, setMessages] = useState([]); // Almacena los mensajes
    const [inputText, setInputText] = useState(""); // Almacena el texto del input
  
    // Función para manejar el envío de mensajes
    const handleSendMessage = () => {
        console.log('handleSendMessage', inputText);
      if (inputText.trim() !== "") {
        setMessages([...messages, { text: inputText, sender: "user" }]);
        setInputText(""); // Limpiar el input después de enviar
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
          >
            {/* Mostrar mensajes */}
            {messages.map((message, index) => (
              <div
                key={index}
                className={`d-flex justify-content-${
                  message.sender === "user" ? "end" : "start"
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
              <button
                className="btn btn-primary"
                onClick={handleSendMessage}
              >
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