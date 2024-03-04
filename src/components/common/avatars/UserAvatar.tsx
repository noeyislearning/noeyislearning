"use client"
import Image from "next/image"

/** Redux */
import { useSelector } from "react-redux"
import { RootState } from "@/redux/store"

const UserAvatar = () => {
  // Select the user data from the Redux store
  const user = useSelector((state: RootState) => state.user.user)

  // Destructure user data
  const { user_img_URL } = user

  return (
    <Image
      className="h-10 w-10 rounded-full border border-zinc-500"
      src={user_img_URL}
      alt="user avatar"
      loading="lazy"
      width={40}
      height={40}
    />
  )
}

export default UserAvatar
