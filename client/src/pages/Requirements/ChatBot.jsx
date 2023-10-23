import { useReducer } from "react";
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
          { role: "🐭", message: state.streamMessage },
        ],
        streamMessage: "",
      };
    default:
      return state;
  }
}

const ChatBot = (props) => {
  const User = "User";
  const [state, dispatch] = useReducer(chatReducer, {
    message: "",
    chatLogs: [],
    streamMessage: "",
  });
  const handleMessage = (e) => {
    dispatch({
      type: "INPUT_USER_MESSAGE",
      payload: { role: User, message: e.target.value },
    });
  };
  const sendMessage = () => {
    if (state.message.trim() === "") return;

    dispatch({
      type: "ADD_USER_MESSAGE",
      payload: { role: User, message: state.message },
    });
  };
  return (
    <div className="RequirementsBodyChatbot">
      <div className="ChatContents">
        {state.chatLogs.map((msg, index) => (
          <div key={index} className="message">
            {msg.role} : {msg.message}
          </div>
        ))}
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
