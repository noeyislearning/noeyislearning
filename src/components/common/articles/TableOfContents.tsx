import React from "react"

interface TableOfContentsProps {
  content: string
}

const TableOfContents: React.FC<TableOfContentsProps> = ({ content }) => {
  const generateTableOfContents = (content: string) => {
    const regex = /^(#{1,3}) (.+)$/gm
    const matches = content.matchAll(regex)

    if (!matches) return null

    const headings = Array.from(matches).map((match) => ({
      level: match[1].length,
      text: match[2],
    }))

    return (
      <nav>
        <ul>
          {headings.map((heading, index) => (
            <li key={index} style={{ marginLeft: `${heading.level - 1}rem` }}>
              <a href={`#${heading.text}`}>{heading.text}</a>
            </li>
          ))}
        </ul>
      </nav>
    )
  }

  return <>{generateTableOfContents(content)}</>
}

export default TableOfContents
