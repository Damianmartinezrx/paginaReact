/*import { MessageCircle } from 'lucide-react';*/
import { PhoneCall } from 'lucide-react';

export default function WhatsAppButton() {
  const sendWhatsApp = () => {
    const phoneNumber = '1167938304';
    const message = 'Hola Damian, me interesa conocer más sobre tus servicios de desarrollo backend y testing QA.';
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <button
      onClick={sendWhatsApp}
      className="fixed bottom-8 right-8 w-14 h-14 flex items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl hover:scale-110 transition-all z-50 group animate-bounce"
      aria-label="Contact via WhatsApp"
    >
      <div className="relative w-8 h-8">
        <div className="absolute inset-0 bg-white rounded-full scale-[1.4]" />
        <PhoneCall className="absolute inset-0 w-full h-full text-[#25D366] scale-[1.1]" />

  
      </div>
      <span className="absolute right-full top-1/2 -translate-y-1/2 mr-4 px-3 py-1 rounded-md bg-gray-900 text-white text-sm font-medium opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all whitespace-nowrap">
        ¡Contáctame!
      </span>
    </button>
  );
}