export interface UserState {
  user: User
}

export interface User {
  name: string
  email: string
  user_img_URL: string
  positions: string[]
}
