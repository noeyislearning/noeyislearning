export default function SideNavSectionDivider({ title }: { title: string }) {
  return (
    <>
      <div className="border"></div>
      <div className="text-sm text-zinc-600">{title}</div>
    </>
  )
}
