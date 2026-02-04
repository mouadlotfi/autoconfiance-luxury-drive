import { MessageCircle, X } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';

const FloatingWhatsApp = () => {
  const [isOpen, setIsOpen] = useState(false);

  const contacts = [
    { name: "Service Commercial 1", number: "+212661299420" },
    { name: "Service Commercial 2", number: "+212662021536" },
  ];

  const handleWhatsAppClick = (number: string) => {
    // Remove any non-numeric characters for the link
    const cleanNumber = number.replace(/\D/g, '');
    window.open(`https://wa.me/${cleanNumber}`, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4">
      {isOpen && (
        <div className="bg-card border border-border/50 shadow-card-hover rounded-2xl p-4 w-72 mb-2 animate-fade-in">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-serif font-bold text-foreground">Contactez-nous</h3>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
          <p className="text-sm text-muted-foreground mb-4">
            Discutez avec notre équipe directement sur WhatsApp.
          </p>
          <div className="space-y-3">
            {contacts.map((contact, index) => (
              <Button
                key={index}
                variant="outline"
                className="w-full justify-start gap-3 hover:bg-gold/10 hover:text-gold hover:border-gold/50 transition-all group"
                onClick={() => handleWhatsAppClick(contact.number)}
              >
                <div className="w-8 h-8 rounded-full bg-green-500/10 flex items-center justify-center group-hover:bg-green-500/20 transition-colors">
                  <MessageCircle className="w-4 h-4 text-green-600 dark:text-green-500" />
                </div>
                <div className="flex flex-col items-start">
                  <span className="text-xs font-medium">{contact.name}</span>
                  <span className="text-xs text-muted-foreground">{contact.number}</span>
                </div>
              </Button>
            ))}
          </div>
        </div>
      )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center transform hover:scale-105"
        aria-label="Contact WhatsApp"
      >
        <MessageCircle className="w-8 h-8" />
        <span className="absolute -top-1 -right-1 flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
        </span>
      </button>
    </div>
  );
};

export default FloatingWhatsApp;
