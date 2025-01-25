"use client"
import "./globals.css";
import { useState } from "react";

export default function Home() {
  const [chatVisible, setChatVisible] = useState(false);

  const toggleChat = () => {
    setChatVisible(!chatVisible);
  };

  return (
    <div className="container mt-5">
      <header className="text-center mb-4">
        <h1 className="display-4">Government Scheme Information</h1>
        <p className="lead">
          Discover the latest government schemes and get personalized assistance
          through our chatbot.
        </p>
      </header>

      <div className="text-center">
      <button
          className="btn btn-primary btn-lg d-flex align-items-center justify-content-center gap-2"
          style={{ borderRadius: "50px", padding: "10px 20px", fontSize: "18px", boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1),",cursor:"pointer" }}
          onClick={toggleChat}
        >
          {/* <span className="material-icons" style={{ fontSize: "24px" }}>
            chat
          </span> */}
          {chatVisible ? "Close Chat" : "Chat with our Bot"}
        </button>
      </div>

      {chatVisible && (
        <div className="chat-container mt-4">
          <iframe
            src="https://cdn.botpress.cloud/webchat/v2.2/shareable.html?configUrl=https://files.bpcontent.cloud/2025/01/25/13/20250125132222-YWBRIV62.json"
            style={{ width: "100%", height: "500px", border: "none" }}
            title="Chatbot"
          ></iframe>
        </div>
      )}

      <footer className="text-center mt-5">
        <p>&copy; 2025 Government Scheme Website. All rights reserved.</p>
      </footer>
    </div>
  );
}
