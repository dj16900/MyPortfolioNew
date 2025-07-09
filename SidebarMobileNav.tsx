import { useState } from "react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
// VisuallyHidden for accessibility
const VisuallyHidden = ({ children }: { children: React.ReactNode }) => (
  <span style={{ position: 'absolute', width: 1, height: 1, padding: 0, margin: -1, overflow: 'hidden', clip: 'rect(0,0,0,0)', whiteSpace: 'nowrap', border: 0 }}>{children}</span>
)

export default function SidebarMobileNav() {
  const [open, setOpen] = useState(false)
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger aria-label="Open navigation" className="p-2 rounded-md bg-white/40 border border-[#B6B09F]/30">
        <Menu className="w-6 h-6 text-[#B6B09F]" />
      </SheetTrigger>
      <SheetContent side="right" className="bg-white/90 w-64 p-0">
        {/* DialogTitle for accessibility, visually hidden */}
        <VisuallyHidden>Main Navigation</VisuallyHidden>
        <nav className="flex flex-col gap-2 mt-8">
          <a href="#about" className="flex items-center gap-3 px-6 py-3 text-[#000000] font-medium hover:bg-[#EAE4D5]/60 transition-all" onClick={() => setOpen(false)}>About</a>
          <a href="#education" className="flex items-center gap-3 px-6 py-3 text-[#000000] font-medium hover:bg-[#EAE4D5]/60 transition-all" onClick={() => setOpen(false)}>Education</a>
          <a href="#experience" className="flex items-center gap-3 px-6 py-3 text-[#000000] font-medium hover:bg-[#EAE4D5]/60 transition-all" onClick={() => setOpen(false)}>Experience</a>
          <a href="#research" className="flex items-center gap-3 px-6 py-3 text-[#000000] font-medium hover:bg-[#EAE4D5]/60 transition-all" onClick={() => setOpen(false)}>Research</a>
          <a href="#technologies" className="flex items-center gap-3 px-6 py-3 text-[#000000] font-medium hover:bg-[#EAE4D5]/60 transition-all" onClick={() => setOpen(false)}>Tech</a>
          <a href="#projects" className="flex items-center gap-3 px-6 py-3 text-[#000000] font-medium hover:bg-[#EAE4D5]/60 transition-all" onClick={() => setOpen(false)}>Projects</a>
          <a href="#publications" className="flex items-center gap-3 px-6 py-3 text-[#000000] font-medium hover:bg-[#EAE4D5]/60 transition-all" onClick={() => setOpen(false)}>Publications</a>
          <a href="/notes" className="flex items-center gap-3 px-6 py-3 text-[#000000] font-medium hover:bg-[#EAE4D5]/60 transition-all" onClick={() => setOpen(false)}>Notes</a>
          <a href="#contact" className="flex items-center gap-3 px-6 py-3 text-[#000000] font-medium hover:bg-[#EAE4D5]/60 transition-all" onClick={() => setOpen(false)}>Contact</a>
        </nav>
      </SheetContent>
    </Sheet>
  )
}
