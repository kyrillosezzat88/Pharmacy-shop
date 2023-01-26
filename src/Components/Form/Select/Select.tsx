import React from 'react'
import { SelectPropsTypes } from './Select.types'

const Select = ({ options, id, name, className }: SelectPropsTypes) => {
    return (
        <select name={name} id={id} className={`select ${className}`}>
            {options.map(opt => <option key={opt.id}>{opt.title}</option>)}
        </select>
    )
}

export default Select