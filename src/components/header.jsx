import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import InboxIcon from '@mui/icons-material/Inbox';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import TableRowsIcon from '@mui/icons-material/TableRows';
import {Link} from 'react-router-dom';


function Header() {
  return (
    <div className='main-div'> 
  <header>
  <div className="h-container">

    <div className='headerleft'>
      <Link>
      <img src='https://stackoverflow.design/assets/img/logos/so/logo-stackoverflow.png' alt='logo'/>
      </Link>
      
      <h3>Product</h3>
    </div>
    <div className='headermiddle'>
      <div className='header-search'>
      <SearchIcon/>
    <input type="text" placeholder='search...'/>
      </div>
   
    </div>
    <div className='headerright'>
    <AccountCircleIcon/>
      <InboxIcon />
      <EmojiEventsIcon/>
      <QuestionMarkIcon/>
      <TableRowsIcon />


      <div/>
    </div>

  </div>
</header>
    </div>
   
  )
}

export default Header;
