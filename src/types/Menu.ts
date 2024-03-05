export interface MenuState {
  menus: Menu[]
}

export interface Menu {
  name: string
  path: string
  icon: string
  markdown_dir_name?: string
  markdownCounts?: Record<string, number>
}

export interface SubMenu {
  name: string
  path: string
  icon: string
}

export interface MenuLinkProps {
  menu: Menu
  pathname: string
  markdownCounts?: Record<string, number>
}

export interface MenuButtonStaticProps {
  markdownCounts: Record<string, number>
}
