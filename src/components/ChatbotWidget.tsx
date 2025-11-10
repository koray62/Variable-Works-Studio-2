import { useState } from 'react';
import { MessageCircle, X, Loader2 } from 'lucide-react';

export const ChatbotWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {/* Chatbot Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-purple-600 to-blue-600 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 flex items-center justify-center"
        aria-label="Chatbot"
      >
        {isOpen ? <X size={28} /> : <MessageCircle size={28} />}
      </button>

      {/* Chatbot Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-40 w-[400px] h-[600px] bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200 animate-in slide-in-from-bottom-4 duration-300">
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-white z-10">
              <Loader2 className="w-8 h-8 animate-spin text-purple-600" />
            </div>
          )}
          <iframe
            src="https://variable-works-studio-chatbot-820650067181.us-west1.run.app/"
            className="w-full h-full"
            title="VariableWorks Studio Chatbot"
            onLoad={() => setIsLoading(false)}
            sandbox="allow-same-origin allow-scripts allow-forms allow-popups"
            allow="microphone; camera"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      )}
    </>
  );
};
