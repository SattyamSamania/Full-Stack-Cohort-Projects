import React from 'react'

const InputBox = ({label, onChange, placeholder }) => {
  return (
    <>
<div className="text-md font-medium text-left py-3">
    {label}
</div>
<input placeholder={placeholder} onChange={onChange} className="w-full px-2 py-1 border rounded border-slate-200" />
      
    </>
  )
}

export default InputBox
