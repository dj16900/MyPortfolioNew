"use client"

import { ExternalLink, Github, ArrowLeft, Code, Database, Brain, Users, Globe, Cpu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

export default function AllProjects() {
  const projects = [
    {
      id: "Speak_Your_Mind",
      title: "Speak_Your_Mind",
      description: "Real-time emotion recognition system",
      fullDescription:
        "Advanced neural network system for detecting human emotions through facial expressions and voice patterns. Uses computer vision and audio processing to provide real-time emotional state analysis.",
      technologies: ["Python", "TensorFlow", "OpenCV", "PyTorch", "NumPy"],
      category: "AI/ML",
      icon: <Brain className="w-6 h-6" />,
      status: "Active",
      year: "2024",
      liveUrl: "https://emotisense-demo.com",
      githubUrl: "https://github.com/sarahmitchell/emotisense-ai",
    },
    {
      id: "adaptiveui-framework",
      title: "AdaptiveUI Framework",
      description: "Intelligent user interface adaptation",
      fullDescription:
        "Machine learning framework that adapts user interfaces based on user behavior and preferences. Implements reinforcement learning to optimize UI layouts and interactions dynamically.",
      technologies: ["React", "Node.js", "ML.js", "TypeScript", "MongoDB"],
      category: "HCI",
      icon: <Users className="w-6 h-6" />,
      status: "Active",
      year: "2023",
      liveUrl: null,
      githubUrl: "https://github.com/sarahmitchell/adaptiveui",
    },
    {
      id: "neurochat",
      title: "NeuroChat",
      description: "Conversational AI with empathy",
      fullDescription:
        "Advanced chatbot that understands context and emotional nuances in human conversation. Incorporates sentiment analysis and emotional intelligence for more natural interactions.",
      technologies: ["Python", "Transformers", "FastAPI", "PostgreSQL", "Docker"],
      category: "NLP",
      icon: <Globe className="w-6 h-6" />,
      status: "Active",
      year: "2023",
      liveUrl: "https://neurochat-demo.com",
      githubUrl: null,
    },
    {
      id: "dataviz-intelligence",
      title: "DataViz Intelligence",
      description: "Automated data visualization generator",
      fullDescription:
        "AI-powered system that automatically generates optimal data visualizations based on dataset characteristics and user intent. Uses machine learning to recommend the best chart types and styling.",
      technologies: ["Python", "D3.js", "React", "Pandas", "Scikit-learn"],
      category: "Data Science",
      icon: <Database className="w-6 h-6" />,
      status: "Completed",
      year: "2022",
      liveUrl: "https://dataviz-demo.com",
      githubUrl: "https://github.com/sarahmitchell/dataviz-intelligence",
    },
    {
      id: "smartlab-assistant",
      title: "SmartLab Assistant",
      description: "Laboratory automation and management system",
      fullDescription:
        "Comprehensive laboratory management system with IoT integration for equipment monitoring, experiment tracking, and automated data collection. Includes predictive maintenance features.",
      technologies: ["Python", "IoT", "Flask", "MySQL", "Raspberry Pi"],
      category: "IoT",
      icon: <Cpu className="w-6 h-6" />,
      status: "Active",
      year: "2023",
      liveUrl: null,
      githubUrl: "https://github.com/sarahmitchell/smartlab-assistant",
    },
    {
      id: "edupersonalize",
      title: "EduPersonalize",
      description: "Personalized learning platform",
      fullDescription:
        "Adaptive learning platform that personalizes educational content based on individual learning patterns and preferences. Uses AI to optimize learning paths and content delivery.",
      technologies: ["React", "Python", "TensorFlow", "PostgreSQL", "AWS"],
      category: "EdTech",
      icon: <Code className="w-6 h-6" />,
      status: "Active",
      year: "2024",
      liveUrl: "https://edupersonalize-demo.com",
      githubUrl: "https://github.com/sarahmitchell/edupersonalize",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F2F2F2] via-[#EAE4D5] to-[#B6B09F] relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-r from-[#EAE4D5]/30 to-[#B6B09F]/20 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-gradient-to-l from-[#B6B09F]/25 to-[#EAE4D5]/20 rounded-full blur-2xl animate-float-reverse"></div>
        <div className="absolute bottom-32 left-1/3 w-80 h-80 bg-gradient-to-t from-[#F2F2F2]/15 to-[#EAE4D5]/25 rounded-full blur-3xl animate-float-diagonal"></div>
      </div>

      {/* Header */}
      <header className="bg-white/20 backdrop-blur-xl border-b border-[#B6B09F]/30 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <Link href="/">
              <Button variant="ghost" size="sm" className="text-[#000000] hover:text-[#B6B09F]">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </Link>
            <h1 className="text-2xl font-bold text-[#000000]">All Projects</h1>
          </div>
        </div>
      </header>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-[#000000] mb-4">Research Projects</h2>
              <p className="text-lg text-[#000000] font-medium">
                Comprehensive collection of research projects spanning AI, HCI, and data science
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <Card
                  key={index}
                  className="bg-white/50 backdrop-blur-xl border-[#B6B09F]/30 glass-morphism-card hover:bg-white/60 transition-all duration-500 hover:scale-105 group"
                >
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <div className="text-[#B6B09F]">{project.icon}</div>
                        <Badge className="bg-white/60 text-[#000000] hover:bg-white/80 hover:text-[#000000] transition-all duration-300 font-medium text-xs">
                          {project.category}
                        </Badge>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge
                          variant={project.status === "Active" ? "default" : "secondary"}
                          className={
                            project.status === "Active"
                              ? "bg-green-500/20 text-green-800 font-medium"
                              : "bg-gray-500/20 text-[#000000] font-medium"
                          }
                        >
                          {project.status}
                        </Badge>
                        <span className="text-sm text-[#000000] font-medium">{project.year}</span>
                      </div>
                    </div>
                    <CardTitle className="text-[#B6B09F] group-hover:text-[#000000] transition-colors font-bold">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-[#000000] font-medium">{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-[#000000] mb-4 font-medium text-sm leading-relaxed">{project.fullDescription}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          className="bg-white/60 text-[#000000] hover:bg-white/80 hover:text-[#000000] transition-all duration-300 font-medium text-xs"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-2 mb-2">
                      {project.liveUrl && (
                        <Button
                          asChild
                          variant="outline"
                          size="sm"
                          className="bg-white/60 text-[#B6B09F] border-[#B6B09F]/50 hover:bg-[#B6B09F] hover:text-white hover:border-[#B6B09F] transition-all duration-300 font-medium flex-1"
                        >
                          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Live Demo
                          </a>
                        </Button>
                      )}
                      {project.githubUrl && (
                        <Button
                          asChild
                          variant="outline"
                          size="sm"
                          className="bg-white/40 text-[#000000] border-[#000000]/50 hover:bg-[#000000] hover:text-white transition-all duration-300 font-medium"
                        >
                          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                            <Github className="w-4 h-4" />
                          </a>
                        </Button>
                      )}
                    </div>
                    <Link href={`/project/${project.id}`}>
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full bg-white/40 text-[#B6B09F] border-[#B6B09F]/50 hover:bg-[#B6B09F] hover:text-white transition-all duration-300 font-medium"
                      >
                        View Details
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
