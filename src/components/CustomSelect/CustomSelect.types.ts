export interface CustomSelectProps {
  defaultText: string
  optionsList: TOption[]
  className: string
}

export type TOption = {
  id: number
  name: string
}
