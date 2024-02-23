export interface EducationtState {
  educations: Education[]
}

export interface Education {
  school: string
  degree: string
  graduated: string
  achievements: string
}

export interface EducationButtonProps {
  education: Education
  school: string
  degree: string
  graduated: string
  achievements: string
}
