import { ExternalLink, Star, Github } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export interface Project {
  title: string;
  description: string;
  techStack: string[];
  link: string;
  featured?: boolean;
  category: string;
  highlights?: string[];
}

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <Card className="h-full group relative overflow-hidden glass-effect border-primary/10 hover:border-primary/30 hover:shadow-elegant transition-all duration-500 hover-lift">
      <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-border opacity-60"></div>
      
      <CardContent className="p-6 relative z-10">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-3">
              <h3 className="text-xl font-bold text-foreground group-hover:gradient-text transition-all duration-300">
                {project.title}
              </h3>
              {project.featured && (
                <div className="relative">
                  <Star className="h-5 w-5 text-yellow-500 fill-current animate-pulse-glow" />
                  <div className="absolute inset-0 h-5 w-5 text-yellow-500 opacity-20 animate-ping">
                    <Star className="h-full w-full fill-current" />
                  </div>
                </div>
              )}
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed group-hover:text-foreground/80 transition-colors">
              {project.description}
            </p>
          </div>
        </div>

        {project.highlights && (
          <div className="mb-4">
            <ul className="text-xs text-muted-foreground space-y-2">
              {project.highlights.map((highlight, index) => (
                <li key={index} className="flex items-center gap-3 group-hover:text-foreground/70 transition-colors">
                  <div className="w-2 h-2 bg-gradient-primary rounded-full animate-pulse"></div>
                  <span className="font-medium">{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="flex flex-wrap gap-2 mb-6">
          {project.techStack.map((tech, index) => (
            <Badge 
              key={index} 
              variant="secondary" 
              className="text-xs glass-effect border-primary/20 text-primary hover:bg-primary/10 hover:scale-105 transition-all duration-200 shimmer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {tech}
            </Badge>
          ))}
        </div>

        <Button
          variant="outline"
          className="w-full group/btn glass-effect border-primary/30 hover:bg-gradient-primary hover:text-white hover:border-primary hover:shadow-button transition-all duration-300 relative overflow-hidden"
          asChild
        >
          <a href={project.link} target="_blank" rel="noopener noreferrer">
            <div className="absolute inset-0 bg-gradient-primary translate-x-[-100%] group-hover/btn:translate-x-0 transition-transform duration-500"></div>
            <div className="relative z-10 flex items-center justify-center">
              <Github className="h-4 w-4 mr-2 group-hover/btn:animate-pulse" />
              <span className="font-medium">View Project</span>
              <ExternalLink className="h-4 w-4 ml-2 opacity-60 group-hover/btn:opacity-100 group-hover/btn:translate-x-1 transition-all duration-300" />
            </div>
          </a>
        </Button>
      </CardContent>
    </Card>
  );
};