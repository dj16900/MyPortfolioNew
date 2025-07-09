import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkGfm from 'remark-gfm'
import remarkBreaks from 'remark-breaks'
import remarkMath from 'remark-math'
import remarkRehype from 'remark-rehype'
import rehypeKatex from 'rehype-katex'
import rehypeStringify from 'rehype-stringify'

const notesDirectory = path.join(process.cwd(), '_notes')

export function getSortedNotesData() {
  // Get file names under /_notes
  const fileNames = fs.readdirSync(notesDirectory)
  const allNotesData = fileNames.map(fileName => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '')

    // Read markdown file as string
    const fullPath = path.join(notesDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents)

    // Combine the data with the id
    return {
      id,
      ...(matterResult.data as { date: string; title: string })
    }
  })
  // Sort notes by date
  return allNotesData.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
}

export async function getNoteData(id: string) {
  const fullPath = path.join(notesDirectory, `${id}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents)

  // Use unified processor to convert markdown into HTML string with enhanced features
  const processedContent = await unified()
    .use(remarkParse) // Parse markdown
    .use(remarkGfm) // GitHub Flavored Markdown (tables, strikethrough, task lists, etc.)
    .use(remarkMath) // Parse math expressions
    .use(remarkBreaks) // Convert line breaks to <br> tags
    .use(remarkRehype, { allowDangerousHtml: true }) // Convert to rehype
    .use(rehypeKatex) // Render math with KaTeX
    .use(rehypeStringify, { allowDangerousHtml: true }) // Convert to HTML
    .process(matterResult.content)
  const contentHtml = processedContent.toString()

  // Combine the data with the id and contentHtml
  return {
    id,
    contentHtml,
    ...(matterResult.data as { date: string; title: string })
  }
}
