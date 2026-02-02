'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Sparkles, Loader2, MessageCircle, X } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

const suggestedQuestions = [
  "What are your main skills?",
  "Tell me about your projects",
  "What's your experience with DevOps?",
  "What certifications do you have?",
  "Tell me about HandiTalk",
];

export default function AIChat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [remaining, setRemaining] = useState<number | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = async (text?: string) => {
    const messageText = text || input;
    if (!messageText.trim() || isLoading) return;

    const userMessage: Message = { role: 'user', content: messageText };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: messageText,
          conversationHistory: messages,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to get response');
      }

      const assistantMessage: Message = {
        role: 'assistant',
        content: data.response,
      };
      setMessages((prev) => [...prev, assistantMessage]);
      
      if (data.remaining !== undefined) {
        setRemaining(data.remaining);
      }
    } catch (error: any) {
      const errorMessage: Message = {
        role: 'assistant',
        content: error.message || 'Sorry, I encountered an error. Please try again!',
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage();
  };

  return (
    <>
      {/* Floating Chat Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-gradient-to-r from-primary-600 to-accent-500 text-white rounded-full shadow-2xl hover:shadow-3xl transition-all hover:scale-110 flex items-center justify-center group"
          >
            <MessageCircle className="w-7 h-7 group-hover:scale-110 transition-transform" />
            <motion.div
              className="absolute -top-1 -right-1 w-4 h-4 bg-accent-500 rounded-full"
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-6 right-6 z-50 w-[400px] h-[600px] glass rounded-3xl shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-primary-600 to-accent-500 p-4 text-white flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold">Ask me anything!</h3>
                  <p className="text-xs text-white/80">AI-powered assistant</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-white/20 rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.length === 0 && (
                <div className="text-center py-8">
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <Sparkles className="w-12 h-12 mx-auto mb-4 text-primary-600" />
                    <h4 className="font-semibold text-gray-800 mb-2">
                      Hi! I'm Yasmin's AI assistant 👋
                    </h4>
                    <p className="text-sm text-gray-600 mb-6">
                      Ask me anything about my skills, projects, or experience!
                    </p>
                    <div className="space-y-2">
                      <p className="text-xs text-gray-500 mb-2">Try asking:</p>
                      {suggestedQuestions.map((question, i) => (
                        <motion.button
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1 }}
                          onClick={() => sendMessage(question)}
                          className="block w-full text-left px-3 py-2 text-sm bg-white/60 hover:bg-white/90 rounded-lg transition-colors"
                        >
                          {question}
                        </motion.button>
                      ))}
                    </div>
                  </motion.div>
                </div>
              )}

              {messages.map((message, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={cn(
                    'flex',
                    message.role === 'user' ? 'justify-end' : 'justify-start'
                  )}
                >
                  <div
                    className={cn(
                      'max-w-[80%] px-4 py-2 rounded-2xl',
                      message.role === 'user'
                        ? 'bg-gradient-to-r from-primary-600 to-accent-500 text-white'
                        : 'bg-white/80 text-gray-800'
                    )}
                  >
                    <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                  </div>
                </motion.div>
              ))}

              {isLoading && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex justify-start"
                >
                  <div className="bg-white/80 px-4 py-3 rounded-2xl flex items-center gap-2">
                    <Loader2 className="w-4 h-4 animate-spin text-primary-600" />
                    <span className="text-sm text-gray-600">Thinking...</span>
                  </div>
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <form onSubmit={handleSubmit} className="p-4 border-t border-gray-200/50">
              {remaining !== null && remaining < 5 && (
                <div className="mb-2 text-xs text-orange-600 text-center">
                  ⚠️ {remaining} messages remaining in this session
                </div>
              )}
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type your message..."
                  disabled={isLoading}
                  className="flex-1 px-4 py-3 rounded-full bg-white/80 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-500 disabled:opacity-50"
                />
                <button
                  type="submit"
                  disabled={!input.trim() || isLoading}
                  className="w-12 h-12 rounded-full bg-gradient-to-r from-primary-600 to-accent-500 text-white flex items-center justify-center hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105"
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
