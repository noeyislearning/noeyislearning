export interface SocialState {
  socials: Social[]
}

export interface Social {
  name: string
  url: string
  handle: string
  icon: string
}

export interface SocialLinkProps {
  social: Social
  handle: string
  url: string
}
