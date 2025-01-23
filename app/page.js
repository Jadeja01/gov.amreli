"use client"
import ActionProvider from "@/(components)/bot/actionprovider";
import botConfig from "@/(components)/bot/botconfig";
import MessageParser from "@/(components)/bot/messageparser";
import Chatbot from "react-chatbot-kit";
import "../(components)/bot/chatbot.css"
import "react-chatbot-kit/build/main.css";

export default function Home() {
  return (
    <div style={{maxWidth: "50%", margin: "auto"}}>
        <Chatbot config={botConfig} messageParser={MessageParser} actionProvider={ActionProvider}/>
    </div>
  );
}