import matter from "gray-matter"
import path from 'path'
import fileSystem from 'fs'

const directory = path.join(process.cwd(), 'projects')

export async function readGalleryItem(name) {
}

export default async function readGalleryItems() {
    const files = fileSystem.readdirSync(directory)
    const parsed = files.map(x => {
        const fileDirectory = path.join(directory, x)
        const markdown = matter(fileSystem.readFileSync(fileDirectory))
        return {
            content: markdown.content,
            data: markdown.data
        }
    })
    return parsed
}