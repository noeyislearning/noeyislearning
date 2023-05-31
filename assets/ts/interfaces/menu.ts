export interface MenuItemProps {
  name: string;
  link: string;
  isAvailable: boolean;
  isEmail: boolean;
}

export interface MenuProps {
  menu: MenuItemProps[];
}
