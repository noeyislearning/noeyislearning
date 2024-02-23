"use client"
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
    <div className="flex flex-row items-center gap-2">
      <UserAvatar />
      <div className="flex flex-col items-start">
        <p className="font-semibold">{name}</p>
        <p className="-mt-1 text-sm text-gray-500">{positions.join(", ")}</p>
      </div>
    </div>
  )
}
