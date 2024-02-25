import { Building2, GraduationCap, FlameIcon } from "lucide-react"

interface ExperienceIconProps {
  companyType: string
}

const ExperienceIcon: React.FC<ExperienceIconProps> = ({ companyType }) => {
  switch (companyType) {
    case "company":
      return <Building2 className="h-4 w-4" />
    case "university":
      return <GraduationCap className="h-4 w-4" />
    case "startup":
      return <FlameIcon className="h-4 w-4" />
    default:
      return null
  }
}

export default ExperienceIcon
