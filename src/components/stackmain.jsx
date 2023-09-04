import React from 'react';
import Sidebar from './sidebar';
import Maincomp from './maincomp';

function Stackmain() {
  return (
    <div className='stack-index'>
    <div className='stack-index-content'>
        <Sidebar/>
        <Maincomp/>
       </div>
    </div>
  )
}

export default Stackmain