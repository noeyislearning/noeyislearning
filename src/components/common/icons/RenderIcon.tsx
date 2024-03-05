import { ComponentType, ReactNode } from "react"

interface RenderIconProps {
  iconName: string
  IconComponent: ComponentType<{ className?: string }>
}

const RenderIcon: React.FC<RenderIconProps> = ({ iconName, IconComponent }) => {
  return IconComponent ? <IconComponent className="h-4 w-4" /> : null
}

export default RenderIcon
