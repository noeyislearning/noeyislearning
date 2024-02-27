export interface EmailState {
  emails: Email[]
}

export interface Email {
  email: string
  description: string
}

export interface EmailButtonProps {
  email: string
  description: string
}
