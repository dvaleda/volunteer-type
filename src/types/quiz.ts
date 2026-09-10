export type VolunteerTypeId = 'organizator' | 'izvodac' | 'povezivac' | 'kreativac'

export interface VolunteerType {
  id: VolunteerTypeId
  name: string
  emoji: string
  description: string
  funFact: string
  tip: string
  compatibleWith: VolunteerTypeId
}

export interface Answer {
  text: string
  type: VolunteerTypeId
}

export interface Question {
  id: number
  text: string
  answers: Answer[]
}
