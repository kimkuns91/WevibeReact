import { useEffect, useReducer, useRef, useState } from "react";
import "./RequirementsBodyChatbot.css";

function chatReducer(state, action) {
  switch (action.type) {
    // 유저가 Input 값에 값을 넣을 때
    case "INPUT_USER_MESSAGE":
      return { ...state, message: action.payload.message };
    // 유저가 Send 버튼을 눌렀을 때
    case "ADD_USER_MESSAGE":
      return {
        ...state,
        chatLogs: [...state.chatLogs, action.payload],
        message: "",
      };
    case "ADD_AI_MESSAGE_PART":
      return {
        ...state,
        message: "",
        streamMessage: state.streamMessage + action.payload,
      };
    case "COMMIT_AI_MESSAGE":
      return {
        ...state,
        chatLogs: [
          ...state.chatLogs,
          { role: "위봇", message: state.streamMessage },
        ],
        streamMessage: "",
      };
    default:
      return state;
  }
}

const ChatBot = (props) => {
  const chatContentsRef = useRef(null);
  const User = "User";
  const [state, dispatch] = useReducer(chatReducer, {
    message: "",
    chatLogs: [
      {
        role: "위봇",
        message:
          "안녕하세요. 웹앱 설계사 위봇입니다. 웹앱에 관련된 모든 걸 물어보세요.",
      },
    ],
    streamMessage: "",
  });
  const [ws, setWs] = useState(null);

  useEffect(() => {

    const socket = new WebSocket('wss://websocket.lyncare.co.kr');

    setWs(socket);

    socket.addEventListener("open", () => {
      console.log("WebSocket 연결이 열렸습니다.");
    });

    socket.addEventListener("message", (event) => {
      const data = JSON.parse(event.data);
      if (data.answer) {
        dispatch({ type: "ADD_AI_MESSAGE_PART", payload: data.answer });
      }
      if (data.status && data.status === "completed") {
        dispatch({ type: "COMMIT_AI_MESSAGE" });
      }
    });

    return () => {
      socket.close();
    };
  }, []);
  useEffect(() => {
    const element = chatContentsRef.current;
    element.scrollTop = element.scrollHeight;
  }, [state.chatLogs]);
  const handleMessage = (e) => {
    dispatch({
      type: "INPUT_USER_MESSAGE",
      payload: { role: User, message: e.target.value },
    });
  };
  const sendMessage = () => {
    if (state.message.trim() === "") return;
    ws.send(JSON.stringify({ text: state.message }));
    dispatch({
      type: "ADD_USER_MESSAGE",
      payload: { role: User, message: state.message },
    });
  };

  return (
    <div className="RequirementsBodyChatbot">
      <div className="ChatContents" ref={chatContentsRef}>
        {state.chatLogs.map((msg, index) => (
          <div
            key={index}
            className={msg.role === "User" ? "messageUser" : "messageBot"}
          >
            {msg.role} : {msg.message}
          </div>
        ))}
        {state.streamMessage && (
          <div className="messageBot">위봇 : {state.streamMessage}</div>
        )}
      </div>
      <div className="ChatInputWrap">
        <input
          type="text"
          value={state.message}
          onChange={handleMessage}
          onKeyUp={(e) => {
            if (e.key === "Enter") sendMessage();
          }}
        />
        <button onClick={sendMessage}>보내기</button>
      </div>
    </div>
  );
};

export default ChatBot;
