import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./chat.css";
import { FaArrowCircleRight } from "react-icons/fa";
import { Plus } from 'lucide-react';
import Pop from '../Popup/popUp';
import PopMobile from "../Popup/popMobile";

const TemplateChat = () => {
  
  const location = useLocation();
  const userQuery = location.state?.query || "";

  const [prompt, setPrompt] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [history, setHistory] = useState([
    "Create a design system for...",
    "Create a typography system...",
    "Create a button system...",
  ]);

  // When user comes from HomePage, auto-send the query
  useEffect(() => {
    if (userQuery) {
      const newMsg = { type: "user", text: userQuery };
      setMessages([newMsg]);
      handleGenerate(userQuery);
    }
  }, [userQuery]);

  // Generate AI response (Backend placeholder)
  const handleGenerate = async (promptText) => {
    setLoading(true);

    try {
      const res = await fetch("https://api.sprinten.ai/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: promptText }),
      });

      const data = await res.json();

      setMessages((prev) => [
        ...prev,
        {
          type: "ai",
          text: data.result || `
          Display Large – DM Sans 57/64 – -0.25
          Display Medium – DM Sans 45/52 – 0
          Display Small – DM Sans 36/44 – 0
          `,
        },
      ]);

      // save to history
      setHistory((prev) => [promptText, ...prev]);
    } catch (error) {
      console.error("Error generating:", error);
      setMessages((prev) => [
        ...prev,
        { type: "ai", text: "Error generating template. Please try again." },
      ]);
    }

    setLoading(false);
  };

  // Handle user input
  const handleSend = () => {
    if (!prompt.trim()) return;
    const newMsg = { type: "user", text: prompt };
    setMessages([...messages, newMsg]);
    handleGenerate(prompt);
    setPrompt("");
  };

  // Copy result
  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    alert("Copied to clipboard!");
  };

  // Export buttons
  const handleExportFigma = () => {
    console.log("Exporting to Figma... (Backend endpoint goes here)");
  };

  const handleExportPDF = () => {
    console.log("Exporting as PDF... (Backend endpoint goes here)");
  };

  const [showPopup, setShowPopup] = useState(false);


  return (
    <div className="template-chat-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <h4>History</h4>
        <input type="text" placeholder="Search..." className="search-input" />
        <ul>
          {history.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </aside>

      {/* Main Chat Area */}
      <main className="chat-area">
        <header className="chat-header">
          
        </header>

        <div className="messages">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`message ${msg.type === "user" ? "user-msg" : "ai-msg"}`}
            >
              {msg.type === "ai" ? (
                <div>
                <div className="ai-card">
                  <pre>{msg.text}</pre>
                  <div className="ai-actions">
                    
                  </div>
                  
                </div>
                <div className="cta-btn-container">
                  <button
                      className="copy-btn"
                      onClick={() => handleCopy(msg.text)}
                    >
                      <img src="/images/copy.png" alt="" />
                    </button>
                    <button
                      className="export-btn"
                      onClick={() => setShowPopup(true)}
                    >
                      Export to Figma
                    </button>

                    <button
                      className="export-link"
                      onClick={handleExportPDF}
                    >
                      Export as PDF
                    </button>
                </div>
                  
                </div>
              ) : (
                msg.text
              )}
            </div>
          ))}
          {loading && <div className="loading">Generating...</div>}
        </div>

        <footer className="input-section">
          <button className="plus-btn"><Plus size={25} /></button>
          <input
            type="text"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Type your prompt..."
          />
          <button onClick={handleSend}><FaArrowCircleRight /></button>
        </footer>
      </main>

      {showPopup && (
  <Pop
    onClose={() => setShowPopup(false)}
    onJustExport={() => {
      handleExportFigma();
      setShowPopup(false);
    }}
    onExportAndCreate={() => {
      // You can add any special export logic here later
      handleExportFigma();
      setShowPopup(false);
    }}
  />
  
)}


      {showPopup && (
    <PopMobile 
        onClose={() => setShowPopup(false)}
    onJustExport={() => {
      handleExportFigma();
      setShowPopup(false);
    }}
    onExportAndCreate={() => {
      // You can add any special export logic here later
      handleExportFigma();
      setShowPopup(false);
    }}
    />
  
)}

    </div>
  );
};

export default TemplateChat;
