import React from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function RichEditor({handleOnChange, value}) {
  return (
    <ReactQuill theme='snow' onChange={(e) => handleOnChange(e)} style={{height: '20rem'}} defaultValue={value}/>
  )
}

export default RichEditor