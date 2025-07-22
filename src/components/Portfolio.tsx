import { useState } from "react";
import { Github, Mail, Linkedin, ExternalLink, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ProjectCard } from "./ProjectCard";
import { ContactButton } from "./ContactButton";
import { projects } from "@/data/projects";

const categories = [
  { id: "featured", label: "Featured", count: 5 },
  { id: "ai-fullstack", label: "AI & Full-Stack", count: 7 },
  { id: "machine-learning", label: "Machine Learning", count: 12 },
  { id: "web-blockchain", label: "Web & Blockchain", count: 8 },
  { id: "open-source", label: "Open Source", count: 6 },
];

export const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("featured");

  const filteredProjects = projects.filter(project => 
    activeCategory === "featured" ? project.featured : project.category === activeCategory
  );

  return (
    <div className="min-h-screen bg-gradient-secondary relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-primary rounded-full opacity-10 animate-float blur-xl"></div>
        <div className="absolute top-60 right-20 w-24 h-24 bg-gradient-primary rounded-full opacity-15 animate-float blur-lg" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-40 left-1/4 w-40 h-40 bg-gradient-primary rounded-full opacity-8 animate-float blur-2xl" style={{ animationDelay: '4s' }}></div>
      </div>
      
      <div className="container mx-auto px-4 py-12 max-w-4xl relative z-10">
        {/* Profile Section */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="relative inline-block mb-8">
            <div className="w-28 h-28 bg-gradient-primary rounded-full flex items-center justify-center text-4xl font-bold text-white shadow-glow relative overflow-hidden group">
              <span className="relative z-10">H</span>
              <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </div>
            <div className="absolute -top-2 -right-2 w-8 h-8 bg-success rounded-full border-4 border-background animate-pulse-glow"></div>
          </div>
          
          <h1 className="text-5xl font-bold gradient-text mb-3 tracking-tight">Hitesh Yadav</h1>
          <p className="text-2xl text-muted-foreground mb-6 font-medium">AI Developer & Full-Stack Engineer</p>
          
          <Badge variant="secondary" className="glass-effect border-primary/30 text-primary px-4 py-2 text-sm font-medium mb-8 hover-lift shimmer">
            Available for opportunities
          </Badge>
          
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed text-lg">
            Building intelligent systems with AI agents, machine learning, and modern web technologies. 
            <span className="gradient-text font-semibold">35+ projects</span> in AI/ML, blockchain, and full-stack development.
          </p>
        </div>

        {/* Contact Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-scale-in" style={{ animationDelay: '0.2s' }}>
          <ContactButton
            icon={Github}
            label="GitHub Profile"
            href="https://github.com/Hiteshydv001"
          />
          <ContactButton
            icon={Mail}
            label="Get in Touch"
            href="mailto:contact@hiteshyadav.dev"
          />
          <ContactButton
            icon={Linkedin}
            label="LinkedIn"
            href="https://linkedin.com/in/hiteshyadav001"
          />
        </div>

        {/* Projects Section */}
        <div className="mb-12 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <h2 className="text-4xl font-bold text-center mb-12 gradient-text">Projects & Work</h2>
          
          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category, index) => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "default" : "outline"}
                onClick={() => setActiveCategory(category.id)}
                className={`relative group transition-all duration-300 ${
                  activeCategory === category.id 
                    ? "bg-gradient-primary text-white shadow-glow border-0 scale-105" 
                    : "glass-effect hover:shadow-soft hover-lift border-primary/20"
                } animate-scale-in`}
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                <span className="relative z-10">{category.label}</span>
                <Badge 
                  variant="secondary" 
                  className={`ml-2 text-xs relative z-10 ${
                    activeCategory === category.id 
                      ? "bg-white/20 text-white border-white/30" 
                      : "bg-primary/10 text-primary border-primary/20"
                  }`}
                >
                  {category.count}
                </Badge>
                {activeCategory === category.id && (
                  <div className="absolute inset-0 bg-gradient-primary rounded-lg opacity-20 group-hover:opacity-30 transition-opacity"></div>
                )}
              </Button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredProjects.map((project, index) => (
              <div 
                key={index} 
                className="animate-fade-in-up hover-lift"
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="text-center pt-12 border-t border-border/40">
          <p className="text-muted-foreground text-lg">
            © 2025 <span className="gradient-text font-semibold">Hitesh Yadav</span>. Built with React & TypeScript.
          </p>
        </div>
      </div>
    </div>
  );
};