"use client"
/** Components */
import SocialButton from "@/components/common/buttons/SocialButton"
/** Redux */
import { useSelector } from "react-redux"
import { RootState } from "@/redux/store"
export default function Socials() {
  const { socials } = useSelector((state: RootState) => state.social)
  return (
    <ul className="space-y-1 font-medium">
      {socials.map((social, index: number) => (
        <li key={index}>
          <SocialButton
            social={social}
            url={social.url}
            handle={social.handle}
          />
        </li>
      ))}
    </ul>
  )
}
