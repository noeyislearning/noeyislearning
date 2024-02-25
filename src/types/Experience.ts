export interface ExperienceState {
  experiences: Experience[]
}

export interface Experience {
  position: string
  company: string
  company_type: string
  employment_type: string
  setup: string
  location: string
  dates: {
    start: string
    end: string
  }
}

export interface ExperienceButtonProps {
  education: Experience
  position: string
  company: string
  company_type: string
  employment_type: string
  setup: string
  location: string
  dates: string
}
