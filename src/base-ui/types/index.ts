type itemType = 'input' | 'password' | 'select' | 'datePicker'
export interface IFormType {
  label: string
  type: itemType
  placeholder?: any
  options?: any
  otherOptions?: any
  rules?: any
  field: string
}

export interface IForm {
  fromItem: IFormType[]
  labelWidth?: string
  colWidth?: any
  itemStyle?: any
}
