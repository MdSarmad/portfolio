import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { ScrollArea } from "./ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Send, Bot, User, Download, Mail } from "lucide-react";
import {
  ChatMessage,
  welcomeMessage,
  findBestResponse,
  getFollowUpSuggestions,
} from "../data/chatbot-data";

interface ChatBotPopupProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onGetResume?: () => void;
}

export function ChatBotPopup({
  open,
  onOpenChange,
  onGetResume,
}: ChatBotPopupProps) {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [followUpSuggestions, setFollowUpSuggestions] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Initialize chat with welcome message
  useEffect(() => {
    if (open && messages.length === 0) {
      const welcomeMsg: ChatMessage = {
        id: "1",
        text: welcomeMessage,
        sender: "bot",
        timestamp: new Date(),
      };
      setMessages([welcomeMsg]);
      setFollowUpSuggestions([
        "Tell me about his skills",
        "Show me his projects",
        "Is he available for hire?",
      ]);
    }
  }, [open, messages.length]);

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Focus input when dialog opens
  useEffect(() => {
    if (open && inputRef.current) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  }, [open]);

  const handleSendMessage = async (messageText?: string) => {
    const text = messageText || inputValue.trim();
    if (!text) return;

    // Add user message
    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      text,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    // Simulate typing delay
    setTimeout(() => {
      const botResponse = findBestResponse(text);
      const suggestions = getFollowUpSuggestions(text);

      const botMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        text: botResponse,
        sender: "bot",
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, botMessage]);
      setFollowUpSuggestions(suggestions);
      setIsTyping(false);

      // Handle special actions
      if (
        text.toLowerCase().includes("resume") ||
        text.toLowerCase().includes("cv")
      ) {
        setTimeout(() => {
          if (onGetResume) {
            onGetResume();
          }
        }, 1000);
      }
    }, 1000 + Math.random() * 1000);
  };

  const handleSuggestionClick = (suggestion: string) => {
    handleSendMessage(suggestion);
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    onOpenChange(false);
  };

  const formatMessageText = (text: string) => {
    // Convert markdown-like formatting to JSX
    const parts = text.split("\n").map((line, index) => {
      if (
        line.startsWith("🔹") ||
        line.startsWith("✅") ||
        line.startsWith("💰") ||
        line.startsWith("👥")
      ) {
        return (
          <div key={index} className="ml-2 mb-1">
            {line}
          </div>
        );
      }
      if (line.startsWith("**") && line.endsWith("**")) {
        return (
          <div key={index} className="font-semibold mb-1">
            {line.slice(2, -2)}
          </div>
        );
      }
      if (line.trim() === "") {
        return <br key={index} />;
      }
      return (
        <div key={index} className="mb-1">
          {line}
        </div>
      );
    });
    return <div>{parts}</div>;
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[450px] h-[600px] flex flex-col p-0">
        <DialogHeader className="p-4 border-b bg-gradient-to-r from-primary/5 to-secondary/5">
          <DialogTitle className="flex items-center gap-3">
            <Avatar className="w-10 h-10">
              <AvatarImage src="/bot-avatar.png" />
              <AvatarFallback className="bg-primary text-primary-foreground">
                <Bot className="w-5 h-5" />
              </AvatarFallback>
            </Avatar>
            <div>
              <div className="text-lg">Md Sarmad's AI Assistant</div>
              <div className="text-sm text-muted-foreground font-normal">
                {isTyping ? (
                  <span className="flex items-center gap-1">
                    <motion.div
                      className="w-2 h-2 bg-primary rounded-full"
                      animate={{ opacity: [1, 0.3, 1] }}
                      transition={{ duration: 1, repeat: Infinity, delay: 0 }}
                    />
                    <motion.div
                      className="w-2 h-2 bg-primary rounded-full"
                      animate={{ opacity: [1, 0.3, 1] }}
                      transition={{ duration: 1, repeat: Infinity, delay: 0.2 }}
                    />
                    <motion.div
                      className="w-2 h-2 bg-primary rounded-full"
                      animate={{ opacity: [1, 0.3, 1] }}
                      transition={{ duration: 1, repeat: Infinity, delay: 0.4 }}
                    />
                    <span className="ml-2">Typing...</span>
                  </span>
                ) : (
                  "Online • Ready to help"
                )}
              </div>
            </div>
          </DialogTitle>
          <DialogDescription className="sr-only">
            Chat with Md Sarmad's AI assistant to learn about his skills,
            experience, and availability
          </DialogDescription>
        </DialogHeader>

        <div className="flex-1 flex flex-col overflow-auto">
          <ScrollArea className="flex-1 p-4">
            <div className="space-y-4">
              <AnimatePresence>
                {messages.map((message, index) => (
                  <motion.div
                    key={message.id}
                    initial={{ opacity: 0, y: 20, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className={`flex gap-3 ${
                      message.sender === "user" ? "flex-row-reverse" : ""
                    }`}
                  >
                    <Avatar className="w-8 h-8 flex-shrink-0">
                      {message.sender === "bot" ? (
                        <AvatarFallback className="bg-primary text-primary-foreground">
                          <Bot className="w-4 h-4" />
                        </AvatarFallback>
                      ) : (
                        <AvatarFallback className="bg-secondary text-secondary-foreground">
                          <User className="w-4 h-4" />
                        </AvatarFallback>
                      )}
                    </Avatar>
                    <div
                      className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                        message.sender === "user"
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted text-foreground"
                      }`}
                    >
                      <div className="text-sm">
                        {message.sender === "bot"
                          ? formatMessageText(message.text)
                          : message.text}
                      </div>
                      <div className="text-xs opacity-70 mt-2">
                        {message.timestamp.toLocaleTimeString([], {
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>

              {/* Quick action buttons */}
              {messages.length > 1 && !isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex flex-wrap gap-2 justify-center mt-4"
                >
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => onGetResume && onGetResume()}
                    className="text-xs"
                  >
                    <Download className="w-3 h-3 mr-1" />
                    Get Resume
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={scrollToContact}
                    className="text-xs"
                  >
                    <Mail className="w-3 h-3 mr-1" />
                    Contact Form
                  </Button>
                </motion.div>
              )}

              {/* Follow-up suggestions */}
              {followUpSuggestions.length > 0 && !isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-2"
                >
                  <div className="text-xs text-muted-foreground text-center">
                    Quick questions:
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {followUpSuggestions.map((suggestion, index) => (
                      <Button
                        key={index}
                        size="sm"
                        variant="ghost"
                        onClick={() => handleSuggestionClick(suggestion)}
                        className="text-xs h-8 px-3 bg-secondary/50 hover:bg-secondary text-foreground border border-border/50"
                      >
                        {suggestion}
                      </Button>
                    ))}
                  </div>
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>
          </ScrollArea>

          <div className="p-4 border-t bg-background sticky bottom-0">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage();
              }}
              className="flex gap-2"
            >
              <Input
                ref={inputRef}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Ask me anything about Md Sarmad..."
                disabled={isTyping}
                className="flex-1"
              />
              <Button
                type="submit"
                size="sm"
                disabled={!inputValue.trim() || isTyping}
                className="px-4"
              >
                <Send className="w-4 h-4" />
              </Button>
            </form>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
