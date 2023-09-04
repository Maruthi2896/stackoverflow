import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {Link} from 'react-router-dom';

function AllQuestion() {
  return (
    <div className='all-questions'>
        <div className='all-questions-container'>
            <div className='all-questions-left'>
                <div className='all-options'>
                    <div className='all-option'>
                        <p>0</p>
                        <span>Votes</span>
                    </div>
                    <div className='all-option'>
                        <p>0</p>
                        <span>Answers</span>
                    </div>
                    <div className='all-option'>
                        <small>0 Views</small>
                    </div>
                </div>

            </div>
            <div className='question-answer'>
                <Link>unknown cursor trail animation - please advise</Link>
                <div style={{width:"90%"}}>
                    <div> I'm trying to create a animating spline chart but I don't know where to start

I want to create like this using createjs please help me. I can't find any example like this

This is the output I want. https://www.syncfusion.com/javascript-ui-controls/js-charts/chart-types/spline-area-chart</div>
                </div>
            </div>
            <div style={{display:"flex",height:"60px" ,width:"auto", flexWrap:"wrap"}} >
                 <span className='question-tags'>React</span>
                 <span className='question-tags'>Antd</span>
                 <span className='question-tags'>Create js</span>
            </div>
            <div  className='author'>
                <small>Timestamp</small>
                <div className='author-details'>
                    <AccountCircleIcon/>
                    <p>User name</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AllQuestion;
