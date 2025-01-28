import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const ChatHeader = () => {
  return (
    <div className="flex flex-col items-center space-y-4 p-6 border-b border-border">
      <Avatar className="h-16 w-16">
        <AvatarImage src="/lovable-uploads/f4bc1405-2a4b-4639-86a9-eb70d7c63aaa.png" />
        <AvatarFallback>AI</AvatarFallback>
      </Avatar>
      <div className="text-center">
        <h1 className="text-2xl font-bold">rent2B CEO</h1>
        <p className="text-sm text-muted-foreground">By @philippsparoutz</p>
        <p className="text-sm text-muted-foreground mt-2">
          Guides as the CEO/Founder of rent2B
        </p>
      </div>
    </div>
  );
};

export default ChatHeader;