"use client";

import {
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  BookOpen,
  Award,
  Users,
  GraduationCap,
  Code,
  Cpu,
  Database,
  Globe,
  Send,
  Github,
  CheckCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import SidebarMobileNav from "./SidebarMobileNav";
import { useState } from "react";

export default function ProfessorPortfolio() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setShowSuccess(true);
        form.reset();

        // Hide success message after 5 seconds
        setTimeout(() => {
          setShowSuccess(false);
        }, 5000);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };
  const featuredProjects = [
  {
    id: "slideinsight",
    title: "Slide Insight",
    description: "AI-powered presentation evaluator",
    fullDescription:
      "An intelligent tool that provides real-time feedback on presentation slides and delivery using NLP, speech recognition, and visual design analysis. Helps users enhance communication and readiness through simulated interviews and slide assessment.",
    technologies: ["Python", "OpenCV", "SpeechRecognition", "NLP"],
    liveUrl: null,
    githubUrl: null, // add your GitHub link if available
  },
  {
    id: "speakyourmind",
    title: "Speak Your Mind",
    description: "Voice-enabled mental health chatbot",
    fullDescription:
      "A mental wellness chatbot using speech-to-text and emotion detection (CardiffNLP RoBERTa) to provide real-time, non-judgmental emotional feedback. Designed to support users through early emotional intervention with ethical AI practices.",
    technologies: ["Python", "Transformers", "SpeechRecognition"],
    liveUrl: null,
    githubUrl: null, // add your GitHub link if available
  },
  {
    id: "efficient-llm",
    title: "Efficient LLM Pretraining",
    description: "Optimized LLM training framework",
    fullDescription:
      "A research-driven approach to building compact, domain-specific language models using Latent Attention, Mixture of Experts, and Multi-Token Prediction. Includes quantization, custom training loops, and lightweight deployment via distillation.",
    technologies: ["Python", "Transformers", "PyTorch"],
    liveUrl: null,
    githubUrl: null, // add your GitHub link if available
  },
];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-[#F2F2F2] via-[#EAE4D5] to-[#B6B09F] relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-r from-[#EAE4D5]/30 to-[#B6B09F]/20 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-gradient-to-l from-[#B6B09F]/25 to-[#EAE4D5]/20 rounded-full blur-2xl animate-float-reverse"></div>
        <div className="absolute bottom-32 left-1/3 w-80 h-80 bg-gradient-to-t from-[#F2F2F2]/15 to-[#EAE4D5]/25 rounded-full blur-3xl animate-float-diagonal"></div>
        <div className="absolute top-1/2 right-10 w-48 h-48 bg-gradient-to-br from-[#B6B09F]/30 to-[#EAE4D5]/20 rounded-full blur-2xl animate-pulse-slow"></div>
      </div>

      {/* Refraction Overlay */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/3 to-transparent animate-refraction"></div>
      </div>

      {/* Header */}
      <header className="bg-white/20 backdrop-blur-xl border-b border-[#B6B09F]/30 fixed top-0 left-0 w-full z-50 glass-morphism">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex justify-between items-center">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="text-2xl font-bold text-[#000000] drop-shadow-sm bg-transparent border-none p-0 m-0 focus:outline-none focus:ring-0 hover:bg-transparent active:bg-transparent"
              aria-label="Scroll to top"
              type="button"
              style={{ boxShadow: "none" }}>
              Mr. Debjit Ghosh
            </button>
            {/* Desktop Nav */}
            <div className="hidden md:flex space-x-6">
              <a
                href="#about"
                className="text-[#000000] hover:text-[#B6B09F] hover:bg-white/20 px-3 py-1 rounded-md transition-all duration-300 hover:drop-shadow-sm font-medium">
                About
              </a>
              <a
                href="#education"
                className="text-[#000000] hover:text-[#B6B09F] hover:bg-white/20 px-3 py-1 rounded-md transition-all duration-300 hover:drop-shadow-sm font-medium">
                Education
              </a>
              <a
                href="#experience"
                className="text-[#000000] hover:text-[#B6B09F] hover:bg-white/20 px-3 py-1 rounded-md transition-all duration-300 hover:drop-shadow-sm font-medium">
                Experience
              </a>
              <a
                href="#research"
                className="text-[#000000] hover:text-[#B6B09F] hover:bg-white/20 px-3 py-1 rounded-md transition-all duration-300 hover:drop-shadow-sm font-medium">
                Research
              </a>
              <a
                href="#technologies"
                className="text-[#000000] hover:text-[#B6B09F] hover:bg-white/20 px-3 py-1 rounded-md transition-all duration-300 hover:drop-shadow-sm font-medium">
                Tech
              </a>
              <a
                href="#projects"
                className="text-[#000000] hover:text-[#B6B09F] hover:bg-white/20 px-3 py-1 rounded-md transition-all duration-300 hover:drop-shadow-sm font-medium">
                Projects
              </a>
              {/*<a
                href="#publications"
                className="text-[#000000] hover:text-[#B6B09F] hover:bg-white/20 px-3 py-1 rounded-md transition-all duration-300 hover:drop-shadow-sm font-medium">
                Publications
              </a>
              <a
                href="/notes"
                className="text-[#000000] hover:text-[#B6B09F] hover:bg-white/20 px-3 py-1 rounded-md transition-all duration-300 hover:drop-shadow-sm font-medium">
                Notes
              </a>*/}
              <a
                href="#image-gallery"
                className="text-[#000000] hover:text-[#B6B09F] hover:bg-white/20 px-3 py-1 rounded-md transition-all duration-300 hover:drop-shadow-sm font-medium">
                Gallery
              </a>
              <a
                href="#contact"
                className="text-[#000000] hover:text-[#B6B09F] hover:bg-white/20 px-3 py-1 rounded-md transition-all duration-300 hover:drop-shadow-sm font-medium">
                Contact
              </a>
            </div>
            {/* Mobile Nav */}
            <div className="md:hidden">
              <SidebarMobileNav />
            </div>
          </nav>
        </div>
      </header>

      {/* Main Content Scrollable */}
      <main className="flex-1 focus:outline-none pt-[120px]">
        {/* Hero Section */}
        <section className="py-20 relative">
          <div className="container mx-auto px-2">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="lg:w-1/2 relative">
                <div className="relative group">
                  <div className="w-[60%] h-[60%] rounded-full bg-white/40 backdrop-blur-xl border-2 border-[#B6B09F]/40 overflow-hidden mx-auto glass-morphism-strong group-hover:scale-105 transition-all duration-500">
                    <img
                      src="https://media.licdn.com/dms/image/v2/D5603AQHBSq6re3UpSA/profile-displayphoto-crop_800_800/B56ZeNKXDDHQAI-/0/1750419993563?e=1756339200&v=beta&t=J47Gk5P_EvKS_3tC94Im64eyKtP7M8iHJaX3sIwjiwE"
                      alt="Professor Sarah Mitchell"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-4 -right-4 bg-[#B6B09F] text-white p-3 rounded-full glass-morphism animate-bounce-slow">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2 text-center lg:text-left">
                <h2 className="text-4xl sm:text-5xl font-bold text-[#000000] mb-4 animate-fade-in-up drop-shadow-sm">
                  Mr. Debjit Ghosh
                </h2>
                <p className="text-xl text-[#000000] mb-6 animate-fade-in-up animation-delay-200 font-semibold">
                  Assistant Professor of Computer Science
                </p>
                <p className="text-lg text-[#000000] mb-8 leading-relaxed animate-fade-in-up animation-delay-400 font-medium text-justify">
                  I'm Debjit Ghosh, an educator, developer, and lifelong learner
                  passionate about bridging the gap between academia and
                  industry. My journey revolves around exploring cutting-edge
                  technologies and empowering others with knowledge.
                </p>
                <div className="flex flex-wrap gap-3 justify-center lg:justify-start animate-fade-in-up animation-delay-600">
                  <Badge
                    variant="secondary"
                    className="bg-white/50 text-[#000000] backdrop-blur-sm border border-[#B6B09F]/30 hover:scale-105 hover:bg-white/70 hover:text-[#000000] transition-all duration-300 font-medium">
                    Deep Learning
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="bg-white/50 text-[#000000] backdrop-blur-sm border border-[#B6B09F]/30 hover:scale-105 hover:bg-white/70 hover:text-[#000000] transition-all duration-300 font-medium">
                    Natural Language Processing
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="bg-white/50 text-[#000000] backdrop-blur-sm border border-[#B6B09F]/30 hover:scale-105 hover:bg-white/70 hover:text-[#000000] transition-all duration-300 font-medium">
                    HCL Tech
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="bg-white/50 text-[#000000] backdrop-blur-sm border border-[#B6B09F]/30 hover:scale-105 hover:bg-white/70 hover:text-[#000000] transition-all duration-300 font-medium">
                    Adamas University
                  </Badge>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section
          id="about"
          className="py-16 bg-white/20 backdrop-blur-xl relative scroll-mt-32">
          <div className="container mx-auto px-4">
            <h3 className="text-3xl font-bold text-center text-[#000000] mb-12 animate-fade-in">
              About Me
            </h3>
            <div className="max-w-4xl mx-auto">
              <Card className="bg-white/50 backdrop-blur-xl border-[#B6B09F]/30 glass-morphism-card hover:bg-white/60 transition-all duration-500">
                <CardContent className="p-8">
                  <p className="text-[#000000] leading-relaxed mb-6 font-medium text-justify">
                    My professional career began as a Software Engineer 2 at HCL
                    Technologies, where I contributed to innovative solutions in
                    Python, Machine Learning, Artificial Intelligence, and
                    Natural Language Processing. I worked on projects like
                    Recommendation Systems, optimizing ML algorithms, and
                    integrating Generative AI capabilities.
                  </p>
                  <p className="text-[#000000] leading-relaxed font-medium text-justify">
                    Currently, as an Assistant Professor in Computer Science at
                    Adamas University, I combine industry insights with academic
                    rigor. I teach courses such as Python Programming, Machine
                    Learning, Data Structures, exploratory data analysis and
                    mentor students on various live projects. I also collaborate
                    on industry-level online course development, bridging
                    academic and practical applications.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="py-16 relative scroll-mt-32">
          <div className="container mx-auto px-4">
            <h3 className="text-3xl font-bold text-center text-[#000000] mb-12">
              Education
            </h3>
            <div className="max-w-4xl mx-auto space-y-6">
              <Card className="bg-white/50 backdrop-blur-xl border-[#B6B09F]/30 glass-morphism-card hover:bg-white/60 transition-all duration-500 hover:scale-[1.02]">
                <CardHeader>
                  <CardTitle className="text-[#B6B09F] font-bold">
                    M.Tech in Computer Science and Engineering (CGPA : 9.38)
                  </CardTitle>
                  <CardDescription className="text-[#000000] font-medium">
                    Indian Institute of Engineering Science and Technology
                    (IIEST), Shibpur 
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="bg-white/50 backdrop-blur-xl border-[#B6B09F]/30 glass-morphism-card hover:bg-white/60 transition-all duration-500 hover:scale-[1.02]">
                <CardHeader>
                  <CardTitle className="text-[#B6B09F] font-bold">
                    B.Tech in Computer Science and Engineering (CGPA : 8.76)
                  </CardTitle>
                  <CardDescription className="text-[#000000] font-medium">
                    Academy of Technology 
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-16 relative scroll-mt-32">
          <div className="container mx-auto px-4">
            <h3 className="text-3xl font-bold text-center text-[#000000] mb-12">
              Experience
            </h3>
            <div className="max-w-4xl mx-auto space-y-6">
              {/* Assistant Professor */}
              <Card className="bg-white/50 backdrop-blur-xl border-[#B6B09F]/30 glass-morphism-card hover:bg-white/60 transition-all duration-500">
                <CardHeader>
                  <CardTitle className="text-[#B6B09F] font-bold">
                    Assistant Professor of Computer Science
                  </CardTitle>
                  <CardDescription className="text-[#000000] font-medium">
                    Adamas University • Nov 2024 – Present • Kolkata, India
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 text-[#000000] font-medium space-y-1">
                    <li>
                      Delivering undergraduate courses to B.Tech and BCA students on core subjects such as Machine Learning, Artificial Intelligence, Exploratory Data Analysis using Python, Data Structures & Algorithms, and Full Stack Development.
                    </li>
                    <li>
                      Selected as the sole representative from West Bengal among 46 professors nationwide in Computer Science for the prestigious CEEE program at IIT Delhi.
                    </li>
                    <li>
                      Guiding final-year students through NLP-based projects including automated PowerPoint/presentation evaluation systems and a mental health chatbot.
                    </li>
                    <li>
                      Conducting internal internship training sessions for final-year B.Tech students, focusing on current industry trends and practical skill development.
                    </li>
                    <li>
                      Collaborating with a team of four on deep learning research projects, specifically centered around Transformer architectures.
                    </li>
                  </ul>
                </CardContent>
              </Card>
              {/* HCLTech Experience */}
              <Card className="bg-white/50 backdrop-blur-xl border-[#B6B09F]/30 glass-morphism-card hover:bg-white/60 transition-all duration-500">
                <CardHeader>
                  <CardTitle className="text-[#B6B09F] font-bold">
                    Software Engineer II
                  </CardTitle>
                  <CardDescription className="text-[#000000] font-medium">
                    HCLTech • Aug 2022 – Nov 2024 • Noida, India
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 text-[#000000] font-medium space-y-1">
                    <li>
                      Worked on the DRYiCE iAutomate (HCL Software - In House) Product Development team which leverages Machine Learning & Natural Language Process for understanding the most common issues, recommends the relevant solutions & resolves them autonomously.
                    </li>
                    <li>
                      Conducted data analysis, feature engineering to optimise the ML models and proprietary algorithms by 17%.
                    </li>
                    <li>
                      Developed Recommendation Systems and Ticket Automation solutions using Python.
                    </li>
                    <li>
                      Integrated generative AI capabilities into products to enhance functionality & innovation by 23%, ensuring product development aligns with high security and development standards.
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Research Section */}
        <section id="research" className="py-16 bg-white/20 backdrop-blur-xl relative scroll-mt-32">
          <div className="container mx-auto px-4">
            <h3 className="text-3xl font-bold text-center text-[#000000] mb-12">
              Research Interests
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              
              <Card className="bg-white/50 backdrop-blur-xl border-[#B6B09F]/30 glass-morphism-card hover:bg-white/60 transition-all duration-500 hover:scale-105 hover:rotate-1">
                <CardHeader>
                  <BookOpen className="w-8 h-8 text-[#B6B09F] mb-2" />
                  <CardTitle className="text-[#000000] font-bold">
                    Deep Learning
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-[#000000] font-medium text-justify">
                    Exploration of deep neural networks, convolutional and recurrent architectures, and their applications in complex pattern recognition and decision-making tasks.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-white/50 backdrop-blur-xl border-[#B6B09F]/30 glass-morphism-card hover:bg-white/60 transition-all duration-500 hover:scale-105 hover:rotate-1">
                <CardHeader>
                  <Award className="w-8 h-8 text-[#B6B09F] mb-2" />
                  <CardTitle className="text-[#000000] font-bold">
                    Natural Language Processing
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-[#000000] font-medium text-justify">
                    Working with large-scale language models, sentiment analysis, named entity recognition, and conversational AI for human-computer interaction.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/50 backdrop-blur-xl border-[#B6B09F]/30 glass-morphism-card hover:bg-white/60 transition-all duration-500 hover:scale-105 hover:-rotate-1">
                <CardHeader>
                  <Users className="w-8 h-8 text-[#B6B09F] mb-2" />
                  <CardTitle className="text-[#000000] font-bold">
                    Evolutionary Algorithms
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-[#000000] font-medium text-justify">
                    Focused on bio-inspired optimization techniques such as Genetic Algorithms and Genetic Programming for solving NP-hard and combinatorial problems in intelligent systems.
                  </p>
                </CardContent>
              </Card>
              
            </div>
          </div>
        </section>


        {/* Technologies Section */}
        <section id="technologies" className="py-16 relative scroll-mt-32">
          <div className="container mx-auto px-4">
            <h3 className="text-3xl font-bold text-center text-[#000000] mb-12">
              Technologies & Tools
            </h3>
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                
                <Card className="bg-white/50 backdrop-blur-xl border-[#B6B09F]/30 glass-morphism-card hover:bg-white/60 transition-all duration-500 hover:scale-110">
                  <CardHeader className="text-center">
                    <Code className="w-12 h-12 text-[#B6B09F] mx-auto mb-2" />
                    <CardTitle className="text-lg text-[#000000] font-bold">
                      Programming Languages
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <div className="flex flex-wrap gap-2 justify-center">
                      <Badge className="bg-white/60 text-[#000000] font-medium hover:bg-white/70 transition-all duration-300">
                        Python
                      </Badge>
                      <Badge className="bg-white/60 text-[#000000] font-medium hover:bg-white/70 transition-all duration-300">
                        C++
                      </Badge>
                      <Badge className="bg-white/60 text-[#000000] font-medium hover:bg-white/70 transition-all duration-300">
                        C#
                      </Badge>
                      <Badge className="bg-white/60 text-[#000000] font-medium hover:bg-white/70 transition-all duration-300">
                        C
                      </Badge>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white/50 backdrop-blur-xl border-[#B6B09F]/30 glass-morphism-card hover:bg-white/60 transition-all duration-500 hover:scale-110">
                  <CardHeader className="text-center">
                    <Cpu className="w-12 h-12 text-[#B6B09F] mx-auto mb-2" />
                    <CardTitle className="text-lg text-[#000000] font-bold">
                      AI/ML Frameworks
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <div className="flex flex-wrap gap-2 justify-center">
                      <Badge className="bg-white/60 text-[#000000] font-medium hover:bg-white/70 transition-all duration-300">
                        PyTorch
                      </Badge>
                      <Badge className="bg-white/60 text-[#000000] font-medium hover:bg-white/70 transition-all duration-300">
                        TensorFlow
                      </Badge>
                      <Badge className="bg-white/60 text-[#000000] font-medium hover:bg-white/70 transition-all duration-300">
                        Scikit-learn
                      </Badge>
                      <Badge className="bg-white/60 text-[#000000] font-medium hover:bg-white/70 transition-all duration-300">
                        OpenCV
                      </Badge>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white/50 backdrop-blur-xl border-[#B6B09F]/30 glass-morphism-card hover:bg-white/60 transition-all duration-500 hover:scale-110">
                  <CardHeader className="text-center">
                    <Database className="w-12 h-12 text-[#B6B09F] mx-auto mb-2" />
                    <CardTitle className="text-lg text-[#000000] font-bold">
                      Data & Tools
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <div className="flex flex-wrap gap-2 justify-center">
                      <Badge className="bg-white/60 text-[#000000] font-medium hover:bg-white/70 transition-all duration-300">
                        NumPy
                      </Badge>
                      <Badge className="bg-white/60 text-[#000000] font-medium hover:bg-white/70 transition-all duration-300">
                        Pandas
                      </Badge>
                      <Badge className="bg-white/60 text-[#000000] font-medium hover:bg-white/70 transition-all duration-300">
                        Jupyter
                      </Badge>
                      <Badge className="bg-white/60 text-[#000000] font-medium hover:bg-white/70 transition-all duration-300">
                        Google Colab
                      </Badge>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white/50 backdrop-blur-xl border-[#B6B09F]/30 glass-morphism-card hover:bg-white/60 transition-all duration-500 hover:scale-110">
                  <CardHeader className="text-center">
                    <Globe className="w-12 h-12 text-[#B6B09F] mx-auto mb-2" />
                    <CardTitle className="text-lg text-[#000000] font-bold">
                      Visualization & Deployment
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <div className="flex flex-wrap gap-2 justify-center">
                      <Badge className="bg-white/60 text-[#000000] font-medium hover:bg-white/70 transition-all duration-300">
                        Matplotlib
                      </Badge>
                      <Badge className="bg-white/60 text-[#000000] font-medium hover:bg-white/70 transition-all duration-300">
                        Seaborn
                      </Badge>
                      <Badge className="bg-white/60 text-[#000000] font-medium hover:bg-white/70 transition-all duration-300">
                        Streamlit
                      </Badge>
                      <Badge className="bg-white/60 text-[#000000] font-medium hover:bg-white/70 transition-all duration-300">
                        Flask
                      </Badge>
                    </div>
                  </CardContent>
                </Card>

              </div>
            </div>
          </div>
        </section>


        {/* Projects Section */}
        <section
          id="projects"
          className="py-16 bg-white/20 backdrop-blur-xl relative scroll-mt-32">
          <div className="container mx-auto px-4">
            <h3 className="text-3xl font-bold text-center text-[#000000] mb-12">
              Featured Projects
            </h3>
            <div className="max-w-4xl mx-auto space-y-6">
              {featuredProjects.map((project, index) => (
                <Card
                  key={index}
                  className="bg-white/50 backdrop-blur-xl border-[#B6B09F]/30 glass-morphism-card hover:bg-white/60 transition-all duration-500 hover:scale-105 group">
                  <CardHeader>
                    <CardTitle className="text-[#B6B09F] group-hover:text-[#000000] transition-colors font-bold">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-[#000000] font-medium">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-[#000000] mb-4 font-medium text-justify">
                      {project.fullDescription}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          className="bg-white/60 text-[#000000] font-medium hover:bg-white/70 hover:text-[#000000] transition-all duration-300">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      {project.liveUrl && (
                        <Button
                          asChild
                          variant="outline"
                          size="sm"
                          className="bg-white/60 text-[#B6B09F] border-[#B6B09F]/50 hover:bg-[#B6B09F] hover:text-white hover:border-[#B6B09F] transition-all duration-300 font-medium flex-1">
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer">
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
                          className="bg-white/60 text-[#000000] border-[#000000]/50 hover:bg-[#000000] hover:text-white hover:border-[#000000] transition-all duration-300 font-medium">
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer">
                            <Github className="w-4 h-4" />
                          </a>
                        </Button>
                      )}
                      {/*<Link href={`/project/${project.id}`}>
                        <Button
                          variant="outline"
                          size="sm"
                          className="bg-white/60 text-[#B6B09F] border-[#B6B09F]/50 hover:bg-[#B6B09F] hover:text-white hover:border-[#B6B09F] transition-all duration-300 font-medium">
                          View Details
                        </Button>
                      </Link>*/}
                    </div>
                  </CardContent>
                </Card>
              ))}

              {/*
              <div className="text-center flex justify-center">
                <Link href="/projects">
                  <Button className="bg-[#B6B09F] hover:bg-[#B6B09F]/90 text-white transition-all duration-300 hover:scale-105 font-medium px-8 py-3">
                    View More Projects
                  </Button>
                </Link>
              </div>
              */}

            </div>
          </div>
        </section>

        {/* Publications Section }
        <section id="publications" className="py-16 relative scroll-mt-32">
          <div className="container mx-auto px-4">
            <h3 className="text-3xl font-bold text-center text-[#000000] mb-12">
              Recent Publications
            </h3>
            <div className="max-w-4xl mx-auto space-y-6 mb-8">
              <Card className="bg-white/50 backdrop-blur-xl border-[#B6B09F]/30 glass-morphism-card hover:bg-white/60 transition-all duration-500">
                <CardContent className="p-6">
                  <h4 className="font-bold text-[#000000] mb-2">
                    "Adaptive Neural Networks for Real-time Human Emotion
                    Recognition"
                  </h4>
                  <p className="text-[#000000] mb-2 font-medium">
                    <strong>S. Mitchell</strong>, J. Chen, R. Kumar
                  </p>
                  <p className="text-sm text-[#000000] mb-3 font-medium">
                    Journal of Artificial Intelligence Research, 2024
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="bg-white/60 text-[#B6B09F] border-[#B6B09F]/50 hover:bg-[#B6B09F] hover:text-white hover:border-[#B6B09F] transition-all duration-300 font-medium">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Paper
                  </Button>
                </CardContent>
              </Card>
              <Card className="bg-white/50 backdrop-blur-xl border-[#B6B09F]/30 glass-morphism-card hover:bg-white/60 transition-all duration-500">
                <CardContent className="p-6">
                  <h4 className="font-bold text-[#000000] mb-2">
                    "Ethical Considerations in AI-Driven Decision Making
                    Systems"
                  </h4>
                  <p className="text-[#000000] mb-2 font-medium">
                    <strong>S. Mitchell</strong>, A. Thompson, M. Rodriguez
                  </p>
                  <p className="text-sm text-[#000000] mb-3 font-medium">
                    ACM Computing Surveys, 2023
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="bg-white/60 text-[#B6B09F] border-[#B6B09F]/50 hover:bg-[#B6B09F] hover:text-white hover:border-[#B6B09F] transition-all duration-300 font-medium">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Paper
                  </Button>
                </CardContent>
              </Card>
              <Card className="bg-white/50 backdrop-blur-xl border-[#B6B09F]/30 glass-morphism-card hover:bg-white/60 transition-all duration-500">
                <CardContent className="p-6">
                  <h4 className="font-bold text-[#000000] mb-2">
                    "Interactive Machine Learning for Personalized User
                    Experiences"
                  </h4>
                  <p className="text-[#000000] mb-2 font-medium">
                    <strong>S. Mitchell</strong>, L. Wang, D. Park
                  </p>
                  <p className="text-sm text-[#000000] mb-3 font-medium">
                    Proceedings of CHI 2023
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="bg-white/60 text-[#B6B09F] border-[#B6B09F]/50 hover:bg-[#B6B09F] hover:text-white hover:border-[#B6B09F] transition-all duration-300 font-medium">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Paper
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div className="text-center flex justify-center items-center">
              <Link href="/publications">
                <Button className="bg-[#B6B09F] hover:bg-[#B6B09F]/90 text-white transition-all duration-300 hover:scale-105 font-medium px-8 py-3">
                  View More Publications
                </Button>
              </Link>
            </div>
          </div>
        </section>*/}

        {/* Image Gallery Section */}
        <section
          id="image-gallery"
          className="py-16 bg-white/20 backdrop-blur-xl relative scroll-mt-32">
          <div className="container mx-auto px-4">
            <div className="bg-white shadow-lg rounded-lg p-8 mb-8">
              <h3 className="text-3xl font-bold text-center text-[#000000] mb-12">
                Image Gallery
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow duration-300">
                  <img
                    src="/Image2.jpeg"
                    //alt="Research Conference Presentation"
                    className="w-full h-80 object-cover rounded-md mb-4 bg-gray-200"
                    onError={(e) => {
                      e.currentTarget.src =
                        "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZGRkIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtc2l6ZT0iMTgiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5SZXNlYXJjaCBDb25mZXJlbmNlPC90ZXh0Pjwvc3ZnPg==";
                    }}
                  />
                  {false && (
  <h4 className="text-lg font-bold text-[#000000] mb-2">
    Research Conference
  </h4>
)}
                  <p className="text-sm text-[#000000] text-justify">
                    Delivered a session on Neural Networks at IIT Delhi, engaging with scholars on the future of deep learning and neural computation.
                  </p>
                </div>
                <div className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow duration-300">
                  <img
                    src="/Image1.jpeg"
                    //alt="Laboratory Work"
                    className="w-full h-80 object-cover rounded-md mb-4 bg-gray-200"
                    onError={(e) => {
                      e.currentTarget.src =
                        "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1zbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZGRkIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtc2l6ZT0iMTgiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5MYWIgU2Vzc2lvbjwvdGV4dD48L3N2Zz4=";
                    }}
                  />
                 {false && (
  <h4 className="text-lg font-bold text-[#000000] mb-2">
    Research Conference
  </h4>
)}
                  <p className="text-sm text-[#000000] text-justify">
                    Honored to be selected among 46 professors nationwide for a 2-week academic visit to IIT Delhi as a representative of Computer Science.
                  </p>
                </div>
                <div className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow duration-300">
                  <img
                    src="/Image3.jpeg"
                    //alt="Workshop Teaching"
                    className="w-full h-80 object-cover rounded-md mb-4 bg-gray-200"
                    onError={(e) => {
                      e.currentTarget.src =
                        "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1zbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZGRkIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtc2l6ZT0iMTgiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5Xb3Jrc2hvcDwvdGV4dD48L3N2Zz4=";
                    }}
                  />
                  {false && (
  <h4 className="text-lg font-bold text-[#000000] mb-2">
    Research Conference
  </h4>
)}
                  <p className="text-sm text-[#000000] text-justify">
                    Invited to the CEEE Program for Engineering Education Excellence, led by AICTE, INAE, and Infosys Foundation for top educators in India.
                  </p>
                </div>
                <div className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow duration-300">
                  <img
                    src="/Image4.jpeg"
                    //alt="Team Collaboration"
                    className="w-full h-80 object-cover rounded-md mb-4 bg-gray-200"
                    onError={(e) => {
                      e.currentTarget.src =
                        "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1zbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZGRkIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtc2l6ZT0iMTgiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5UZWFtIE1lZXRpbmc8L3RleHQ+PC9zdmc+";
                    }}
                  />
                  {false && (
  <h4 className="text-lg font-bold text-[#000000] mb-2">
    Research Conference
  </h4>
)}
                  <p className="text-sm text-[#000000] text-justify">
                    Engaged in an academic dialogue with Prof. Partha Pratim Das of IIT Kharagpur on advanced algorithms and innovative teaching paradigms.
                  </p>
                </div>
                <div className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow duration-300">
                  <img
                    src="/Image7.jpeg"
                    //alt="Graduation Ceremony"
                    className="w-full h-80 object-cover rounded-md mb-4 bg-gray-200"
                    onError={(e) => {
                      e.currentTarget.src =
                        "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1zbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZGRkIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtc2l6ZT0iMTgiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5HcmFkdWF0aW9uIERheTwvdGV4dD48L3N2Zz4=";
                    }}
                  />
                  {false && (
  <h4 className="text-lg font-bold text-[#000000] mb-2">
    Research Conference
  </h4>
)}
                  <p className="text-sm text-[#000000] text-justify">
                    Participated in an insightful discussion with Nitendra Rajput, SVP & Head at Mastercard, on the transformative role of AI in today's generation.
                  </p>
                </div>
                <div className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow duration-300">
                  <img
                    src="/Image5.jpeg"
                    //alt="Award Ceremony"
                    className="w-full h-80 object-cover rounded-md mb-4 bg-gray-200"
                    onError={(e) => {
                      e.currentTarget.src =
                        "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1zbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZGRkIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtc2l6ZT0iMTgiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5SZWNvZ25pdGlvbjwvdGV4dD48L3N2Zz4=";
                    }}
                  />
                  {false && (
  <h4 className="text-lg font-bold text-[#000000] mb-2">
    Research Conference
  </h4>
)}
                  <p className="text-sm text-[#000000] text-justify">
                    At Triund’s peak, amidst the mountains as always. Embracing the tranquility that continues to inspire clarity with passion, & ambition.
                  </p>
                </div>
              </div>
              {/*<div className="text-center mt-8">
                <Link href="/gallery">
                  <Button className="bg-[#B6B09F] hover:bg-[#B6B09F]/90 text-white transition-all duration-300 hover:scale-105 font-medium px-8 py-3">
                    View More Images
                  </Button>
                </Link>
              </div>*/}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className="py-16 bg-white/20 backdrop-blur-xl relative scroll-mt-32">
          <div className="container mx-auto px-4">
            <h3 className="text-3xl font-bold text-center text-[#000000] mb-12">
              Get In Touch
            </h3>
            <div className="max-w-2xl mx-auto">
              <Card className="bg-white/50 backdrop-blur-xl border-[#B6B09F]/30 glass-morphism-card hover:bg-white/60 transition-all duration-500">
                <CardContent className="p-8">
                  {/* Success Animation */}
                  {showSuccess && (
                    <div className="mb-6 p-4 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-lg animate-slide-in-from-top shadow-lg">
                      <div className="flex items-center justify-center space-x-2">
                        <CheckCircle className="w-6 h-6 text-green-600 animate-checkmark" />
                        <p className="text-green-800 font-semibold animate-enhanced-bounce">
                          Message sent successfully!!
                        </p>
                      </div>
                      <p className="text-green-600 text-sm text-center mt-1 animate-fade-in">
                        Thank you for reaching out. I'll get back to you soon!
                      </p>
                    </div>
                  )}

                  <form className="space-y-6" onSubmit={handleSubmit}>
                    <input
                      type="hidden"
                      name="access_key"
                      value="80d364a3-8506-41a1-8ac0-9d1f07a95218"
                    />
                    <input
                      type="hidden"
                      name="subject"
                      value="Form Submission from Portfolio"
                    />
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label
                          htmlFor="lname"
                          className="text-[#000000] font-medium">
                          Your Name
                        </Label>
                        <Input
                          name="Your Name"
                          id="lname"
                          placeholder="your last name"
                          required
                          disabled={isSubmitting}
                          className="bg-white/60 border-[#B6B09F]/30 text-[#000000] placeholder:text-[#000000]/60 focus:bg-white/80 transition-all duration-300 disabled:opacity-50"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label
                        htmlFor="email"
                        className="text-[#000000] font-medium">
                        Email
                      </Label>
                      <Input
                        name="email"
                        id="email"
                        type="email"
                        placeholder="email.@example.com"
                        required
                        disabled={isSubmitting}
                        className="bg-white/60 border-[#B6B09F]/30 text-[#000000] placeholder:text-[#000000]/60 focus:bg-white/80 transition-all duration-300 disabled:opacity-50"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label
                        htmlFor="subject"
                        className="text-[#000000] font-medium">
                        Subject
                      </Label>
                      <Input
                        name="subject"
                        id="subject"
                        placeholder="Research Collaboration Inquiry"
                        required
                        disabled={isSubmitting}
                        className="bg-white/60 border-[#B6B09F]/30 text-[#000000] placeholder:text-[#000000]/60 focus:bg-white/80 transition-all duration-300 disabled:opacity-50"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label
                        htmlFor="message"
                        className="text-[#000000] font-medium">
                        Message
                      </Label>
                      <Textarea
                        name="message"
                        id="message"
                        placeholder="I would like to discuss potential collaboration opportunities..."
                        rows={5}
                        required
                        disabled={isSubmitting}
                        className="bg-white/60 border-[#B6B09F]/30 text-[#000000] placeholder:text-[#000000]/60 focus:bg-white/80 transition-all duration-300 resize-none disabled:opacity-50"
                      />
                    </div>
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-[#B6B09F] hover:bg-[#B6B09F]/90 text-white transition-all duration-300 hover:scale-105 font-medium py-3 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100">
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 mr-2 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4 mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>

                  <div className="mt-8 pt-6 border-t border-[#B6B09F]/30">
                    <div className="grid md:grid-cols-3 gap-4 text-center">
                      <div className="flex flex-col items-center">
                        <Mail className="w-5 h-5 text-[#B6B09F] mb-2" />
                        <p className="text-sm font-medium text-[#000000]">
                          Email
                        </p>
                        <p className="text-sm text-[#000000]">
                          debjitg7865@gmail.com
                        </p>
                      </div>
                      <div className="flex flex-col items-center">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-5 h-5 text-[#B6B09F] mb-2"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8h4V24h-4V8zm7.5 0h3.8v2.2h.05c.53-1 1.82-2.2 3.75-2.2 4 0 4.75 2.63 4.75 6v9H16v-8.1c0-1.93-.03-4.4-2.7-4.4-2.7 0-3.1 2.1-3.1 4.3V24H6V8z" />
  </svg>
  <p className="text-sm font-medium text-[#000000]">LinkedIn</p>
  <a
    href="https://www.linkedin.com/in/debjit-ghosh-cs"
    target="_blank"
    rel="noopener noreferrer"
    className="text-sm text-[#000000] underline hover:text-blue-600"
  >
    /in/debjit-ghosh-cs
  </a>
</div>

                      <div className="flex flex-col items-center">
                        <MapPin className="w-5 h-5 text-[#B6B09F] mb-2" />
                        <p className="text-sm font-medium text-[#000000]">
                          Office
                        </p>
                        <p className="text-sm text-[#000000]">
                          Kolkata, West Bengal
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#B6B09F] text-white py-8 relative">
        <div className="container mx-auto px-4 text-center">
          <p className="font-medium">
            &copy; 2025 Debjit Ghosh. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
