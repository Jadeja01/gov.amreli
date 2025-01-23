
import React from "react";

const MessageParser =({children,actions})=>{
  const parse = (message)=>{
    if(message.includes("")){
      actions.handleNull()
    }
    if(message.includes('Hello')){
      actions.handleHello();
      console.log('Hi');
      
    }
    console.log(message);
  }
  return (
    <div>
      {
        React.Children.map(children,(child)=>{
          return React.cloneElement(child,{
            parse : parse,
            actions : {}
          })
        })
      }
    </div>
  )
}
  
  export default MessageParser;