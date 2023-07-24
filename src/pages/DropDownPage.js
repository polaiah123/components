import React from 'react'
import { useState } from 'react'
import Dropdown from '../components/Dropdown'

function DropdownPage() {

const [selection, setSelection] = useState(null);
const handleSelection = (Option) => {
  setSelection(Option);
};

  const options = [
    { label: 'Red' , value:'Red'},
    { label: 'Green', value:'Green'},
    { label: 'Blue', value:'Blue'},
    { label: 'Gray', value:'Gray'}
  ]

  return (
    <div><Dropdown 
    options={ options }
    value={selection}
    onChange= {handleSelection}
    /></div>
  )
}

export default DropdownPage