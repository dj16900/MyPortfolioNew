"use client"

import { ExternalLink, ArrowLeft, BookOpen, Award, Calendar, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

export default function AllPublications() {
  const publications = [
    {
      title: "Adaptive Neural Networks for Real-time Human Emotion Recognition",
      authors: ["S. Mitchell", "J. Chen", "R. Kumar"],
      journal: "Journal of Artificial Intelligence Research",
      year: "2024",
      type: "Journal Article",
      citations: 45,
      abstract:
        "This paper presents a novel approach to real-time emotion recognition using adaptive neural networks that can dynamically adjust their architecture based on input characteristics and environmental conditions.",
      keywords: ["Emotion Recognition", "Neural Networks", "Real-time Processing", "Computer Vision"],
      status: "Published",
    },
    {
      title: "Ethical Considerations in AI-Driven Decision Making Systems",
      authors: ["S. Mitchell", "A. Thompson", "M. Rodriguez"],
      journal: "ACM Computing Surveys",
      year: "2023",
      type: "Survey Paper",
      citations: 78,
      abstract:
        "A comprehensive survey of ethical frameworks and considerations in AI-driven decision making systems, with particular focus on bias mitigation and fairness in algorithmic decisions.",
      keywords: ["AI Ethics", "Decision Making", "Bias Mitigation", "Fairness"],
      status: "Published",
    },
    {
      title: "Interactive Machine Learning for Personalized User Experiences",
      authors: ["S. Mitchell", "L. Wang", "D. Park"],
      journal: "Proceedings of CHI 2023",
      year: "2023",
      type: "Conference Paper",
      citations: 32,
      abstract:
        "We explore interactive machine learning techniques for creating personalized user experiences in web applications, demonstrating significant improvements in user engagement and satisfaction.",
      keywords: ["Interactive ML", "Personalization", "User Experience", "HCI"],
      status: "Published",
    },
    {
      title: "Federated Learning for Privacy-Preserving Healthcare Analytics",
      authors: ["S. Mitchell", "K. Patel", "N. Johnson", "R. Lee"],
      journal: "Nature Machine Intelligence",
      year: "2023",
      type: "Journal Article",
      citations: 67,
      abstract:
        "This work presents a federated learning framework specifically designed for healthcare analytics that preserves patient privacy while enabling collaborative model training across institutions.",
      keywords: ["Federated Learning", "Healthcare", "Privacy", "Medical AI"],
      status: "Published",
    },
    {
      title: "Explainable AI in Critical Decision Support Systems",
      authors: ["S. Mitchell", "B. Anderson", "C. Williams"],
      journal: "IEEE Transactions on AI",
      year: "2022",
      type: "Journal Article",
      citations: 89,
      abstract:
        "We propose novel explainability techniques for AI systems used in critical decision support, focusing on interpretability without sacrificing performance in high-stakes environments.",
      keywords: ["Explainable AI", "Decision Support", "Interpretability", "Critical Systems"],
      status: "Published",
    },
    {
      title: "Multi-modal Learning for Enhanced Human-Computer Interaction",
      authors: ["S. Mitchell", "T. Zhang", "F. Garcia"],
      journal: "Proceedings of ICML 2022",
      year: "2022",
      type: "Conference Paper",
      citations: 54,
      abstract:
        "A comprehensive study on multi-modal learning approaches that combine visual, auditory, and textual inputs to create more natural and intuitive human-computer interfaces.",
      keywords: ["Multi-modal Learning", "HCI", "Interface Design", "Machine Learning"],
      status: "Published",
    },
    {
      title: "Quantum-Inspired Algorithms for Large-Scale Optimization",
      authors: ["S. Mitchell", "Q. Liu", "H. Yamamoto"],
      journal: "Quantum Information Processing",
      year: "2022",
      type: "Journal Article",
      citations: 41,
      abstract:
        "We introduce quantum-inspired classical algorithms for solving large-scale optimization problems, demonstrating superior performance on several benchmark datasets.",
      keywords: ["Quantum Computing", "Optimization", "Algorithms", "Scalability"],
      status: "Published",
    },
    {
      title: "Adaptive User Interfaces: A Machine Learning Approach",
      authors: ["S. Mitchell", "E. Brown"],
      journal: "ACM Transactions on Interactive Intelligent Systems",
      year: "2021",
      type: "Journal Article",
      citations: 95,
      abstract:
        "This paper presents a machine learning framework for creating adaptive user interfaces that automatically adjust based on user behavior patterns and preferences.",
      keywords: ["Adaptive UI", "Machine Learning", "User Modeling", "Interface Design"],
      status: "Published",
    },
    {
      title: "Deep Reinforcement Learning for Autonomous System Navigation",
      authors: ["S. Mitchell", "V. Petrov", "S. Kim"],
      journal: "Robotics and Autonomous Systems",
      year: "2021",
      type: "Journal Article",
      citations: 73,
      abstract:
        "We develop a deep reinforcement learning approach for autonomous navigation in complex environments, achieving state-of-the-art performance in both simulated and real-world scenarios.",
      keywords: ["Reinforcement Learning", "Autonomous Systems", "Navigation", "Robotics"],
      status: "Published",
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
            <h1 className="text-2xl font-bold text-[#000000]">All Publications</h1>
          </div>
        </div>
      </header>

      {/* Publications List */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-[#000000] mb-4">Research Publications</h2>
              <p className="text-lg text-[#000000] font-medium">
                Complete list of peer-reviewed publications and research contributions
              </p>
            </div>

            <div className="space-y-6">
              {publications.map((publication, index) => (
                <Card
                  key={index}
                  className="bg-white/50 backdrop-blur-xl border-[#B6B09F]/30 glass-morphism-card hover:bg-white/60 transition-all duration-500 hover:scale-[1.02]"
                >
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <BookOpen className="w-5 h-5 text-[#B6B09F]" />
                        <Badge className="bg-white/60 text-[#000000] hover:bg-white/80 hover:text-[#000000] transition-all duration-300 font-medium text-xs">
                          {publication.type}
                        </Badge>
                        <Badge className="bg-green-500/20 text-green-800 font-medium text-xs">
                          {publication.status}
                        </Badge>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-[#000000]">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span className="font-medium">{publication.year}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Award className="w-4 h-4" />
                          <span className="font-medium">{publication.citations} citations</span>
                        </div>
                      </div>
                    </div>
                    <CardTitle className="text-[#000000] font-bold leading-tight mb-2">{publication.title}</CardTitle>
                    <CardDescription className="text-[#000000] font-medium">
                      <div className="flex items-center gap-1 mb-1">
                        <Users className="w-4 h-4" />
                        <span>
                          {publication.authors.map((author, i) => (
                            <span key={i}>
                              {author === "S. Mitchell" ? <strong>{author}</strong> : author}
                              {i < publication.authors.length - 1 ? ", " : ""}
                            </span>
                          ))}
                        </span>
                      </div>
                      <span className="text-[#B6B09F] font-semibold">{publication.journal}</span>
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-[#000000] mb-4 font-medium leading-relaxed">{publication.abstract}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {publication.keywords.map((keyword, keywordIndex) => (
                        <Badge
                          key={keywordIndex}
                          className="bg-white/60 text-[#000000] hover:bg-white/80 hover:text-[#000000] transition-all duration-300 font-medium text-xs"
                        >
                          {keyword}
                        </Badge>
                      ))}
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      className="bg-white/60 text-[#B6B09F] border-[#B6B09F]/50 hover:bg-[#B6B09F] hover:text-white hover:border-[#B6B09F] transition-all duration-300 font-medium"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Paper
                    </Button>
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
