
import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";

const ActionProvider = ({createChatBotMessage,setState,children}) =>{
  const handleHello = ()=>{
    const botMessage = createChatBotMessage('Hello, Nice to meet you.')
    setState((prev)=>({
      ...prev,
      messages : [...prev.messages,botMessage]
    }))
  }
  const handleNull = ()=>{
    const botMessage = createChatBotMessage("Please enter a specific scheme category you want to know about.");
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  }
  return (
    <div>
      {
        React.Children.map(children,(child)=>{
          return React.cloneElement(child,{
            actions : {handleHello,handleNull}
          })
        })
      }
    </div>
  )
};
  
  export default ActionProvider;
  