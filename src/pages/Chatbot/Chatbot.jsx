import React, { useState, useEffect } from "react";
import MicIcon from "@mui/icons-material/Mic";
import { Fab, Paper, TextField, IconButton } from "@mui/material";
// import SendIcon from '@mui/icons-material/Send';
import chatIcon from "./chat1.png";
import closeIcon from "./close.png";
import sendIcon from "./send.png";
import sihIcon from "./sih.jpg";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [chatHistory, setChatHistory] = useState([
    {
      type: "bot",
      message:
        "Hello! This is Leena, your AI chat assistant. How can I help you?",
    },
  ]);
  const [isListening, setIsListening] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(null);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const navigate = useNavigate();

  const intentResponse = (intentName) => {
    if (intentName === "service-near-me") {
      navigate("/services");
    } else if (intentName === "how-to-login") {
      navigate("/signin");
    } else if (intentName === "how-to-signup") {
      navigate("/signup");
    } else if (intentName === "about-this-site") {
      navigate("/about");
    }
  };

  const Dictaphone = ({ startListening, stopListening, isListening }) => {
    const {
      transcript,
      listening,
      resetTranscript,
      browserSupportsSpeechRecognition,
    } = useSpeechRecognition();

    useEffect(() => {
      if (isListening && !listening) {
        // Automatically stop listening after a pause
        const timeoutId = setTimeout(() => {
          stopListening();
        }, 2000); // Adjust the duration of the pause as needed

        return () => clearTimeout(timeoutId);
      }
    }, [isListening, listening, stopListening]);

    if (!browserSupportsSpeechRecognition) {
      console.log("Browser doesn't support speech recognition");
    }

    return (
      <div>
        <IconButton onClick={isListening ? stopListening : startListening}>
          {isListening ? "Stop Listening" : "Start Listening"}
          <MicIcon
            sx={{
              color: "white",
              backgroundColor: "Blue",
              width: "35px",
              height: "35px",
              borderRadius: "50%",
            }}
          />
        </IconButton>
        <div>{transcript ? setMessage(transcript) : null}</div>
      </div>
    );
  };

  // const Dictaphone = () => {
  //     const {
  //       transcript,
  //       listening,
  //       resetTranscript,
  //       browserSupportsSpeechRecognition
  //     } = useSpeechRecognition();

  //     if (!browserSupportsSpeechRecognition) {
  //       console.log("Browser doesn't support speech recognition");
  //     }

  //     return (
  //       <div>
  //         <IconButton onClick={toggleListening} disabled={isListening}>
  //           Start Listening
  //         </IconButton>
  //         <IconButton onClick={stopListening} disabled={!isListening}>
  //           Stop Listening
  //         </IconButton>
  //         <div>
  //         {/* {setMessage(transcript)} */}
  //         {transcript ? setMessage(transcript) : null}
  //         </div>
  //       </div>
  //     );
  //   };

  const toggleListening = () => {
    const lang = selectedLanguage === 1 ? "hi-IN" : "en-US"; // Set the language code based on user selection
    SpeechRecognition.startListening({ language: lang });
    setIsListening(true);
  };

  const stopListening = () => {
    SpeechRecognition.stopListening();
    setIsListening(false);
  };

  const speak = (text, lang) => {
    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(text);

    // Set the language and voice for Hindi
    if (lang === "hi-IN") {
      const hindiVoice = synth
        .getVoices()
        .find((voice) => voice.lang === "hi-IN");
      if (hindiVoice) {
        utterance.voice = hindiVoice;
      } else {
        console.warn("Hindi voice not found. Using the default voice.");
      }
    }

    synth.speak(utterance);
  };

  const handleAlignment = (value) => {
    if (value === "left") {
      setSelectedLanguage(1);
      // alert("Language selected: Hindi");
    } else if (value === "center") {
      setSelectedLanguage(2);
      // alert("Language selected: English");
    }
  };

  const sendMessage = () => {
    if (message.trim() !== "") {
      setChatHistory((prev) => {
        return [...prev, { type: "user", message }];
      });

      axios
        .post(`${process.env.REACT_APP_API_URL}/api/chat/reply`, {
          message: message,
          selectedLanguage: selectedLanguage,
        })
        .then((res) => {
          console.log(res.data);
          setChatHistory((prev) => {
            return [...prev, { type: "bot", message: res.data.replyText }];
          });
          intentResponse(res.data.intentName);
          speak(res.data.replyText, res.data.lang);
        })
        .catch((err) => {
          console.log(err);
        });

      setMessage("");
    }
  };

  return (
    <div style={{ position: "fixed", bottom: 50, right: 50, zIndex: 1000 }}>
      <Fab
        color='secondary'
        size='large'
        onClick={toggleChat}
        style={{ zIndex: 999 }}>
        {isOpen ? (
          "-"
        ) : (
          <img
            src={chatIcon}
            alt='Chat Icon'
            style={{ width: "34px", height: "34px" }}
          />
        )}
      </Fab>
      {isOpen && (
        <Paper
          style={{
            position: "fixed",
            bottom: 40,
            right: 40,
            width: 300,
            border: "2px solid black",
            zIndex: 1000,
          }}>
          <div
            style={{ padding: 16, backgroundColor: "#F58F3C", color: "white" }}
            className='shadow-xl'>
            <div className='flex flex-row justify-between items-center'>
              <div className='text-2xl font-semibold flex flex-row justify-start items-center'>
                <img
                  src={sihIcon}
                  className='rounded rounded-full me-2'
                  alt='Chat Icon'
                  style={{ width: "30px", height: "30px" }}
                />
                Leena AI
              </div>

              <ToggleButtonGroup
                exclusive
                onChange={(e, value) => handleAlignment(value)}
                aria-label='text alignment'>
                <ToggleButton
                  value='left'
                  aria-label='left aligned'
                  style={{
                    backgroundColor: "white",
                    borderRadius: 12, // Adjust the value for semi-rounded corners
                    padding: "4px 12px", // Adjust padding as needed
                    marginRight: "8px", // Add space between ToggleButtons
                    fontWeight: "bold", // Make the text bold
                    fontSize: "20px", // Size the text appropriately
                  }}>
                  अ
                </ToggleButton>

                <ToggleButton
                  value='center'
                  aria-label='center aligned'
                  style={{
                    backgroundColor: "white",
                    borderRadius: 12, // Adjust the value for semi-rounded corners
                    padding: "4px 12px", // Adjust padding as needed
                    fontWeight: "bold", // Make the text bold
                    fontSize: "20px", // Size the text appropriately
                  }}>
                  A
                </ToggleButton>
              </ToggleButtonGroup>

              <IconButton onClick={toggleChat}>
                <img
                  src={closeIcon}
                  alt='Chat Icon'
                  style={{ width: "15px", height: "15px" }}
                />
              </IconButton>
            </div>
          </div>

          <div className='bg-gray-50 p-3 min-h-[300px] max-h-[300px] overflow-y-auto'>
            {chatHistory.map((item, index) => (
              <div
                key={index}
                style={{
                  marginBottom: 8,
                  textAlign: item.type === "user" ? "right" : "left",
                }}>
                <div
                  style={{
                    padding: 8,
                    borderRadius: 8,
                    maxWidth: "80%",
                    backgroundColor:
                      item.type === "user" ? "#2196F3" : "#d9680b",
                    color: item.type === "user" ? "#fff" : "#fff",
                    display: "inline-block",
                  }}
                  className='shadow-2xl'>
                  {item.message}
                </div>
              </div>
            ))}
          </div>

          <div
            className='bg-gray-50'
            style={{
              padding: 16,
              borderTop: "1px solid #ccc",
              display: "flex",
            }}>
            <TextField
              fullWidth
              variant='standard'
              placeholder='Type your message...'
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && sendMessage()}
            />
            <IconButton onClick={sendMessage}>
              <img
                src={sendIcon}
                className='ms-4'
                alt='Chat Icon'
                style={{ width: "25px", height: "25px" }}
              />
            </IconButton>
          </div>
          <Dictaphone
            startListening={toggleListening}
            stopListening={stopListening}
            isListening={isListening}
          />
        </Paper>
      )}
    </div>
  );
};

export default Chatbot;
