export interface MenuState {
  menus: Menu[]
}

export interface Menu {
  name: string
  path: string
  icon: string
}

export interface MenuButtonProps {
  menu: Menu
  pathname: string
}
