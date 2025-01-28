import { Mic, Send } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";

const ChatInput = () => {
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      console.log("Sending message:", message);
      setMessage("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border-t border-border">
      <div className="flex items-center space-x-4">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Ask anything"
          className="message-input"
        />
        <Button size="icon" type="submit">
          <Send className="h-4 w-4" />
        </Button>
        <Button size="icon" variant="outline" type="button">
          <Mic className="h-4 w-4" />
        </Button>
      </div>
      <p className="text-xs text-muted-foreground text-center mt-2">
        ChatGPT can make mistakes. Check important info.
      </p>
    </form>
  );
};

export default ChatInput;