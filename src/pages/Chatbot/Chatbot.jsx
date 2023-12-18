import React, { useState } from 'react';
import { Fab, Paper, TextField, IconButton } from '@mui/material';
// import SendIcon from '@mui/icons-material/Send';
import chatIcon from  "./chat1.png";
import closeIcon from "./close.png";
import sendIcon from "./send.png";
import sihIcon from "./sih.jpg";
import acios from "axios"
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([{type: "bot", message: "Hello! This is Leena, your AI chat assistant. How can I help you?"}]);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const navigate = useNavigate();

  
const intentResponse =(intentName)=> {
    if(intentName==="service-near-me") {
      navigate("/services")
    } else if(intentName==="how-to-login") {
      navigate("/login")
    } else if(intentName==="how-to-signup") {
      navigate("/signup")
    }
}

  const sendMessage = () => {
    if (message.trim() !== '') {
        setChatHistory(prev=>{
            return [...prev, { type: 'user', message }]
        });

        axios.post(`${process.env.REACT_APP_API_URL}/api/chat/reply`,{
          message: message
        })
          .then(res=>{
            console.log(res.data);
            setChatHistory(prev=>{
              return [...prev, { type: 'bot', message: res.data.replyText }];
              
            });
            intentResponse(res.data.intentName)
          })
          .catch(err=>{
            console.log(err);
          })

      setMessage('');
    }
  };

  return (
    <div style={{ position: 'fixed', bottom: 50, right: 50, zIndex: 1000  }}>
      <Fab color="secondary" size='large' onClick={toggleChat} style={{zIndex: 999}}> 
        {isOpen ? '-' : <img src={chatIcon} alt="Chat Icon" style={{ width: '34px', height: '34px' }} />}
      </Fab>
      {isOpen && (
        <Paper
          style={{
            position: 'fixed',
            bottom: 40,
            right: 40,
            width: 300,
            border: "2px solid black",
            zIndex: 1000
          }}
        >
          <div style={{ padding: 16, backgroundColor: "#F58F3C", color: "white" }} className='shadow-xl'>
            <div className='flex flex-row justify-between items-center'>
              <div className='text-2xl font-semibold flex flex-row justify-start items-center'>

                <img src={sihIcon} className='rounded rounded-full me-2' alt="Chat Icon" style={{ width: '30px', height: '30px' }} />
                Leena AI
                </div>
              <IconButton onClick={toggleChat}>
                <img src={closeIcon} alt="Chat Icon" style={{ width: '15px', height: '15px' }} />
              </IconButton>
            </div>
          </div>
          
          <div className='bg-gray-50 p-3 min-h-[300px] max-h-[300px] overflow-y-auto'>
              {chatHistory.map((item, index) => (
                <div
                  key={index}
                  style={{
                    marginBottom: 8,
                    textAlign: item.type === 'user' ? 'right' : 'left',
                  }} 
                >
                  <div
                    style={{
                      padding: 8,
                      borderRadius: 8,
                      maxWidth: "80%",
                      backgroundColor: item.type === 'user' ? '#2196F3' : '#d9680b',
                      color: item.type === 'user' ? '#fff' : '#fff',
                      display: 'inline-block',
                    }}
                    className='shadow-2xl'
                  >
                    {item.message}
                  </div>
                </div>
              ))}
          </div>
          
          <div className='bg-gray-50' style={{ padding: 16, borderTop: '1px solid #ccc', display: 'flex' }}>
            <TextField
              fullWidth
              variant="standard"
              placeholder="Type your message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
            />
            <IconButton onClick={sendMessage}>
              <img src={sendIcon} className='ms-4' alt="Chat Icon" style={{ width: '25px', height: '25px' }} />
            </IconButton>
          </div>
        </Paper>
      )}
    </div>
  );
};

export default Chatbot;
