// import { useState } from "react";
// import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
// import { Button } from "./ui/button";
// import { Input } from "./ui/input";
// import { Label } from "./ui/label";
// import { toast } from "sonner";
// import { Download, Mail } from "lucide-react";

// interface CVPopupProps {
//   open: boolean;
//   onOpenChange: (open: boolean) => void;
// }

// export function CVPopup({ open, onOpenChange }: CVPopupProps) {
//   const [email, setEmail] = useState("");
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!email) {
//       toast.error("Please enter your email address");
//       return;
//     }

//     setIsSubmitting(true);
    
//     // Simulate API call
//     setTimeout(() => {
//       toast.success("CV sent to your email! Check your inbox.");
//       setEmail("");
//       setIsSubmitting(false);
//       onOpenChange(false);
//     }, 1500);
//   };

//   return (
//     <Dialog open={open} onOpenChange={onOpenChange}>
//       <DialogContent className="sm:max-w-md">
//         <DialogHeader>
//           <DialogTitle className="flex items-center gap-2">
//             <Download className="h-5 w-5" />
//             Get My Resume
//           </DialogTitle>
//         </DialogHeader>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div className="space-y-2">
//             <Label htmlFor="email">Email Address</Label>
//             <Input
//               id="email"
//               type="email"
//               placeholder="your.email@example.com"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//             <p className="text-sm text-muted-foreground">
//               I'll send you my latest resume/CV directly to your inbox.
//             </p>
//           </div>
//           <div className="flex gap-3">
//             <Button
//               type="button"
//               variant="outline"
//               onClick={() => onOpenChange(false)}
//               className="flex-1"
//             >
//               Cancel
//             </Button>
//             <Button
//               type="submit"
//               disabled={isSubmitting}
//               className="flex-1"
//             >
//               <Mail className="h-4 w-4 mr-2" />
//               {isSubmitting ? "Sending..." : "Send CV"}
//             </Button>
//           </div>
//         </form>
//       </DialogContent>
//     </Dialog>
//   );
// }

import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "./ui/dialog";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Download, Send, X } from "lucide-react";
import { toast } from "sonner";

interface CVPopupProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function CVPopup({ open, onOpenChange }: CVPopupProps) {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSendCV = async () => {
    if (!email) {
      toast.error("Please enter your email address");
      return;
    }

    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      toast.success("CV sent to your email successfully!");
      setEmail("");
      onOpenChange(false);
    }, 2000);
  };

  const handleDownloadCV = () => {
    // Create a dummy PDF download
    const link = document.createElement('a');
    link.href = '#';
    link.download = 'MD_Sarmad_Resume.pdf';
    link.click();
    toast.success("CV download started!");
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Download className="h-5 w-5" />
            Get My Resume
          </DialogTitle>
          <DialogDescription>
            Choose how you'd like to receive my resume and portfolio details.
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="flex flex-col gap-3">
            <Button 
              onClick={handleSendCV}
              disabled={loading}
              className="w-full"
            >
              {loading ? (
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Sending...
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <Send className="h-4 w-4" />
                  Send to Email
                </div>
              )}
            </Button>

            <Button 
              variant="outline"
              onClick={handleDownloadCV}
              className="w-full"
            >
              <Download className="h-4 w-4 mr-2" />
              Direct Download
            </Button>
          </div>

          <p className="text-sm text-muted-foreground text-center">
            Your email will only be used to send the resume and won't be stored or shared.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}