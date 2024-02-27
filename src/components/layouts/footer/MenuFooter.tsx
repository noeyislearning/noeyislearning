"use client"

/** Lucide React Icons */
import { Forward } from "lucide-react"
/** Redux */
import { useSelector } from "react-redux"
import { RootState } from "@/redux/store"

export default function MenuFooter() {
  const { emails } = useSelector((state: RootState) => state.email)
  return (
    <div className="mt-auto flex w-full flex-col items-start justify-between">
      {emails.map((email, index: number) => (
        <a
          href={"mailto:hello@noeyislearning"}
          target={"_blank"}
          rel={"noopener noreferrer"}
          key={index}
          className="group flex w-full items-center justify-between rounded-lg px-2 py-2 text-gray-900 hover:bg-indigo-100"
        >
          <div className="flex flex-row items-center gap-2">
            <Forward className="h-4 w-4" />
            <div className="flex flex-col items-start">
              <span className="text-sm">{email.email}</span>
              <span className="-mt-1 text-xs text-gray-500">
                {email.description}
              </span>
            </div>
          </div>
        </a>
      ))}
    </div>
  )
}
