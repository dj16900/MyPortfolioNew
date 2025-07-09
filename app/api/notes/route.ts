import { getSortedNotesData } from '@/lib/notes'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const allNotesData = getSortedNotesData()
    return NextResponse.json(allNotesData)
  } catch (error) {
    console.error('Error fetching notes:', error)
    return NextResponse.json({ error: 'Failed to fetch notes' }, { status: 500 })
  }
}
