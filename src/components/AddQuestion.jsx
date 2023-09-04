import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"
import React from 'react'
import { TagsInput } from "react-tag-input-component";

function AddQuestion() {
    
  return (
    <div className='add-question'>
         <div className='add-question-container'>
            <div className='head-title'>
                <h1>Ask a public question</h1>
            </div>
            <div className='question-container'>
                <div className='question-options'>
                    <div className='question-option'>
                        <div className='title'>
                            <h3>Title</h3>
                            <small>Be specific and imaging you are asking a question to another person</small>
                          
                            <input type='text' placeholder='Add question title'/>
                        </div>
                    </div>
                    <div className='question-option'>
                        <div className='title'>
                            <h3>Body</h3>
                            <small>Include all the information someone would need to answer your question</small>
                            <ReactQuill/>
                        </div>
                    </div>
                    <div className='question-option'>
                        <div className='title'>
                            <h3>Tags</h3>
                            <small>Add Upto 5 to 6 tags.</small>
                            <input type='text' placeholder='Add question tags'/>
                            
                           
                        </div>
                    </div>
                </div>
            </div>
            <button className="">Add your question</button>
         </div>
  
    </div>
  )
}

export default AddQuestion
