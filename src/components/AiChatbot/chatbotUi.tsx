import { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import Loading from "./loading";
import ChatHistory from "./chathistory";

function ChatBot() {
  
    const [userInput, setUserInput] = useState("");
    const [chatHistory, setChatHistory] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
  
    // inislize your Gemeni Api
    const genAI = new GoogleGenerativeAI(
      "AIzaSyAvnQXbcnWGIhu5YCHGnfC1-ISzkV-vMdY"
    );
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
  
    // Function to handle user input
    const handleUserInput = (e) => {
      setUserInput(e.target.value);
    };
  
    const something = async ( userMessage: string, botMessage: string) => {
      try {
        // add Gemeni's response to the chat history
        setChatHistory([
          ...chatHistory,
          { type: "user", message: userMessage },
          { type: "bot", message:  botMessage },
        ]);
      } catch {
        console.error("Error sending message");
      } finally {
        setUserInput("");
        setIsLoading(false);
      }
    }
    // Function to send user message to Gemini
    const sendMessage = async () => {
      if (userInput.trim() === "") return;
  
      setIsLoading(true);
       // call Gemini Api to get a response
       const result = await model.generateContent(userInput);
       const response = await result.response;
       console.log(response);
       
       const target_cmd = "do me a solid";
       const shouldSendToApi = userInput.toLowerCase() === target_cmd; // Case-insensitive check
       const target_msg = "message not sent";
       const model_msg = response.text();

       if(!shouldSendToApi){
        something( userInput, model_msg);
       }
       else{
        //if user input is "do me a solid" - run other script
        something( target_cmd, target_msg);
       }
    };
  
    // Function to clear the chat history
    const clearChat = () => {
      setChatHistory([]);
    };
  
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-4">Chatbot</h1>
  
        <div className="chat-container rounded-lg shadow-md p-4">
          <ChatHistory chatHistory={chatHistory} />
          <Loading isLoading={isLoading} />
        </div>
  
        <div className="flex mt-4">
          <input
            type="text"
            className="flex-grow px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Type your message..."
            value={userInput}
            onChange={handleUserInput}
          />
          <button
            className="px-4 py-2 ml-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 focus:outline-none"
            onClick={sendMessage}
            disabled={isLoading}
          >
            Send
          </button>
        </div>
        <button
          className="mt-4 block px-4 py-2 rounded-lg bg-gray-400 text-white hover:bg-gray-500 focus:outline-none"
          onClick={clearChat}
        >
          Clear Chat
        </button>
      </div>
    );
  };

export default ChatBot;