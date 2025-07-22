import { LucideIcon, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ContactButtonProps {
  icon: LucideIcon;
  label: string;
  href: string;
}

export const ContactButton = ({ icon: Icon, label, href }: ContactButtonProps) => {
  return (
    <Button
      variant="outline"
      className="flex items-center gap-3 px-8 py-4 glass-effect border-primary/20 hover:bg-gradient-primary hover:text-white hover:border-primary hover:shadow-button transition-all duration-500 group relative overflow-hidden hover-lift"
      asChild
    >
      <a href={href} target="_blank" rel="noopener noreferrer">
        <div className="absolute inset-0 bg-gradient-primary translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
        <div className="relative z-10 flex items-center gap-3">
          <Icon className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
          <span className="font-medium">{label}</span>
          <ExternalLink className="h-4 w-4 opacity-60 group-hover:opacity-100 group-hover:translate-x-1 group-hover:scale-110 transition-all duration-300" />
        </div>
      </a>
    </Button>
  );
};