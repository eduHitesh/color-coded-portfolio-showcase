import { Project } from "@/components/ProjectCard";

export const projects: Project[] = [
  // Featured Projects
  {
    title: "AI-Powered Portfolio",
    description: "Interactive conversational portfolio featuring HiteshBot - a custom AI assistant using RAG pipeline with LlamaIndex and Google Gemini.",
    techStack: ["Python", "FastAPI", "LlamaIndex", "Gemini", "Next.js", "TypeScript"],
    link: "https://github.com/Hiteshydv001/Portfolio",
    featured: true,
    category: "ai-fullstack",
    highlights: ["RAG pipeline implementation", "Real-time AI conversations", "Production deployment"]
  },
  {
    title: "Guard-AI Proctoring System",
    description: "Sophisticated open-source AI proctoring system for secure remote assessments with facial recognition, gaze tracking, and lip movement detection.",
    techStack: ["Python", "FastAPI", "OpenCV", "ML", "Streamlit", "Next.js"],
    link: "https://github.com/Hiteshydv001/Guard-AI-Designing-Remote-Proctoring-System",
    featured: true,
    category: "ai-fullstack",
    highlights: ["Featured in SWOC, JWOC, DWOC", "Real-time facial recognition", "Open source community"]
  },
  {
    title: "Voice Marketing Agent",
    description: "Complete self-hosted framework for building real-time, low-latency AI voice agents for automated marketing calls. Fully containerized.",
    techStack: ["Docker", "Python", "FastAPI", "React", "PostgreSQL", "Ollama"],
    link: "https://github.com/Hiteshydv001/Voice-Marketing-Agent",
    featured: true,
    category: "ai-fullstack",
    highlights: ["Low-latency voice processing", "Docker containerization", "Production-ready framework"]
  },
  {
    title: "DialogWeaver",
    description: "End-to-end orchestration platform for building and deploying intelligent, interruptible voice AI agents with multi-tenant API.",
    techStack: ["Docker", "Python", "FastAPI", "Next.js", "PostgreSQL", "Redis"],
    link: "https://github.com/Hiteshydv001/DialogWeaver",
    featured: true,
    category: "ai-fullstack",
    highlights: ["Multi-tenant architecture", "No-code UI playground", "WebSocket integration"]
  },
  {
    title: "Property Price Predictor",
    description: "End-to-end ML pipeline for predicting real estate prices in India with geospatial feature engineering, achieving 90.3% R² score.",
    techStack: ["Python", "Scikit-learn", "LightGBM", "XGBoost", "Flask"],
    link: "https://github.com/Hiteshydv001/Property_price_predictor",
    featured: true,
    category: "machine-learning",
    highlights: ["90.3% R² accuracy", "Geospatial features", "Production Flask API"]
  },

  // AI & Full-Stack Projects
  {
    title: "Multi-RAG-Agent Tools",
    description: "System using multiple specialized AI agents to automate workflows like text summarization, research article generation, and data sanitization.",
    techStack: ["Python", "Streamlit", "FAISS", "Hugging Face", "Gemini API"],
    link: "https://github.com/Hiteshydv001/Multi-Rag-Agent",
    category: "ai-fullstack"
  },
  {
    title: "LinkedIn Automate Comment",
    description: "AI tool that scrapes LinkedIn posts, performs sentiment analysis, and automatically generates context-aware comments.",
    techStack: ["Python", "Selenium", "Gemini API", "FastAPI", "Playwright"],
    link: "https://github.com/Hiteshydv001/Linkedin-automate-comment",
    category: "ai-fullstack"
  },

  // Machine Learning Projects
  {
    title: "Subway Surfer RL Agent",
    description: "Reinforcement Learning agent using PPO and computer vision to automatically play Subway Surfers game.",
    techStack: ["Python", "Stable-Baselines3", "Gymnasium", "OpenCV"],
    link: "https://github.com/Hiteshydv001/Subway-surfer-rf",
    category: "machine-learning"
  },
  {
    title: "AI Meme Generator",
    description: "Experimental RL project where AI learns comedy by combining meme sounds and images using facial reaction detection as reward.",
    techStack: ["Python", "PPO", "Stable-Baselines3", "MediaPipe"],
    link: "https://github.com/Hiteshydv001/AI-Meme-Generator",
    category: "machine-learning"
  },
  {
    title: "Waste Classification CNN",
    description: "CNN model for classifying waste as Organic or Inorganic from images, built during AICTE & SHELL internship.",
    techStack: ["Python", "TensorFlow", "OpenCV", "Streamlit"],
    link: "https://github.com/Hiteshydv001/Waste-classification-model-cnn",
    category: "machine-learning"
  },
  {
    title: "Text-to-Music AI",
    description: "AI system generating music from text descriptions using PyTorch and Meta's MusicGen model with Gradio interface.",
    techStack: ["Python", "PyTorch", "Transformers", "Audiocraft", "Gradio"],
    link: "https://github.com/Hiteshydv001/Text-to-music-ai",
    category: "machine-learning"
  },
  {
    title: "Image Generation with Stable Diffusion",
    description: "High-quality image generation from text prompts using Stable Diffusion and ComfyUI workflow.",
    techStack: ["Python", "Stable Diffusion", "ComfyUI", "Gradio"],
    link: "https://github.com/Hiteshydv001/Image-Generation-using-Stable-Diffusion-ComfyUI",
    category: "machine-learning"
  },
  {
    title: "RAG YouTube Extractor",
    description: "RAG system using Gemini LLM that integrates with YouTube API to extract and process video information.",
    techStack: ["Python", "Gemini LLM", "RAG", "YouTube API"],
    link: "https://github.com/Hiteshydv001/RAG_Youtube_extractor",
    category: "machine-learning"
  },
  {
    title: "Movie & Music Recommenders",
    description: "Content-based movie recommender and music recommendation system using Spotify API.",
    techStack: ["Python", "Scikit-learn", "Streamlit", "Spotipy"],
    link: "https://github.com/Hiteshydv001/content-based-movie-recommender",
    category: "machine-learning"
  },
  {
    title: "Rock vs Mine Prediction",
    description: "Machine learning model using Logistic Regression to classify underwater objects from sonar data.",
    techStack: ["Python", "Scikit-learn", "Streamlit", "NumPy"],
    link: "https://github.com/Hiteshydv001/rock_mine_prediction",
    category: "machine-learning"
  },
  {
    title: "Spam Classifier",
    description: "Email spam detection system using machine learning techniques with high accuracy classification.",
    techStack: ["Python", "Scikit-learn", "NLP", "Streamlit"],
    link: "https://github.com/Hiteshydv001/Spam-Classifier-using-Machine-codeclause-learning",
    category: "machine-learning"
  },
  {
    title: "Medical Detection Suite",
    description: "Collection of ML projects including mask detection, blindness detection, and kidney disease prediction.",
    techStack: ["Python", "Scikit-learn", "OpenCV", "Medical Imaging"],
    link: "https://github.com/Hiteshydv001/Mask-detection-codeclause",
    category: "machine-learning"
  },

  // Web & Blockchain Development
  {
    title: "AI Trip Planner Agent",
    description: "Web app with AI agent generating personalized travel itineraries using LangChain to integrate flights, hotels, and activities.",
    techStack: ["Python", "FastAPI", "LangChain", "Amadeus API", "SerpAPI"],
    link: "https://github.com/Hiteshydv001/Travel-Agent",
    category: "web-blockchain"
  },
  {
    title: "Land Registry Blockchain",
    description: "Decentralized application using Ethereum smart contracts for secure and immutable land ownership registry.",
    techStack: ["Solidity", "Ethereum", "Truffle", "Web3.py", "Python"],
    link: "https://github.com/Hiteshydv001/Land-Register-blockchain",
    category: "web-blockchain"
  },
  {
    title: "Blockchain Chatbot",
    description: "AI chatbot using Gemini LLM that logs all conversation messages immutably onto local Ethereum blockchain.",
    techStack: ["Python", "Gemini LLM", "Solidity", "Web3.py", "Ganache"],
    link: "https://github.com/Hiteshydv001/Blockchain-chatbot",
    category: "web-blockchain"
  },
  {
    title: "CodeClock VS Code Extension",
    description: "Lightweight VS Code extension for tracking coding time with real-time timer widget and visual analytics.",
    techStack: ["TypeScript", "VS Code Extension API"],
    link: "https://github.com/Hiteshydv001/CodeClock",
    category: "web-blockchain"
  },
  {
    title: "Form Filler AI Extension",
    description: "Chrome extension to auto-fill job application forms using Supabase storage and AI-powered field mapping.",
    techStack: ["Chrome Extension", "FastAPI", "Supabase", "Gemini API"],
    link: "https://github.com/Hiteshydv001/form-filler",
    category: "web-blockchain"
  },
  {
    title: "Outlook Mail Automation",
    description: "Script automating email fetching from Outlook and triggering automated phone call notifications via Twilio.",
    techStack: ["Python", "Selenium", "Twilio", "Automation"],
    link: "https://github.com/Hiteshydv001/outlook_mail_fetch",
    category: "web-blockchain"
  },
  {
    title: "Image to PDF Converter",
    description: "Simple Flask web application for uploading multiple images and converting them into a single PDF file.",
    techStack: ["Python", "Flask", "ReportLab", "Pillow"],
    link: "https://github.com/Hiteshydv001/Image-to-pdf",
    category: "web-blockchain"
  },

  // Open Source Contributions
  {
    title: "Daytona Development Environment",
    description: "Fork of open-source development environment manager that sets up dev environments on any infrastructure with single command.",
    techStack: ["Go", "Docker", "DevOps"],
    link: "https://github.com/Hiteshydv001/daytona",
    category: "open-source"
  },
  {
    title: "DevDisplay Community Platform",
    description: "Fork of global open-source community platform for developers to showcase skills, connect, and collaborate.",
    techStack: ["Next.js", "React", "Community"],
    link: "https://github.com/Hiteshydv001/DevDisplay",
    category: "open-source"
  },
  {
    title: "Jarvis AI Assistant",
    description: "Fork of AI-powered application allowing users to control devices and applications through voice commands.",
    techStack: ["Python", "AI Models", "Streamlit", "MongoDB"],
    link: "https://github.com/Hiteshydv001/Jarvis",
    category: "open-source"
  },
  {
    title: "CrossTL Shader Translator",
    description: "Fork of tool translating native shader languages into CrossGL universal shader language and vice versa.",
    techStack: ["Python", "Shaders", "Graphics"],
    link: "https://github.com/Hiteshydv001/crosstl",
    category: "open-source"
  },
  {
    title: "FastAPI MCP Tools",
    description: "Fork of zero-configuration tool for automatically exposing FastAPI endpoints as Model Context Protocol tools.",
    techStack: ["Python", "FastAPI", "MCP"],
    link: "https://github.com/Hiteshydv001/fastapi_mcp",
    category: "open-source"
  },
  {
    title: "Text Matcher CLI",
    description: "Fork of simple text reuse detection command-line tool for identifying duplicate content.",
    techStack: ["Python", "CLI", "Text Processing"],
    link: "https://github.com/Hiteshydv001/text-matcher",
    category: "open-source"
  }
];