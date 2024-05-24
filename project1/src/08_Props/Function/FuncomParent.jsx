import React from 'react'
import FunComChild from './FunComChild'

export default function FuncomParent() {
  let name1 = "Nimesh"
  let name2 = "Latesh"
    return (
    <div>
        <FunComChild name={name1} age={22} />
        <FunComChild name={name2} age={24} />
    </div>
  )
}
