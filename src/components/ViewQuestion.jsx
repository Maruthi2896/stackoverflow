import React from 'react';
import Sidebar from './sidebar';
import MainQuestion from './mainquestion';




function ViewQns() {
  return (
    <div className='stack-index'>
    <div className='stack-index-content'>
        <Sidebar/>
        <MainQuestion/>
       
    </div>
    </div>
  )
}

export default ViewQns