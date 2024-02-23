import Link from "next/link"

export default function MenuFooter() {
  return (
    <div className="mt-auto w-full">
      <p className="text-xs text-gray-500">
        Inspired by{" "}
        <Link
          href={"https://onur.dev/"}
          target={"_blank"}
          className="underline"
        >
          Onur Şuyalçınkaya
        </Link>
      </p>
    </div>
  )
}
