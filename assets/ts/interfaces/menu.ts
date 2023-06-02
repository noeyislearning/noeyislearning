export interface NavMenuItemProps {
  name: string;
  link: string;
  isAvailable: boolean;
}

export interface NavMenuProps {
  menu: NavMenuItemProps[];
}

export interface FooterMenuItemProps {
  name: string;
  link: string;
}

export interface FooterMenuProps {
  menu: FooterMenuItemProps[];
}
