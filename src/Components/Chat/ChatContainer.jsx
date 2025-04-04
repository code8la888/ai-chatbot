import Chat from "./Chat";

export default function ChatContainer({ messages }) {
  return (
    <div className="flex-grow-1 w-100 rounded-4 overflow-auto bg-white">
      <Chat messages={messages} />
    </div>
  );
}
