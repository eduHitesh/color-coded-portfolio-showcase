import { ExternalLink, Star } from "lucide-react";
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
    <Card className="group hover:shadow-card transition-all duration-300 hover:-translate-y-1 bg-gradient-card border-border/50">
      <CardContent className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          {project.featured && (
            <Star className="h-5 w-5 text-accent fill-accent" />
          )}
        </div>
        
        <p className="text-muted-foreground text-sm leading-relaxed mb-4">
          {project.description}
        </p>
        
        {project.highlights && (
          <div className="mb-4">
            <ul className="text-xs text-muted-foreground space-y-1">
              {project.highlights.map((highlight, index) => (
                <li key={index} className="flex items-center">
                  <span className="w-1 h-1 bg-primary rounded-full mr-2"></span>
                  {highlight}
                </li>
              ))}
            </ul>
          </div>
        )}
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.techStack.map((tech, index) => (
            <Badge key={index} variant="secondary" className="text-xs">
              {tech}
            </Badge>
          ))}
        </div>
        
        <Button
          variant="outline"
          size="sm"
          className="w-full group/btn hover:bg-primary hover:text-primary-foreground"
          asChild
        >
          <a href={project.link} target="_blank" rel="noopener noreferrer">
            View Project
            <ExternalLink className="h-4 w-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
          </a>
        </Button>
      </CardContent>
    </Card>
  );
};