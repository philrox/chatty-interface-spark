import ChatHeader from "@/components/ChatHeader";
import ChatInput from "@/components/ChatInput";
import SuggestedPrompts from "@/components/SuggestedPrompts";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col max-w-3xl mx-auto">
      <ChatHeader />
      <div className="flex-1 overflow-y-auto">
        <SuggestedPrompts />
        {/* Messages will be added here in future iterations */}
      </div>
      <ChatInput />
    </div>
  );
};

export default Index;