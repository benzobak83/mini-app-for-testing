import React, { FC, useRef } from 'react'
import CustomSelect from '../../CustomSelect/CustomSelect'
import { TOption } from '../../CustomSelect/CustomSelect.types'

const ProductSelects: FC = () => {
  const optionList = useRef<TOption[]>([
    { id: 1, name: 'Steel' },
    { id: 2, name: 'Plasstic' },
    { id: 3, name: 'Tree' },
    { id: 4, name: 'check' },
    { id: 5, name: 'check' },
    { id: 6, name: 'check' },
    { id: 7, name: 'check' },
  ])
  return (
    <div className="description__selects selects">
      <CustomSelect
        defaultText="Material"
        optionsList={optionList.current}
        className={'selects__item'}
      />
      <CustomSelect
        defaultText="Dimensions"
        optionsList={optionList.current}
        className={'selects__item'}
      />
    </div>
  )
}

export { ProductSelects }
