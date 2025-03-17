
import React, { useEffect } from 'react';
import QRCodeGenerator from '@/components/QRCodeGenerator';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

const QRCode: React.FC = () => {
  // Ensure we have the full URL including the protocol
  const menuUrl = window.location.origin;
  
  useEffect(() => {
    console.log('QR Code page loaded, menu URL:', menuUrl);
    
    // Show instruction toast when page loads
    toast.info("Your QR Code is ready", {
      description: "Share this QR code with your customers to let them access your digital menu.",
      duration: 5000,
    });
  }, [menuUrl]);

  const handlePrint = () => {
    window.print();
    toast.success("Printing QR code", {
      description: "Your QR code is being sent to your printer."
    });
  };

  return (
    <div className="min-h-screen bg-burger-black flex flex-col items-center justify-center p-6">
      <div className="max-w-md w-full">
        <h1 className="font-display text-4xl text-burger-orange text-center mb-2 animate-fade-in">OUDIE'S BURGER</h1>
        <p className="text-burger-white/80 text-center mb-8 animate-fade-in" style={{ animationDelay: '0.1s' }}>
          Scan this QR code to view our digital menu
        </p>
        
        <div className="qr-glass-card p-8 mb-8 animate-fade-up" style={{ animationDelay: '0.2s' }}>
          <QRCodeGenerator url={menuUrl} showDownload={true} />
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up" style={{ animationDelay: '0.3s' }}>
          <Button 
            onClick={handlePrint}
            variant="outline"
            className="border-burger-orange text-burger-orange hover:bg-burger-orange/10 px-6 py-3 rounded-full shadow-lg transition-all duration-300 hover:scale-105"
          >
            Print QR
          </Button>
        </div>
        
        <a href="/" className="block text-center mt-8 text-burger-orange/80 hover:text-burger-orange transition-colors">
          ← Back to Menu
        </a>
      </div>
    </div>
  );
};

export default QRCode;
