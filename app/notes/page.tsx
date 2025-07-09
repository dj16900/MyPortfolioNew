'use client'

import Link from 'next/link'
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/fullscreen-dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useState, useMemo, useEffect } from 'react'
import { ArrowLeft } from 'lucide-react'

// Define types for note data
interface NoteData {
    id: string;
    title: string;
    date: string;
}

interface NoteContentData extends NoteData {
    contentHtml: string;
}

export default function Notes() {
    const [allNotesData, setAllNotesData] = useState<NoteData[]>([])
    const [activeNote, setActiveNote] = useState<NoteContentData | null>(null)
    const [searchQuery, setSearchQuery] = useState('')

    useEffect(() => {
        fetch('/api/notes')
            .then(res => {
                if (!res.ok) {
                    throw new Error('Failed to fetch notes')
                }
                return res.json()
            })
            .then(data => setAllNotesData(data))
            .catch(error => {
                console.error('Error loading notes:', error)
                setAllNotesData([])
            })
    }, [])

    const filteredNotes = useMemo(() => {
        return allNotesData.filter(note =>
            note.title.toLowerCase().includes(searchQuery.toLowerCase())
        )
    }, [allNotesData, searchQuery])

    const handleNoteClick = async (id: string) => {
        try {
            const res = await fetch(`/api/notes/${id}`)
            if (!res.ok) {
                throw new Error('Failed to fetch note content')
            }
            const noteContent = await res.json()
            setActiveNote(noteContent)
        } catch (error) {
            console.error('Error loading note:', error)
            // Optionally show an error message to the user
        }
    }

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

            <header className="bg-white/20 backdrop-blur-xl border-b border-[#B6B09F]/30 sticky top-0 left-0 w-full z-50 glass-morphism">
                <div className="container mx-auto px-4 py-4">
                    <nav className="flex justify-between items-center">
                        <Link href="/" className="text-2xl font-bold text-[#000000] drop-shadow-sm">
                            Mr. Debjit Ghosh
                        </Link>
                        <Button asChild variant="outline" className="bg-white/50 backdrop-blur-xl border-[#B6B09F]/30 glass-morphism-card hover:bg-white/60 transition-all duration-500 text-[#000000] font-medium">
                            <Link href="/">
                                <ArrowLeft className="w-4 h-4 mr-2" />
                                Go Back
                            </Link>
                        </Button>
                    </nav>
                </div>
            </header>

            <main className="container mx-auto px-4 py-16">
                <h1 className="text-5xl font-bold mb-12 text-center text-[#000000] drop-shadow-sm">Notes</h1>
                <div className="max-w-4xl mx-auto mb-8">
                    <Input
                        type="text"
                        placeholder="Search notes..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="bg-white/70 backdrop-blur-md border-[#B6B09F]/70 glass-morphism-card focus:ring-[#B6B09F] text-[#1A1A1A] placeholder:text-[#4A4A4A] font-medium shadow-md"
                    />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
                    {filteredNotes.map(({ id, title, date }) => (
                        <Dialog key={id} onOpenChange={(open) => !open && setActiveNote(null)}>
                            <DialogTrigger asChild>
                                <Button
                                    variant="outline"
                                    className="h-48 w-full justify-start bg-white/80 backdrop-blur-md border-[#B6B09F]/70 glass-morphism-card hover:bg-white/90 transition-all duration-500 text-[#2D2D2D] font-medium flex flex-col items-start p-6 shadow-lg"
                                    onClick={() => handleNoteClick(id)}
                                >
                                    <h3 className="text-lg font-bold text-[#1A1A1A] mb-2 line-clamp-3 text-left w-full break-words">{title}</h3>
                                    <p className="text-sm mt-auto text-[#4A4A4A] font-semibold">{date}</p>
                                </Button>
                            </DialogTrigger>
                            {activeNote && activeNote.id === id && (
                                <DialogContent className="bg-white/85 backdrop-blur-md border-[#B6B09F]/70 glass-morphism-card hover:bg-white/90 transition-all duration-500 shadow-xl max-h-[90vh] flex flex-col">
                                    <DialogHeader className="text-left mb-4 flex-shrink-0">
                                        <DialogTitle className="text-[#1A1A1A] font-bold text-xl text-left">{activeNote.title}</DialogTitle>
                                        <DialogDescription className="text-[#4A4A4A] font-semibold text-left">
                                            {activeNote.date}
                                        </DialogDescription>
                                    </DialogHeader>
                                    <div className="flex-1 prose prose-lg dark:prose-invert max-w-none text-[#2D2D2D] font-medium prose-headings:text-[#1A1A1A] prose-strong:text-[#1A1A1A] text-left prose-pre:text-left overflow-y-auto min-h-0 pb-6 prose-table:table-auto prose-th:border prose-td:border prose-th:p-2 prose-td:p-2 prose-blockquote:border-l-4 prose-blockquote:border-[#B6B09F] prose-blockquote:pl-4 prose-blockquote:bg-gray-50 prose-blockquote:py-2 prose-blockquote:rounded-r-md prose-code:bg-gray-100 prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-code:border prose-code:border-gray-200 prose-pre:border prose-pre:border-gray-200 prose-pre:bg-gray-50 prose-pre:rounded-lg prose-pre:p-4 prose-a:text-[#B6B09F] prose-a:no-underline hover:prose-a:underline prose-img:rounded-lg prose-img:shadow-md prose-img:max-w-full prose-img:h-auto scrollbar-thin scrollbar-thumb-[#B6B09F]/50 scrollbar-track-transparent" dangerouslySetInnerHTML={{ __html: activeNote.contentHtml }} />
                                </DialogContent>
                            )}
                        </Dialog>
                    ))}
                </div>
            </main>
        </div>
    )
}
