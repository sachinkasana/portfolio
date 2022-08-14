import fs from 'fs'
import path from 'path'
import html from 'remark-html'
import matter from 'gray-matter'
import { remark } from 'remark'
const articleDir = path.join(process.cwd(), 'articles')

export function getSortedArticles() {
  // get file name under /articles
  const fileNames = fs.readdirSync(articleDir)

  // map the filename and assign it to constanta
  const allPostsData = fileNames.map(fileName => {
    
    // remove .md extension from the string
    const id = fileName.replace(/\.md$/, '')

    // readd markdown file as a string
    const fullPath = path.join(articleDir, fileName)

    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // use gray matter to parse the post metadata section
    const matterResult = matter(fileContents)

    // combine the data with the id
    return {
      id,
      ...matterResult.data,
    }
  })

  // sort article by date
  return allPostsData.sort(({ date: a }, { date: b }) => {
    if (a < b) {
      return 1
    } else if (a > b) {
      return -1
    } else {
      return 0
    }
  })
}

// get filename for route article/file-name
export function getArticleId() {
  const fileNames = fs.readdirSync(articleDir)
  return fileNames.map(fileName => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ''),
      },
    }
  })
}

export async function getArticles(id) {
  const fullPath = path.join(articleDir, `${id}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  // Use gray-matter to parse the articles metadata section
  const matterResult = matter(fileContents)

  // use remark to convert markdown into HTML string
  const processedContent = await remark().use(html).process(matterResult.content)
  const contentHtml = processedContent.toString()

  // Combine the data with the id and content html
  return {
    id,
    contentHtml,
    ...matterResult.data,
  }
}
