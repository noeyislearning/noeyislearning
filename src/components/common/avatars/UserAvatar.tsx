"use client"
import Image from "next/image"

import { useSelector } from "react-redux"
import { RootState } from "@/redux/store"

const UserAvatar = () => {
  const user = useSelector((state: RootState) => state.user.user)

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
