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
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Profile Section */}
        <div className="text-center mb-12">
          <div className="relative inline-block mb-6">
            <div className="w-24 h-24 bg-gradient-primary rounded-full flex items-center justify-center text-3xl font-bold text-white shadow-card">
              H
            </div>
            <div className="absolute -top-1 -right-1 w-6 h-6 bg-success rounded-full border-4 border-background"></div>
          </div>
          
          <h1 className="text-4xl font-bold text-foreground mb-2">Hitesh Yadav</h1>
          <p className="text-xl text-muted-foreground mb-4">AI Developer & Full-Stack Engineer</p>
          
          <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 mb-6">
            Available for opportunities
          </Badge>
          
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Building intelligent systems with AI agents, machine learning, and modern web technologies. 
            35+ projects in AI/ML, blockchain, and full-stack development.
          </p>
        </div>

        {/* Contact Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
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
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-center mb-8">Projects & Work</h2>
          
          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "default" : "outline"}
                onClick={() => setActiveCategory(category.id)}
                className={`${
                  activeCategory === category.id 
                    ? "bg-primary text-primary-foreground shadow-button" 
                    : "hover:bg-secondary"
                }`}
              >
                {category.label}
                <Badge variant="secondary" className="ml-2 text-xs">
                  {category.count}
                </Badge>
              </Button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="text-center pt-8 border-t">
          <p className="text-muted-foreground">
            © 2025 Hitesh Yadav. Built with React & TypeScript.
          </p>
        </div>
      </div>
    </div>
  );
};