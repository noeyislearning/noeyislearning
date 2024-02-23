export interface HighlightState {
  highlights: Highlight[]
}

export interface Highlight {
  name: string
  description: string
  logo_img_URL: string
  url: string
}

export interface HighlightButtonProps {
  highlight: Highlight
  description: string
  url: string
  logo_img_URL: string
}
