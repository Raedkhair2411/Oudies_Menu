
import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import { toast } from 'sonner';

interface QRCodeGeneratorProps {
  url: string;
  className?: string;
  showDownload?: boolean;
}

const QRCodeGenerator: React.FC<QRCodeGeneratorProps> = ({ 
  url, 
  className,
  showDownload = false
}) => {
  const [qrCodeSrc, setQrCodeSrc] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const generateQRCode = async () => {
      setIsLoading(true);
      try {
        // Make sure the URL is properly prepared for the QR code
        const cleanUrl = url.trim();
        const encodedUrl = encodeURIComponent(cleanUrl);
        
        // Use Google's Chart API to generate QR code with proper settings
        // Added error correction level and size parameters
        const qrCodeUrl = `https://chart.googleapis.com/chart?cht=qr&chl=${encodedUrl}&chs=250x250&choe=UTF-8&chld=M|4`;
        
        console.log('Generated QR code URL:', qrCodeUrl);
        console.log('Original URL being encoded:', cleanUrl);
        
        setQrCodeSrc(qrCodeUrl);
      } catch (error) {
        console.error('Error generating QR code:', error);
        toast.error('Failed to generate QR code');
      } finally {
        setIsLoading(false);
      }
    };

    if (url) {
      generateQRCode();
    }
  }, [url]);

  const handleDownload = () => {
    // Create a temporary anchor element
    const link = document.createElement('a');
    link.href = qrCodeSrc;
    link.download = 'oudie-burger-qrcode.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    toast.success('QR Code downloaded', {
      description: 'Your QR code has been downloaded successfully'
    });
  };

  return (
    <div className={cn("flex flex-col items-center justify-center p-6", className)}>
      {isLoading ? (
        <div className="h-64 w-64 rounded-md bg-burger-orange/20 animate-pulse"></div>
      ) : (
        <div className="qr-glass-card p-4">
          <img 
            src={qrCodeSrc} 
            alt="QR Code" 
            className="w-64 h-64 object-contain border bg-white p-2 rounded-md" 
          />
          
          {showDownload && (
            <Button 
              onClick={handleDownload}
              className="mt-3 bg-burger-orange hover:bg-burger-orange/90 gap-2 w-full"
            >
              <Download size={16} />
              Download QR Code
            </Button>
          )}
        </div>
      )}
      <p className="mt-4 text-burger-white/80 text-sm">
        Scan to view our digital menu
      </p>
    </div>
  );
};

export default QRCodeGenerator;
