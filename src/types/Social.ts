export interface SocialState {
  socials: Social[]
}

export interface Social {
  name: string
  url: string
  handle: string
  icon: string
}

export interface SocialButtonProps {
  social: Social
  handle: string
  url: string
}
