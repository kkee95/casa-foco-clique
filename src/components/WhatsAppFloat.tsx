import { MessageCircle } from "lucide-react";

const WhatsAppFloat = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "5511999999999"; // Replace with actual number
    const message = "Olá! Tenho interesse em conhecer mais sobre os imóveis disponíveis.";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="whatsapp-float button-bounce group"
      aria-label="Falar no WhatsApp"
    >
      <MessageCircle className="w-6 h-6 text-white" />
      <div className="absolute -top-12 right-0 bg-gray-900 text-white text-xs px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
        Fale conosco!
      </div>
    </button>
  );
};

export default WhatsAppFloat;