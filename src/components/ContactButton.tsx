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
      className="flex items-center gap-3 px-6 py-3 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 group"
      asChild
    >
      <a href={href} target="_blank" rel="noopener noreferrer">
        <Icon className="h-5 w-5" />
        <span>{label}</span>
        <ExternalLink className="h-4 w-4 opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
      </a>
    </Button>
  );
};