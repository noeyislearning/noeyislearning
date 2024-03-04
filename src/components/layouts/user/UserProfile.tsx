"use client"
import Link from "next/link"
/** Redux */
import { useSelector } from "react-redux"
import { RootState } from "@/redux/store"

/** Components */
import UserAvatar from "../../common/avatars/UserAvatar"

export default function UserProfile() {
  // Select the user data from the Redux store
  const user = useSelector((state: RootState) => state.user.user)

  // Destructure user data
  const { name, positions } = user

  return (
    <Link href={"/"} className="group flex flex-row items-center gap-2 ">
      <UserAvatar />
      <div className="flex flex-col items-start">
        <p className="font-medium">{name}</p>
        <p className="-mt-1 text-sm text-zinc-400">{positions.join(", ")}</p>
      </div>
    </Link>
  )
}
