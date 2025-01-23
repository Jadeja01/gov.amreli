
import { createChatBotMessage } from "react-chatbot-kit";
import getSchemeDetails from "./amrelischemes.js";

const botConfig = {
  botName: "AmreliBot",
  initialMessages: [createChatBotMessage("Welcome! Ask me about government schemes.")],
  customStyles: {
    botMessageBox: {
      backgroundColor: "#376B7E",
      borderRadius: "10px",
      color: "#fff",
      padding: "10px",
    },
    chatButton: {
      backgroundColor: "#5ccc9d",
      borderRadius: "50%",
      color: "#fff",
      padding: "10px"
    },
  },
  state: {
    schemes: getSchemeDetails,
  },
  widgets: [
    {
      widgetName: "schemeResponse",
      widgetFunc: (props) => {
        const response = props.state && props.state.schemes 
          ? props.state.schemes(props.message.toLowerCase()) 
          : "No scheme details available";
        return <div>{response}</div>;
      },
    },
  ],
};
export default botConfig;
