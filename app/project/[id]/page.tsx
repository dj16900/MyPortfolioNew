"use client"

import { ExternalLink, Github, ArrowLeft, Calendar, Users, Tag, CheckCircle, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { useParams } from "next/navigation"

export default function ProjectDetail() {
  const params = useParams()
  const projectId = params.id

  // Project data - in a real app, this would come from an API or database
  const projectsData = {
    "emotisense-ai": {
      title: "Speak_Your_Mind",
      description: "Real-time emotion recognition system",
      fullDescription:
        "EmotiSense AI is an advanced neural network system designed for detecting human emotions through facial expressions and voice patterns. The system uses state-of-the-art computer vision and audio processing techniques to provide real-time emotional state analysis with high accuracy.",
      detailedDescription: `
        This project represents a significant advancement in emotion recognition technology, combining multiple modalities to achieve unprecedented accuracy in real-time emotion detection. The system processes both visual and auditory inputs simultaneously, using deep learning architectures specifically designed for temporal data analysis.

        Key innovations include:
        • Adaptive neural network architecture that adjusts based on input quality
        • Multi-modal fusion techniques for improved accuracy
        • Real-time processing capabilities with sub-100ms latency
        • Robust performance across diverse demographic groups
        • Privacy-preserving edge computing implementation

        The system has been tested extensively in various environments and has shown remarkable performance improvements over existing solutions, with applications ranging from healthcare monitoring to human-computer interaction enhancement.
      `,
      technologies: ["Python", "TensorFlow", "OpenCV", "PyTorch", "NumPy", "FastAPI", "Docker"],
      category: "AI/ML",
      status: "Active",
      year: "2024",
      duration: "8 months",
      team: ["Dr. Sarah Mitchell", "Dr. James Chen", "Dr. Raj Kumar", "2 PhD Students"],
      liveUrl: "https://emotisense-demo.com",
      githubUrl: "https://github.com/sarahmitchell/emotisense-ai",
      features: [
        "Real-time emotion detection from video streams",
        "Voice emotion analysis with 95% accuracy",
        "Multi-modal data fusion for enhanced reliability",
        "Privacy-preserving edge computing deployment",
        "RESTful API for easy integration",
        "Comprehensive dashboard for monitoring and analytics",
      ],
      challenges: [
        "Achieving real-time performance while maintaining accuracy",
        "Handling diverse demographic groups and cultural expressions",
        "Balancing model complexity with computational efficiency",
        "Ensuring privacy and data protection compliance",
      ],
      outcomes: [
        "Published 2 peer-reviewed papers",
        "Filed 1 patent application",
        "Deployed in 3 healthcare facilities for pilot testing",
        "Achieved 94% accuracy on benchmark datasets",
      ],
    },
    "adaptiveui-framework": {
      title: "AdaptiveUI Framework",
      description: "Intelligent user interface adaptation",
      fullDescription:
        "AdaptiveUI Framework is a machine learning-powered system that automatically adapts user interfaces based on individual user behavior patterns and preferences. The framework uses reinforcement learning to optimize UI layouts and interactions dynamically.",
      detailedDescription: `
        The AdaptiveUI Framework revolutionizes how users interact with digital interfaces by creating personalized experiences that evolve with user behavior. Using advanced machine learning techniques, the system continuously learns from user interactions to optimize interface elements, layouts, and workflows.

        Core capabilities include:
        • Behavioral pattern recognition and analysis
        • Dynamic UI element repositioning and resizing
        • Personalized content recommendation and prioritization
        • Accessibility adaptation based on user needs
        • A/B testing automation for interface optimization
        • Cross-platform consistency with personalized variations

        The framework has been successfully integrated into multiple web applications, showing significant improvements in user engagement, task completion rates, and overall user satisfaction.
      `,
      technologies: ["React", "Node.js", "ML.js", "TypeScript", "MongoDB", "Redis", "GraphQL"],
      category: "HCI",
      status: "Active",
      year: "2023",
      duration: "12 months",
      team: ["Dr. Sarah Mitchell", "Dr. Lisa Wang", "3 Graduate Students"],
      liveUrl: null,
      githubUrl: "https://github.com/sarahmitchell/adaptiveui",
      features: [
        "Real-time UI adaptation based on user behavior",
        "Machine learning-driven layout optimization",
        "Accessibility-aware interface modifications",
        "Cross-platform compatibility and synchronization",
        "Analytics dashboard for UI performance monitoring",
        "Easy integration with existing React applications",
      ],
      challenges: [
        "Balancing personalization with design consistency",
        "Handling cold start problems for new users",
        "Ensuring real-time performance with complex ML models",
        "Managing user privacy while collecting behavioral data",
      ],
      outcomes: [
        "25% increase in user engagement across test applications",
        "40% reduction in task completion time",
        "Published framework as open-source library",
        "Adopted by 5 major web applications",
      ],
    },
    neurochat: {
      title: "NeuroChat",
      description: "Conversational AI with empathy",
      fullDescription:
        "NeuroChat is an advanced chatbot system that understands context and emotional nuances in human conversation. The system incorporates sentiment analysis and emotional intelligence to create more natural and empathetic interactions.",
      detailedDescription: `
        NeuroChat represents a breakthrough in conversational AI by integrating emotional intelligence into natural language processing. The system goes beyond traditional chatbots by understanding not just what users say, but how they feel, enabling more meaningful and supportive interactions.

        Advanced features include:
        • Context-aware conversation management
        • Real-time sentiment analysis and emotion detection
        • Empathetic response generation
        • Multi-turn dialogue coherence
        • Personality adaptation based on user preferences
        • Crisis detection and appropriate response protocols

        The system has been deployed in customer service, mental health support, and educational contexts, consistently receiving high satisfaction ratings from users who appreciate its understanding and empathetic responses.
      `,
      technologies: ["Python", "Transformers", "FastAPI", "PostgreSQL", "Docker", "NLTK", "spaCy"],
      category: "NLP",
      status: "Active",
      year: "2023",
      duration: "10 months",
      team: ["Dr. Sarah Mitchell", "Dr. David Park", "Dr. Maria Rodriguez", "4 Research Assistants"],
      liveUrl: "https://neurochat-demo.com",
      githubUrl: null,
      features: [
        "Context-aware conversational responses",
        "Real-time emotion detection and sentiment analysis",
        "Empathetic response generation",
        "Multi-language support",
        "Crisis intervention capabilities",
        "Customizable personality traits",
      ],
      challenges: [
        "Maintaining conversation context over long dialogues",
        "Generating appropriate empathetic responses",
        "Handling sensitive topics and crisis situations",
        "Balancing helpfulness with appropriate boundaries",
      ],
      outcomes: [
        "Deployed in 10+ customer service applications",
        "95% user satisfaction rating in pilot studies",
        "Reduced customer service response time by 60%",
        "Featured in 3 major AI conferences",
      ],
    },
  }

  const project = projectsData[projectId as keyof typeof projectsData]

  if (!project) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#F2F2F2] via-[#EAE4D5] to-[#B6B09F] flex items-center justify-center">
        <Card className="bg-white/50 backdrop-blur-xl border-[#B6B09F]/30 p-8">
          <CardContent className="text-center">
            <h1 className="text-2xl font-bold text-[#000000] mb-4">Project Not Found</h1>
            <p className="text-[#000000] mb-4">The requested project could not be found.</p>
            <Link href="/projects">
              <Button className="bg-[#B6B09F] hover:bg-[#B6B09F]/90 text-white">Back to Projects</Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    )
  }

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
            <Link href="/projects">
              <Button variant="ghost" size="sm" className="text-[#000000] hover:text-[#B6B09F]">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Projects
              </Button>
            </Link>
            <h1 className="text-2xl font-bold text-[#000000]">{project.title}</h1>
          </div>
        </div>
      </header>

      {/* Project Detail */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Hero Section */}
            <Card className="bg-white/50 backdrop-blur-xl border-[#B6B09F]/30 glass-morphism-card mb-8">
              <CardHeader>
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <CardTitle className="text-3xl font-bold text-[#000000] mb-2">{project.title}</CardTitle>
                    <CardDescription className="text-lg text-[#000000] font-medium">
                      {project.description}
                    </CardDescription>
                  </div>
                  <Badge className="bg-[#B6B09F]/20 text-[#000000] font-medium">{project.category}</Badge>
                </div>

                <div className="grid md:grid-cols-4 gap-4 mb-6">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-[#B6B09F]" />
                    <div>
                      <p className="text-sm font-medium text-[#000000]">Year</p>
                      <p className="text-sm text-[#000000]">{project.year}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-[#B6B09F]" />
                    <div>
                      <p className="text-sm font-medium text-[#000000]">Duration</p>
                      <p className="text-sm text-[#000000]">{project.duration}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-[#B6B09F]" />
                    <div>
                      <p className="text-sm font-medium text-[#000000]">Status</p>
                      <p className="text-sm text-[#000000]">{project.status}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-[#B6B09F]" />
                    <div>
                      <p className="text-sm font-medium text-[#000000]">Team Size</p>
                      <p className="text-sm text-[#000000]">{project.team.length} members</p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  {project.liveUrl && (
                    <Button asChild className="bg-[#B6B09F] hover:bg-[#B6B09F]/90 text-white font-medium">
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
                      className="bg-white/60 text-[#000000] border-[#000000]/50 hover:bg-[#000000] hover:text-white hover:border-[#000000] transition-all duration-300 font-medium"
                    >
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        View Code
                      </a>
                    </Button>
                  )}
                </div>
              </CardHeader>
            </Card>

            {/* Description */}
            <Card className="bg-white/50 backdrop-blur-xl border-[#B6B09F]/30 glass-morphism-card mb-8">
              <CardHeader>
                <CardTitle className="text-[#000000] font-bold">Project Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-[#000000] font-medium leading-relaxed mb-4">{project.fullDescription}</p>
                <div className="whitespace-pre-line text-[#000000] font-medium leading-relaxed">
                  {project.detailedDescription}
                </div>
              </CardContent>
            </Card>

            {/* Technologies */}
            <Card className="bg-white/50 backdrop-blur-xl border-[#B6B09F]/30 glass-morphism-card mb-8">
              <CardHeader>
                <CardTitle className="text-[#000000] font-bold flex items-center gap-2">
                  <Tag className="w-5 h-5 text-[#B6B09F]" />
                  Technologies Used
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <Badge
                      key={index}
                      className="bg-white/60 text-[#000000] hover:bg-white/80 hover:text-[#000000] transition-all duration-300 font-medium"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Features */}
            <Card className="bg-white/50 backdrop-blur-xl border-[#B6B09F]/30 glass-morphism-card mb-8">
              <CardHeader>
                <CardTitle className="text-[#000000] font-bold">Key Features</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-[#B6B09F] mt-1 flex-shrink-0" />
                      <span className="text-[#000000] font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Team */}
            <Card className="bg-white/50 backdrop-blur-xl border-[#B6B09F]/30 glass-morphism-card mb-8">
              <CardHeader>
                <CardTitle className="text-[#000000] font-bold flex items-center gap-2">
                  <Users className="w-5 h-5 text-[#B6B09F]" />
                  Research Team
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-2">
                  {project.team.map((member, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-[#B6B09F] rounded-full"></div>
                      <span className="text-[#000000] font-medium">{member}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Challenges & Outcomes */}
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-white/50 backdrop-blur-xl border-[#B6B09F]/30 glass-morphism-card">
                <CardHeader>
                  <CardTitle className="text-[#000000] font-bold">Challenges</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {project.challenges.map((challenge, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-[#000000] font-medium">{challenge}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-white/50 backdrop-blur-xl border-[#B6B09F]/30 glass-morphism-card">
                <CardHeader>
                  <CardTitle className="text-[#000000] font-bold">Outcomes</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {project.outcomes.map((outcome, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        <span className="text-[#000000] font-medium">{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
