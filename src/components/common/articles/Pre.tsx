"use client"
import { useState } from "react"

import { Copy, Check } from "lucide-react"
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter"
import { base16AteliersulphurpoolLight } from "react-syntax-highlighter/dist/cjs/styles/prism"

export default function Pre({ children }: any) {
  const [copied, setCopied] = useState(false)

  const match = children.props.className?.match(/lang-([\w]+)/)
  const language = match ? match[1] : ""
  const childrenStr =
    typeof children === "string" ? children : children.props.children

  const handleCopyClick = () => {
    navigator.clipboard
      .writeText(childrenStr)
      .then(() => {
        setCopied(true)
        setTimeout(() => setCopied(false), 3000)
      })
      .catch(() => setCopied(false))
  }

  return (
    <div className="pre-code relative">
      <SyntaxHighlighter
        language={"javascript"}
        style={base16AteliersulphurpoolLight}
        showLineNumbers={true}
        wrapLines={true}
        lineNumberStyle={{ color: "#A9A9A9" }}
        lineProps={(lineNumber: number) => {
          const style: React.CSSProperties = {}
          if (lineNumber === 1) {
            style.marginTop = "24px"
          }
          return { style }
        }}
      >
        {childrenStr}
      </SyntaxHighlighter>
      {!copied ? (
        <button
          onClick={handleCopyClick}
          className="absolute right-2 top-2 z-50 rounded-md border p-1.5 transition-all duration-500 ease-in-out hover:bg-zinc-100"
        >
          <Copy className="h-4 w-4" />
        </button>
      ) : (
        <div className="absolute right-2 top-2 z-50 rounded-md border p-1.5 transition-all duration-500 ease-in-out hover:bg-zinc-100">
          <Check className="h-4 w-4 " />
        </div>
      )}
    </div>
  )
}
