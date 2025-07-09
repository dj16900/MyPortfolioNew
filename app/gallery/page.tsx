"use client"

import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

export default function GalleryPage() {
  const galleryImages = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=300&fit=crop",
      title: "Research Conference Presentation",
      description: "Presenting latest findings on Machine Learning algorithms at international AI conference in Singapore.",
      date: "March 2024"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop",
      title: "Laboratory Session",
      description: "Working with students on advanced AI projects in the university computer science laboratory.",
      date: "February 2024"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop",
      title: "Python Workshop",
      description: "Conducting intensive workshop on Python programming and data analysis techniques for industry professionals.",
      date: "January 2024"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop",
      title: "Team Collaboration",
      description: "Collaborating with research team on industry-academic partnership projects and grant proposals.",
      date: "December 2023"
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&h=300&fit=crop",
      title: "Graduation Day",
      description: "Celebrating with graduating students at Adamas University annual convocation ceremony.",
      date: "November 2023"
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1549057446-9f5c6ac91a04?w=400&h=300&fit=crop",
      title: "Award Recognition",
      description: "Receiving recognition for outstanding contribution to computer science education and research.",
      date: "October 2023"
    },
    {
      id: 7,
      src: "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=400&h=300&fit=crop",
      title: "Guest Lecture",
      description: "Delivering guest lecture on Machine Learning applications in industry at IIT Kharagpur.",
      date: "September 2023"
    },
    {
      id: 8,
      src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
      title: "Student Mentoring",
      description: "Mentoring undergraduate students on their final year projects in artificial intelligence.",
      date: "August 2023"
    },
    {
      id: 9,
      src: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=400&h=300&fit=crop",
      title: "Academic Conference",
      description: "Participating in national conference on emerging technologies in computer science education.",
      date: "July 2023"
    },
    {
      id: 10,
      src: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&h=300&fit=crop",
      title: "Industry Partnership",
      description: "Signing MOU with tech companies for collaborative research and student internship programs.",
      date: "June 2023"
    },
    {
      id: 11,
      src: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=400&h=300&fit=crop",
      title: "Faculty Development",
      description: "Attending faculty development program on modern teaching methodologies and curriculum design.",
      date: "May 2023"
    },
    {
      id: 12,
      src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
      title: "Research Publication",
      description: "Celebrating successful publication of research paper in international journal with co-authors.",
      date: "April 2023"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F2F2F2] via-[#EAE4D5] to-[#B6B09F]">
      {/* Header */}
      <header className="bg-white/20 backdrop-blur-xl border-b border-[#B6B09F]/30 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/">
              <Button variant="ghost" className="text-[#000000] hover:text-[#B6B09F] hover:bg-white/20">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Portfolio
              </Button>
            </Link>
            <h1 className="text-2xl font-bold text-[#000000]">Image Gallery</h1>
            <div></div>
          </div>
        </div>
      </header>

      {/* Gallery Content */}
      <main className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-white shadow-lg rounded-lg p-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-[#000000] mb-4">Complete Image Gallery</h2>
              <p className="text-lg text-[#000000] max-w-2xl mx-auto">
                A comprehensive collection of moments from my academic journey, research endeavors, and professional milestones.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {galleryImages.map((image) => (
                <Card key={image.id} className="bg-white shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <CardContent className="p-4">
                    <img
                      src={image.src}
                      alt={image.title}
                      className="w-full h-48 object-cover rounded-md mb-4 bg-gray-200"
                      onError={(e) => {
                        e.currentTarget.src = `data:image/svg+xml;base64,${btoa(`<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="#ddd"/><text x="50%" y="50%" font-size="14" text-anchor="middle" dy=".3em">${image.title}</text></svg>`)}`
                      }}
                    />
                    <h3 className="text-lg font-bold text-[#000000] mb-2">{image.title}</h3>
                    <p className="text-sm text-[#000000] mb-2">{image.description}</p>
                    <p className="text-xs text-[#B6B09F] font-medium">{image.date}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link href="/">
                <Button className="bg-[#B6B09F] hover:bg-[#B6B09F]/90 text-white transition-all duration-300 hover:scale-105 font-medium px-8 py-3">
                  Return to Portfolio
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#B6B09F] text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="font-medium">&copy; 2024 Mr. Debjit Ghosh. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
