import React, { useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'

const Write = () => {
  const[value,setValue] =useState('');
  console.log(value)
  return (
    <div className='add'>
  <div className='content'>
  <input placeholder='Title'></input>
  <div className='editorContainer'>
  <ReactQuill theme='snow' value={value} onChange={setValue}/>;
  </div>
  </div>
   <div className='menu'>
     <div className='item'>
     
<h1>publish</h1>
<span>
 <b>Status: </b>Draft
</span>
<span>
  <b>Visibility: </b> Public
</span>
<input type='file' id='file'></input>
<label htmlFor='file'>Upload Image
</label>
<div className='buttons'>
<button>Save as Draft</button>
<button>Update</button>
</div>
     </div>
   <div className='item1'>
     <h1>Category</h1>
     <input type="radio" name="cat" value="art" id='art'></input>
     <label htmlFor='art'>Art</label>
     <input type="radio" name="cat" value="science" id='science'></input>
     <label htmlFor='science'>Science</label>
     <input type="radio" name="cat" value="technology" id='technology'></input>
     <label htmlFor='technology'>Technology</label>
     <input type="radio" name="cat" value="cinema" id='cinema'></input>
     <label htmlFor='cinema'>Cinema</label>
     <input type="radio" name="cat" value="food" id='food'></input>
     <label htmlFor='food'>Food</label>
   </div>
  </div>      
    </div>
  )
}

export default Write
